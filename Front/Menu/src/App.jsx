import { useState } from "react";
import "./App.css";
import HomePage from "./Page/HomePage";
import AdminAddCategory from "./Page/AdminAddCategory";
import AdminAddMenu from "./Page/AdminAddMenu";
import AdminHomePage from "./Page/AdminHomePage";
import AdminLoginPage from "./Page/AdminLoginPage";
import Protected from "./Components/ProtectedRoute/Protected";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/Admin" element={<PublicRoute><AdminLoginPage /></PublicRoute>} />
        <Route path="/ListMenu" element={<Protected><AdminHomePage /></Protected>} />
        <Route path="/ListCategory" element={<Protected><AdminHomePage /></Protected>} />
        <Route path="/AddItem" element={<Protected><AdminAddMenu /></Protected>} />
        <Route path="/AddCategory" element={<Protected><AdminAddCategory /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
