# Cafe Menu Management App

This project is a Cafe Menu Management Application built using the MERN stack (MySQL, Express.js, React.js, Node.js). It allows users to add, view, search, and delete menu items. The application is styled using Tailwind CSS and includes loading spinners and toast notifications for better user experience.

---

🔗 [Live Demo]

---

## Technologies Used

- **Frontend:** React.js, Tailwind CSS, React Icons, React Toastify
- **Backend:** Node.js, Express.js
- **Database:** MySQL (Railway)
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## Setup Instructions

### 1. Clone the repository:

```bash
git clone
cd USER MANAGEMENT
```

### 2. Backend Setup:

Navigate to the backend folder:

```bash
cd cafe-menu-backend
npm install
```

Create a .env file:

PORT=5000

RAILWAY_DB_URL=your_db_url

Start the server:

```bash
npm run dev
```

### 3. Frontend Setup:

Navigate to the frontend folder:

```bash
cd cafe-menu-frontend
npm install
```

Create a .env file:

VITE_BACKEND_URL=http://localhost:5000

Start the frontend:

```bash
npm run dev
```

### 4. Database Setup

Create a MySQL database on Railway.

Update .env in the backend with the database credentials.

### 5. Testing the App

Open the browser and go to http://localhost:5173

Add, view, search, and delete menu items.

### 6. Deployment

Frontend: Deploy on Vercel.

Backend: Deploy on Render.
