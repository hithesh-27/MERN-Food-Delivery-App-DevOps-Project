# 🍅 Tomato — MERN Food Delivery App (DevOps Project)

A production-ready **MERN Food Delivery Application** demonstrating a complete **DevOps CI/CD workflow**. The project consists of three independent services (Backend, Frontend, and Admin) integrated with a Jenkins CI pipeline that performs static code analysis, dependency scanning, container security scanning, and automatically publishes Docker images.

---

# 🚀 Tech Stack

## Application
- React (Vite)
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Stripe Payment Gateway

## DevOps
- Jenkins
- Docker
- Docker Compose
- SonarQube
- OWASP Dependency-Check
- Trivy
- Kubernetes
- Terraform
- Git & GitHub

---

# 📂 Project Structure

```text
.
├── admin/                     # React Admin Panel
├── backend/                   # Express REST API
├── frontend/                  # Customer React Application
├── k8s/                       # Kubernetes manifests
├── terraform/                 # Infrastructure as Code
├── Jenkinsfile                # Jenkins CI Pipeline
├── docker-compose.yml
├── sonar-project.properties
├── DEPLOYMENT_SUMMARY.md
└── README.md
```

---

# 🏗️ Architecture

```text
                 GitHub Repository
                        │
                        ▼
                  Jenkins Pipeline
                        │
     ┌──────────────────┼──────────────────┐
     ▼                  ▼                  ▼
 SonarQube      Dependency Check        Trivy
  Analysis            Scan            Image Scan
     └──────────────────┼──────────────────┘
                        ▼
               Docker Compose Build
                        ▼
             Docker Hub Image Push
                        ▼
              Kubernetes Deployment
                        ▼
                  MongoDB Atlas
```

---

# ⚙️ Application Services

| Service | Technology | Port |
|---------|------------|------|
| Backend | Node.js + Express | 4000 |
| Frontend | React (Vite) | 5173 |
| Admin | React (Vite) | 5174 |
| Database | MongoDB Atlas | Cloud |

---

# 🔄 Jenkins CI Pipeline

The Jenkins pipeline performs the following stages:

1. Clean Workspace
2. Checkout Source Code
3. SonarQube Static Code Analysis
4. OWASP Dependency-Check
5. Docker Compose Build
6. Trivy Image Security Scan
7. Docker Hub Authentication
8. Docker Image Push

### Published Docker Images

- `hitheshgowda10docker/tomato-backend:latest`
- `hitheshgowda10docker/tomato-frontend:latest`
- `hitheshgowda10docker/tomato-admin:latest`

---

# 🐳 Running with Docker

Clone the repository:

```bash
git clone https://github.com/hithesh-27/MERN-Food-Delivery-App-DevOps-Project.git
cd MERN-Food-Delivery-App-DevOps-Project
```

Build and start all services:

```bash
docker compose up --build
```

Application URLs:

| Service | URL |
|---------|-----|
| Backend | http://localhost:4000 |
| Frontend | http://localhost:5173 |
| Admin | http://localhost:5174 |

---

# 💻 Running Without Docker

## Backend

```bash
cd backend
npm install
npm run server
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Admin

```bash
cd admin
npm install
npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
JWT_SECRET=<your_jwt_secret>

MONGO_URI=<your_mongodb_connection_string>

STRIPE_SECRET_KEY=<your_stripe_secret_key>

FRONTEND_URL=http://localhost:5173
```

For both **frontend** and **admin**, configure:

```env
VITE_BACKEND_URL=http://localhost:4000
```

> **Never commit your `.env` file or real credentials to GitHub.**

---

# ☸️ Kubernetes Deployment

Deploy the application using Kubernetes:

```bash
kubectl apply -f k8s/
```

---

# 🌍 Terraform

Infrastructure provisioning files are located in:

```text
terraform/
```

Refer to:

```text
DEPLOYMENT_SUMMARY.md
```

for infrastructure deployment instructions.

---

# 🔒 Security

The CI pipeline includes automated security and quality checks using:

- SonarQube
- OWASP Dependency-Check
- Trivy

All sensitive information should be stored in environment variables or a `.env` file that is excluded from version control.

---

# ✨ Features

- Full MERN Stack Food Delivery Application
- JWT Authentication
- Stripe Payment Integration
- Dockerized Multi-Service Architecture
- Jenkins CI Pipeline
- SonarQube Static Code Analysis
- OWASP Dependency Scanning
- Trivy Container Security Scanning
- Docker Hub Image Publishing
- Kubernetes Deployment
- Terraform Infrastructure Provisioning

---

# 📌 Future Improvements

- GitHub Actions CI/CD Pipeline
- Helm Charts
- Argo CD GitOps Deployment
- Prometheus & Grafana Monitoring
- ELK Stack Logging
- AWS EKS Deployment

---

# 📄 License

This project is intended for educational purposes and DevOps learning. Feel free to fork, explore, and build upon it.
