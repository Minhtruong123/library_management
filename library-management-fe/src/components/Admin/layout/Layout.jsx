import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Chatbot from "../chatbot/Chatbot";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <div className="content">{children}</div>
        </div>
        <Chatbot />
      </div>
    </>
  );
}
