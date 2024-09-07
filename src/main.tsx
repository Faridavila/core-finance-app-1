// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your custom components
import Navbar from './NavBar/Components/navBar'; // Make sure the path and filename are correct
import MainMenu from './Header/components/Header'; // Adjust according to your file structure
import Footer from './Footer/components/Footer';
import TreePUC from './Arbol/Components/NuevoTREE';
import DepartmentCRUD from './Department/Components/Department';

// Define the Layout component which will contain the Router setup
const Layout = () => (
  <Router>
    <MainMenu />
    <Navbar />
    <Routes>
      <Route path="/arbol" element={<TreePUC />} />
      <Route path="/department" element={<DepartmentCRUD />} />
    </Routes>
    <Footer />
  </Router>
);

// Create the root element and render the Layout component wrapped in RouterProvider if using react-router v6
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
