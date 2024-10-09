// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Dermstore } from "../Drawer/Dermstore";
import { SignUp } from "../components/SignUp";
import { Account } from "../components/Account";
import { Cart } from "../components/Cart"; 
import ProductDetails from "../components/ProductDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Dermstore" element={<Dermstore />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/account" element={<Account />} />
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};
