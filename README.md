
# Product Inventory System

A full-stack web application to manage product inventory efficiently. The system enables users to perform CRUD (Create, Read, Update, Delete) operations on product details and provides an intuitive interface for seamless interaction.

## 🚀 Features

- Add, view, edit, and delete product information (ID, name, category, supplier, quantity, and price).
- Responsive and dynamic front-end built with ReactJS.
- RESTful API integration for backend logic using NodeJS and ExpressJS.
- MongoDB database for efficient storage and retrieval of product data.

## 🛠️ Technologies Used

- **Frontend**: ReactJS, HTML, CSS, JavaScript
- **Backend**: NodeJS, ExpressJS
- **Database**: MongoDB
- **Tools**: Git, Postman, VS Code

## ⚙️ Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

### Steps to Set Up Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Karan0809/Product-Inventory-System.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Product-Inventory-System
   ```
3. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```
6. Start the frontend server:
   ```bash
   npm start
   ```

## 📂 Project Structure

```
Product-Inventory-System/
│
├── backend/               # Backend code
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── server.js          # Server entry point
│   └── package.json       # Backend dependencies
│
├── frontend/              # Frontend code
│   ├── src/               # React components and pages
│   ├── public/            # Static files
│   └── package.json       # Frontend dependencies
│
└── README.md              # Project documentation
```

## 🌟 Features in Detail

- **Frontend**:
  - Responsive design for desktop and mobile.
  - Dynamic forms to add and edit product data.
  - Real-time updates using React state management.
  
- **Backend**:
  - CRUD operations for products via RESTful APIs.
  - User authentication and authorization (if applicable).
  
- **Database**:
  - MongoDB schema for storing product details securely.

## 🎯 Future Improvements

- Implement user authentication for secure access.
- Add filters and search functionality to the product list.
- Enhance UI with additional features like product image uploads.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Karan Bansinge**  
- [GitHub](https://github.com/Karan0809)  
- [LinkedIn](https://www.linkedin.com/in/karanbansinge/)  

---

Feel free to contribute to the project or report issues!
