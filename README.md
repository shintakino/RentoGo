# 🌟 Shintakino RentoGo – Real Estate Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge\&logo=next.js\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge\&logo=typescript\&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-Cognito-FF9900?style=for-the-badge\&logo=amazon-aws\&logoColor=white)

**A modern full-stack real estate rental platform with dual user experiences**

*From property discovery to tenant and property management.*

[🚀 Getting Started](#-getting-started) • [🛠️ Key Features](#-key-features) • [📁 Project Structure](#-project-structure) • [🤝 Contributing](#-contributing)

</div>

---

## 🎯 Overview

**RentoGo** is a real estate platform built for **both tenants and property managers**.
It provides:

* 🏠 **Property Discovery** – Map-based search with advanced filters
* 👥 **Dual User Roles** – Tenants and managers with separate experiences
* 📱 **Responsive Design** – Mobile-first modern UI/UX
* 🔐 **Secure Authentication** – AWS Cognito with role-based access
* 📊 **Dashboard Management** – Manage applications, properties, and payments
* 🗺️ **Interactive Maps** – Mapbox-powered property visualization

---

## 📁 Project Structure

```
shintakino-rentogo/
├── 📱 client/                        # Next.js frontend
│   ├── src/
│   │   ├── app/                      # App router
│   │   │   ├── (auth)/               # Authentication routes
│   │   │   ├── (dashboard)/          # Protected routes
│   │   │   │   ├── managers/         # Manager dashboard
│   │   │   │   └── tenants/          # Tenant dashboard
│   │   │   └── (nondashboard)/       # Public routes
│   │   │       ├── landing/          # Landing & marketing pages
│   │   │       └── search/           # Property search
│   │   ├── components/               # Reusable UI
│   │   │   └── ui/                   # Shadcn/ui components
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── lib/                      # Utilities & constants
│   │   ├── state/                    # Redux store
│   │   └── types/                    # TypeScript definitions
│   ├── public/                       # Static assets
│   └── config files                  # Next.js, Tailwind, ESLint, etc.
└── 🖥️ server/                        # Node.js backend
    ├── src/
    │   ├── controllers/              # Route controllers
    │   ├── middleware/               # Auth & middleware
    │   └── routes/                   # API endpoints
    ├── prisma/                       # Schema & migrations
    └── config files                  # TypeScript, PM2, etc.
```

---

## 🚀 Key Features

### 👥 Dual User Experience

<details>
<summary>Tenants & Managers</summary>

**Tenants can:**

* 🔍 Search rentals with filters & map view
* ❤️ Save favorite properties
* 📝 Submit rental applications
* 🏠 Track leases & payments
* ⚙️ Manage profile

**Managers can:**

* 🏢 List properties with details & images
* 📋 Review and approve/deny applications
* 👥 Manage tenants and lease status
* 💰 Track payments and rental income
* 📊 Access property analytics

</details>

### 🏠 Property Discovery

<details>
<summary>Advanced Search & Maps</summary>

* 🗺️ Interactive Mapbox visualization
* 🔍 Filters: price, bedrooms, amenities
* 📍 Location-based search
* 👀 Multiple listing views (grid/list)
* ❤️ Save properties for later

</details>

### 📱 Modern Dashboard

<details>
<summary>Role-based Dashboards</summary>

* 🎯 Clean and intuitive UI
* 📊 Key metrics with visualizations
* ⚡ Real-time updates & actions
* 📱 Fully responsive design
* 🔔 Notifications for updates

</details>

### 🔐 Secure Authentication

<details>
<summary>AWS Cognito Integration</summary>

* 👤 User registration with role selection
* 🔒 Secure login with session handling
* 🎭 Role-based access (tenants/managers)
* 📧 Email verification

</details>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=flat-square\&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square\&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=flat-square\&logo=tailwind-css)
![Redux](https://img.shields.io/badge/Redux-9.2.0-764ABC?style=flat-square\&logo=redux)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=flat-square\&logo=node.js)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square\&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square\&logo=postgresql)

### Services

![AWS Cognito](https://img.shields.io/badge/AWS-Cognito-FF9900?style=flat-square\&logo=amazon-aws)
![Mapbox](https://img.shields.io/badge/Mapbox-000000?style=flat-square\&logo=mapbox)

### UI Components

![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-18181A?style=flat-square)
![Radix UI](https://img.shields.io/badge/Radix%20UI-Primitives-191919?style=flat-square)
![Lucide Icons](https://img.shields.io/badge/Lucide-Icons-FFCC00?style=flat-square)

</div>

---

## 🚀 Getting Started

### 📋 Prerequisites

* **Node.js** (v18+)
* **npm / yarn / pnpm**
* **PostgreSQL** database
* **AWS Cognito** account

### 🔧 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/shintakino/rentogo.git
   cd rentogo
   ```

2. **Install dependencies**

   ```bash
   # Client
   cd client && npm install

   # Server
   cd ../server && npm install
   ```

3. **Setup environment**

   * Copy `.env.example` → `.env` in both client & server
   * Configure DB, AWS Cognito, Mapbox

4. **Database setup**

   ```bash
   cd server
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the app**

   ```bash
   # Start backend
   cd server && npm run dev

   # Start frontend
   cd ../client && npm run dev
   ```

6. **Access**

   * Frontend → [http://localhost:3000](http://localhost:3000)
   * Backend → [http://localhost:3001](http://localhost:3001)

---

## 🤝 Contributing

We welcome contributions!

* 🐛 **Report Bugs** → Open an issue with details & error logs
* 💡 **Suggest Features** → Share ideas with use cases
* 🔧 **Code Contributions** →

  1. Fork repo
  2. Create branch (`git checkout -b feature/awesome`)
  3. Commit (`git commit -m "Add awesome feature"`)
  4. Push (`git push origin feature/awesome`)
  5. Open PR

---

## 📜 License

Licensed under the **MIT License** – see [LICENSE](LICENSE).

---

## 👨‍💻 About the Author

<div align="center">

### **Shintakino**

*Full-Stack Developer | Real Estate Tech Enthusiast*

[![GitHub](https://img.shields.io/badge/GitHub-@shintakino-181717?style=for-the-badge\&logo=github)](https://github.com/shintakino)

*"Building tools that transform how people find and manage rentals."*

</div>

---

<div align="center">

## 🌟 Support

If you find this project helpful:

[![Star](https://img.shields.io/badge/⭐-Star-yellow?style=for-the-badge)](https://github.com/shintakino/rentogo)
[![Fork](https://img.shields.io/badge/🍴-Fork-blue?style=for-the-badge)](https://github.com/shintakino/rentogo/fork)

**Happy coding! 🚀**

---

*Made with ❤️ for the real estate and developer communities*

</div>  

---
