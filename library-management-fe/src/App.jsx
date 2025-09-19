import { useState } from "react";
import "./App.css";
import HomePages from "./components/Pages/HomePages";
import DetailsBook from "./components/Pages/DetailsBook";
import AuthPage from "./components/Pages/AuthPage";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
