# 🚇 Green Metro

Green Metro is a full-stack web application that encourages eco-friendly transportation by rewarding users for traveling via metro services. The platform verifies metro tickets using OCR technology, calculates carbon emissions saved, and awards reward points that can later be redeemed.

## 🌱 Project Overview

Transportation is one of the major contributors to carbon emissions. Green Metro promotes sustainable commuting by tracking metro journeys and rewarding users for reducing their carbon footprint.

Users can upload metro ticket images, and the system automatically extracts ticket information using Optical Character Recognition (OCR). Based on the distance traveled, the application calculates the estimated carbon emissions saved and credits reward points to the user's wallet.

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT-based Authentication
* Password Encryption using bcrypt

### 🎫 Smart Ticket Verification

* Upload Metro Ticket Images
* OCR-based Ticket Text Extraction using Tesseract.js
* Ticket Number Detection
* Duplicate Ticket Prevention
* Ticket Image Hash Validation using SHA-256

### 🚉 Trip Management

* Log Metro Trips
* Station Validation
* Distance Calculation between Stations
* Carbon Savings Calculation

### 💰 Reward System

* Earn Reward Points for Every Trip
* Wallet Balance Tracking
* Reward Redemption System
* Reward History Management

### 🌍 Sustainability Tracking

* Carbon Emission Reduction Estimation
* Green Travel Incentives
* Environmental Impact Awareness

---

## 🛠️ Tech Stack

### Frontend

* React.js
* TypeScript
* Vite
* Tailwind CSS
* ShadCN UI
* React Router
* React Query
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Multer
* Tesseract.js

### Database

* MongoDB Atlas

---

## 📂 Project Structure

```text
Green-Metro
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── data
│   └── server.js
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/PRAKASH-135/Green-Metro.git
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run Backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

## 🔄 Application Workflow

1. User registers and logs in.
2. User uploads a metro ticket image.
3. OCR extracts ticket information.
4. Ticket number and image hash are validated.
5. Distance between stations is calculated.
6. Carbon emissions saved are estimated.
7. Reward points are credited to the user's wallet.
8. User can redeem rewards after accumulating sufficient points.

---

## 📊 Core Modules

### User Management

Handles registration, authentication, and profile management.

### Ticket Verification

Uses OCR and image hashing to validate uploaded metro tickets.

### Trip Tracking

Stores trip details, travel distance, and environmental impact data.

### Wallet System

Maintains reward points earned by users.

### Reward Redemption

Allows users to redeem accumulated reward points.

---

## 🔒 Security Features

* JWT Authentication
* Password Hashing (bcryptjs)
* Protected API Routes
* Duplicate Ticket Prevention
* SHA-256 Ticket Hash Validation
* MongoDB Data Security

---

## 🌍 Future Enhancements

* QR Code Based Ticket Verification
* Real-time Metro Route Integration
* Leaderboards and Achievements
* Carbon Savings Dashboard
* Mobile Application Support
* Blockchain-Based Reward Verification

---

## 👨‍💻 Author

**Prakash Tengunti**

GitHub: https://github.com/PRAKASH-135

---

## 📜 License

This project is licensed under the MIT License.

---

⭐ Support sustainable transportation and contribute to a greener future with Green Metro!
