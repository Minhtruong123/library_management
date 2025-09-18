import React, { useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import NewBooks from "../NewBooks/NewBooks";
import AIAssistant from "../AIAssistant/AIAssistant";
import ChatBot from "../Chatbot/ChatBot";
import HowItWorks from "../HowItWorks/HowItWorks";
import Footer from "../Footer/Footer";

export default function HomePages() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const openChatbot = () => {
    setChatbotOpen(true);
  };

  const closeChatbot = () => {
    setChatbotOpen(false);
  };

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <NewBooks />
      <AIAssistant openChatbot={openChatbot} />
      <ChatBot isOpen={chatbotOpen} closeChatbot={closeChatbot} />
      <HowItWorks />
      <Footer />
    </>
  );
}
