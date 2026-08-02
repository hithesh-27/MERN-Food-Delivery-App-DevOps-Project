# Food-Delivery-App

## Local Run

This repository includes a backend API and a Vite-based React frontend.

### Run locally

1. Start the backend:
   - `cd backend`
   - `npm install`
   - `npm run server`

2. Start the React frontend:
   - `cd frontend`
   - `npm install`
   - `npm run dev`

3. Open the frontend app in your browser.

### Notes

- The frontend uses `VITE_BACKEND_URL` at build time and defaults to `https://food-del-backend-2-tho7.onrender.com`.
- For local development, set `VITE_BACKEND_URL=http://localhost:4000` before building or running the frontend.

## Full Deployment

### Backend Deployment

1. Create GitHub repo: `FOOD-DEL-BACKEND`
2. Push the backend code from `FOOD-DEL-BACKEND` folder
3. Deploy to Render:
   - Connect GitHub repo
   - Build: `npm install`
   - Start: `npm run server`
   - Environment variables (see `.env.example`):
     - `JWT_SECRET=demo_jwt_secret_food_del_2024`
     - `STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_TEST_SECRET_KEY` (get from Stripe test dashboard)
     - `MONGO_URI=mongodb+srv://hitheshgowdaar_db_user:yB7IbGmByVhakEis@cluster0.uxiwnnj.mongodb.net/food-del`
4. Get the deployed URL (e.g. `https://food-del-backend.onrender.com`)

### Frontend Deployment

1. Create a Render Static Site.
2. Connect the GitHub repo `hithesh-27/Food-Delivery-App`.
3. Set the root directory to `frontend`.
4. Build command: `npm install && npm run build`
5. Publish directory: `dist`
6. Add environment variable:
   - `VITE_BACKEND_URL=https://food-del-backend-2-tho7.onrender.com`
7. Deploy.

Once your React frontend is live, set the backend `FRONTEND_URL` environment variable to the React frontend URL.

