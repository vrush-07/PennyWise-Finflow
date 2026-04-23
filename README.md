# 💰 Finance Tracker

A modern, full-stack personal finance management application built with React and Node.js. Track your income and expenses, visualize spending patterns, and manage your budget effectively.

## ✨ Features

- **User Authentication**: Secure signup and login with password hashing
- **Transaction Management**: Add, view, and track income and expenses
- **Monthly Analytics**: Visual charts showing income vs expenses over time
- **Budget Alerts**: Smart notifications when spending exceeds budget thresholds
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Instant transaction updates without page reloads
- **Security**: JWT-based authentication with environment variable protection

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finance-tracker
   ```

2. **Setup Server**
   ```bash
   cd server
   npm install
   ```
   
   Create `.env` file in the server directory:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/finance-tracker
   PORT=5000
   JWT_SECRET=your_super_secret_jwt_key_here
   NODE_ENV=development
   ```

3. **Setup Client**
   ```bash
   cd ../client
   npm install
   ```
   
   Create `.env` file in the client directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. **Start the Server** (from server directory)
   ```bash
   npm start
   # Server will run on http://localhost:5000
   ```

2. **Start the Client** (from client directory in a new terminal)
   ```bash
   npm start
   # Client will open on http://localhost:3000
   ```

## 📁 Project Structure

```
finance-tracker/
├── server/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── controllers/
│   │   └── transactionController.js
│   ├── middleware/
│   │   └── auth.js            # JWT authentication
│   ├── models/
│   │   ├── Transaction.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js            # Auth routes (signup, login)
│   │   └── transactions.js    # Transaction CRUD routes
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js              # Express server setup
│
└── client/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── MonthlyChart.js
    │   │   ├── TransactionForm.js
    │   │   └── TransactionList.js
    │   ├── pages/
    │   │   ├── Dashboard.js
    │   │   ├── Login.js
    │   │   └── Signup.js
    │   ├── services/
    │   │   └── api.js         # Axios API client
    │   ├── styles/
    │   │   └── Auth.css       # Authentication styling
    │   ├── utils/
    │   │   ├── budgets.js
    │   │   └── getAlerts.js
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── .env
    ├── .env.example
    ├── .gitignore
    └── package.json
```

## 🔐 Security Features

- **Environment Variables**: Sensitive data (.env files) are added to .gitignore
- **Password Hashing**: Passwords are hashed with bcryptjs (10 salt rounds)
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **Error Handling**: Comprehensive error handling and messages

## 📊 API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user

### Transactions (Protected)
- `GET /api/transactions` - Get all user transactions
- `POST /api/transactions` - Add a new transaction

## 🎨 UI/UX Improvements

- **Laptop-First Responsive Design**: Optimized for laptops and desktops (1024px+) first, then tablets and mobiles
- **Modern Gradient Design**: Beautiful purple/blue gradient theme throughout
- **Professional Navigation**: Sticky navbar with branding, dark mode toggle, and logout
- **Grid-Based Dashboard**: Two-column layout on laptops for better space utilization
- **Enhanced Forms**: Larger inputs, better spacing, and improved visual feedback
- **Smooth Animations**: Slide-in effects, hover transitions, and loading states
- **Dark Mode Support**: Complete dark theme with proper contrast ratios
- **Mobile Responsive**: Optimized layouts for tablets (768px-1023px) and mobiles (<768px)

### Responsive Breakpoints
- **Desktop/Laptop**: 1024px+ (base styles)
- **Tablet**: 768px-1023px (adjusted spacing and layout)
- **Mobile**: <768px (single column, stacked elements)

### Design Features
- **Typography**: Larger fonts on laptops, proper hierarchy
- **Spacing**: Generous padding and margins for desktop viewing
- **Shadows**: Subtle shadows for depth and modern appearance
- **Colors**: Consistent color scheme with proper accessibility
- **Interactive Elements**: Hover effects and smooth transitions

## 🐛 Bug Fixes

- Fixed duplicate API routes in transactions
- Added proper error handling throughout
- Fixed transaction list sorting (newest first)
- Added validation for all user inputs
- Improved date handling in charts
- Fixed authentication token handling

## 📝 Environment Variables

### Server (.env)
```
MONGO_URI=      # MongoDB connection string
PORT=           # Server port (default: 5000)
JWT_SECRET=     # Secret key for JWT signing
NODE_ENV=       # Environment (development/production)
```

### Client (.env)
```
REACT_APP_API_URL=  # API base URL
```

## 🚀 Deployment Notes

For production deployment:
1. Change `JWT_SECRET` to a strong random string
2. Update `MONGO_URI` to production database
3. Set `NODE_ENV=production`
4. Update API URLs to production server
5. Build client: `npm run build`

## 📦 Dependencies

### Server
- express - Web framework
- mongoose - MongoDB ODM
- jsonwebtoken - JWT authentication
- bcryptjs - Password hashing
- cors - Cross-origin requests
- dotenv - Environment variables

### Client
- react - UI library
- axios - HTTP client
- chart.js - Chart visualization
- react-chartjs-2 - React wrapper for charts

## 📄 License

This project is open source and available under the MIT License.

## 💡 Future Enhancements

- [ ] Budget categories and limits
- [ ] Export transactions to CSV/PDF
- [ ] Monthly reports and insights
- [ ] Recurring transactions
- [ ] Multi-user support
- [ ] Mobile app
- [ ] AI-powered spending insights
- [ ] Investment tracking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please open an issue in the GitHub repository.
