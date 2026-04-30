# Product Management Dashboard

A modern React application for managing products with full CRUD functionality.  
The project includes authentication UI, product table management, product preview page, and modal-based forms.  
Built with React, Redux Toolkit, Formik, and Material UI.

---

## Live Features

### Login Page (UI Authentication)
- Email & password validation (Formik)
- Password visibility toggle
- Redirect to product table after login
- Simple frontend-only authentication flow

---

### Product Table (Main Dashboard)
- Fetch and display products from MockAPI
- Material UI table layout
- Edit products (modal form)
- Delete products with confirmation modal
- Add new product via modal form
- Redux Toolkit state management

---

### Add Product
- Modal-based form
- Form validation (Formik)
- Sends POST request to API
- Automatically updates Redux state

---

### Edit Product
- Pre-filled form with selected product data
- Update product via PUT request
- Live update in Redux store

---

### Product Preview Page
- Grid layout of product cards
- Fetches same API data
- Displays product details visually
- Simple shopping-style preview UI

---

## Tech Stack

- React
- React Router DOM
- Redux Toolkit
- React Redux
- Formik
- Material UI (MUI)
- MockAPI (REST API)
- JavaScript (ES6+)
 
--- 
src/
│
├──assets/
│
├── components/
│ ├── addForm.jsx
│ ├── loginationm.jsx
│ ├── productPreview.jsx
│ ├── productTablke.jsx
│ ├── remade.jsx
│
├── redux/
│ ├── slice.jsx
│ ├── selector.js
│ ├── stor.js
│
├── App.jsx
├── main.jsx
├── App.css
├── index.css

## 📁 Project Structure
 
