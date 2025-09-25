import { useState } from "react";
import "./App.css";
import HomePages from "./components/Pages/HomePages";
import DetailsBook from "./components/Pages/DetailsBook";
import AuthPage from "./components/Pages/AuthPage";
import AccountPage from "./components/Pages/AccountPage";
import BookManagement from "./components/Pages/BookManagement";
import AdminDashboard from "./components/Pages/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/books/:id" element={<DetailsBook />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/myaccount" element={<AccountPage />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/bookmanagement" element={<BookManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
