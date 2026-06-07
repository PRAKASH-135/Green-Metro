# 🏦 Banking Transaction Backend

A secure and scalable banking transaction backend API built using **Node.js**, **Express.js**, and **MongoDB**. The application provides user authentication, account management, transaction processing, and email notifications through a RESTful architecture.

## 🚀 Features

- 🔐 User Authentication using JWT
- 🔒 Password Hashing with bcrypt
- 🏦 Bank Account Management
- 💸 Money Transfer Between Accounts
- 📜 Transaction History Tracking
- 📧 Email Notifications using Nodemailer
- 🗄️ MongoDB Integration with Mongoose
- ⚙️ Environment Variable Configuration with dotenv
- 🌐 RESTful API Design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication |
| bcrypt | Password Encryption |
| Nodemailer | Email Notifications |
| dotenv | Environment Variables |

---

## 📂 Project Structure

```text
banking_transaction_backend
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── accountController.js
│   │   └── transactionController.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Account.js
│   │   └── Transaction.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── accountRoutes.js
│   │   └── transactionRoutes.js
│   │
│   ├── services
│   │   └── emailService.js
│   │
│   └── app.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PRAKASH-135/banking_transaction_backend.git
```

### 2️⃣ Navigate to Project Directory

```bash
cd banking_transaction_backend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

EMAIL_USER=your_email_address

EMAIL_PASS=your_email_password
```

---

## ▶️ Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server will start at:

```text
http://localhost:3000
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|-----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Accounts

| Method | Endpoint | Description |
|----------|-----------|-------------|
| POST | /api/accounts | Create Account |
| GET | /api/accounts/:id | Get Account Details |

### Transactions

| Method | Endpoint | Description |
|----------|-----------|-------------|
| POST | /api/transactions/transfer | Transfer Money |
| GET | /api/transactions/history | Transaction History |

---

## 🔄 Application Workflow

1. User registers an account.
2. Password is encrypted using bcrypt.
3. User logs in and receives a JWT token.
4. User creates a bank account.
5. User performs transactions.
6. Transaction details are stored in MongoDB.
7. Email notification is sent after successful transactions.
8. User can view transaction history.

---

## 🔒 Security Features

- JWT-based Authentication
- Password Encryption with bcrypt
- Protected Routes
- Environment Variable Security
- Input Validation and Error Handling

---

## 📧 Example Use Case

### User Registration

```http
POST /api/auth/register
```

### User Login

```http
POST /api/auth/login
```

Returns:

```json
{
  "token": "jwt_token_here"
}
```

### Transfer Money

```http
POST /api/transactions/transfer
```

```json
{
  "fromAccount": "123456",
  "toAccount": "654321",
  "amount": 1000
}
```

Response:

```json
{
  "message": "Transaction successful"
}
```

---

## 🧪 Testing

You can test the API using:

- Postman
- Thunder Client
- Insomnia

---

## 📈 Future Enhancements

- OTP Verification
- Role-Based Access Control
- Transaction Analytics Dashboard
- Account Statements (PDF)
- Two-Factor Authentication (2FA)
- Docker Deployment
- API Documentation using Swagger

---

## 👨‍💻 Author

**Prakash Tengunti**

GitHub: https://github.com/PRAKASH-135

LinkedIn: Add your LinkedIn profile here

---

## 📜 License

This project is licensed under the ISC License.

---

⭐ If you found this project useful, please consider giving it a star on GitHub.
