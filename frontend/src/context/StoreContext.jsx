import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { food_list as fallbackFoodList } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000"

    const addToCart = async (itemId) => {
        setCartItems((prev) => {
            const updated = { ...prev, [itemId]: (prev?.[itemId] ?? 0) + 1 };
            // persist locally
            localStorage.setItem("cartItems", JSON.stringify(updated));
            return updated;
        });
        if (token) {
            await axios.post(backendUrl + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => {
            const updated = { ...prev, [itemId]: Math.max((prev?.[itemId] ?? 0) - 1, 0) };
            localStorage.setItem("cartItems", JSON.stringify(updated));
            return updated;
        });
        if (token) {
            await axios.post(backendUrl + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        const safeCartItems = cartItems || {};
        for (const item in safeCartItems) {
            if (safeCartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (!itemInfo) continue;
                totalAmount += itemInfo.price * safeCartItems[item];
            }

        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/food/list");
            if (response.data?.success && Array.isArray(response.data.data)) {
                setFoodList(response.data.data);
            } else {
                setFoodList(fallbackFoodList);
            }
        } catch (error) {
            console.error("Unable to load food list, using fallback data:", error);
            setFoodList(fallbackFoodList);
        }
    }

    const loadCartData = async (token) => {
        const response = await axios.post(backendUrl + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data?.cartData || {});
    }

    useEffect(() => {

        async function loadData() {
            await fetchFoodList();
            // restore cart from local storage first
            const localCart = localStorage.getItem("cartItems");
            if (localCart) {
                try {
                    const parsed = JSON.parse(localCart);
                    setCartItems(parsed && typeof parsed === 'object' ? parsed : {});
                } catch {
                    setCartItems({});
                }
            }
            if (localStorage.getItem("token")) {
                const tok = localStorage.getItem("token");
                setToken(tok);
                await loadCartData(tok);
            }
        }
        loadData();
    }, [])

    // whenever cartItems change while unauthenticated, persist locally
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // clear cart storage when user logs out
    useEffect(() => {
        if (!token) {
            localStorage.removeItem("cartItems");
        }
    }, [token]);

    const contextValue = {
        food_list,
        cartItems: cartItems || {},
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url: backendUrl,
        token,
        setToken

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;