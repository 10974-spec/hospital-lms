# 🏥 MediCare - Doctor Appointment System (MERN Stack)

![App Screenshot](/readme-images/banner.png)


<p align="center">
  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&style=flat-square&labelColor=47A248" alt="mongodb" height="50"/>
  </a>
  <a href="https://expressjs.com" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white&style=flat-square&labelColor=000000" alt="express" height="50"/>
  </a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white&style=flat-square&labelColor=61DAFB" alt="react" height="50"/>
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white&style=flat-square&labelColor=339933" alt="nodejs" height="50"/>
  </a>
</p>

A full-featured medical booking platform with patient/doctor portals, admin dashboard, and appointment management.

## 🌟 Key Features

### **Role-Based Access**
| Role        | Capabilities |
|-------------|--------------|
| **Patients** | • Secure login/signup <br> • Browse doctors by specialty <br> • Book/reschedule appointments <br> • View booking history |
| **Doctors**  | • Admin-approved registration <br> • Set availability slots <br> • Manage appointments <br> • Patient records access |
| **Admin**    | • Approve/reject doctors <br> • Manage all users <br> • System analytics <br> • Content management |

### **System Features**
- 🗂️ Doctor specialty categorization (Cardiology, Neurology, etc.)
- 📅 Interactive booking calendar
- 🔔 Email/SMS notifications
- 📊 Admin analytics dashboard
- 🔐 JWT authentication

## 🛠️ Tech Stack

**MERN Architecture**:
| Layer        | Technology |
|--------------|------------|
| **Frontend** | React.js, Redux Toolkit, Tailwind CSS, Axios |
| **Backend**  | Node.js, Express.js, MongoDB, Mongoose |
| **Auth**     | JSON Web Tokens (JWT), Bcrypt |
| **Deployment**| Vercel (Frontend), Render (Backend), MongoDB Atlas |

## 🚀 Installation Guide

## 🛠️🧱 Prerequisites

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="18"/> ⚡ **Node.js v18+**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="18"/> 🗄️ **MongoDB Atlas account**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="18"/> 🔀 **Git**

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/10974-spec/medicare.git
   cd medicare
   
## ⚙️ Installation

### 🌐 **Frontend**
```bash
cd frontend && npm install

🖥️ Backend

cd backend && npm install

🔐 Admin

cd admin && npm install
```

## 🔐 Environment Variables Setup

📌 **Important!** Before running the backend, you'll need to create a `.env` file in your backend folder with the following variables:

```bash
# 📁 backend/.env
# 🔒 Security Credentials - Keep these secret!

# 🗄️ Database Configuration
MONGODB_URI=your_mongodb_atlas_connection_string

# ☁️ Cloudinary Configuration (for file uploads)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# 👑 Admin Credentials
ADMIN_EMAIL=your_admin@email.com
ADMIN_PASSWORD=your_secure_password

# 🔑 Authentication
JWT_SECRET=your_jwt_secret_key

# 💳 Payment Gateway (Razorpay)
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# 💰 Currency
CURRENCY=$  # Or your preferred currency symbol


   

