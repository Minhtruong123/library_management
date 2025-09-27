import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BooksBanner from "../BooksBanner/BooksBanner";
import CategoryList from "../CategoryList/CategoryList";
import FilterSection from "../FilterSection/FilterSection";
import BookGrid from "../BookGrid/BookGrid";
import Pagination from "../Pagination/Pagination";
import AIAssistant from "../AIAssistant/AIAssistant";
import Chatbot from "../Chatbot/ChatBot";

export default function BooksPage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const books = [
    {
      title: "Sapiens: Lược sử loài người",
      author: "Yuval Noah Harari",
      category: "Lịch sử",
      rating: 4.7,
      available: 5,
      image: "https://via.placeholder.com/150x220",
      isFeatured: true,
    },
    {
      title: "Đắc nhân tâm",
      author: "Dale Carnegie",
      category: "Kỹ năng sống",
      rating: 4.8,
      available: 3,
      image: "https://via.placeholder.com/150x220",
      isFeatured: false,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Phát triển bản thân",
      rating: 4.9,
      available: 2,
      image: "https://via.placeholder.com/150x220",
      isFeatured: false,
    },
    {
      title: "Nghệ thuật tinh tế của việc đếch quan tâm",
      author: "Mark Manson",
      category: "Tâm lý học",
      rating: 4.5,
      available: 7,
      image: "https://via.placeholder.com/150x220",
      isFeatured: true,
    },
    {
      title: "Nhà giả kim",
      author: "Paulo Coelho",
      category: "Văn học",
      rating: 4.6,
      available: 0,
      image: "https://via.placeholder.com/150x220",
      isFeatured: false,
    },
    {
      title: "Tư duy nhanh và chậm",
      author: "Daniel Kahneman",
      category: "Tâm lý học",
      rating: 4.5,
      available: 4,
      image: "https://via.placeholder.com/150x220",
      isFeatured: false,
    },
    {
      title: "Dám nghĩ lớn",
      author: "David J. Schwartz",
      category: "Phát triển bản thân",
      rating: 4.4,
      available: 1,
      image: "https://via.placeholder.com/150x220",
      isFeatured: false,
    },
    {
      title: "21 bài học cho thế kỷ 21",
      author: "Yuval Noah Harari",
      category: "Khoa học xã hội",
      rating: 4.6,
      available: 0,
      image: "https://via.placeholder.com/150x220",
      isFeatured: false,
    },
  ];

  const handlePageChange = (page) => {
    alert(`Đang chuyển đến trang ${page}`);
  };
  return (
    <>
      <Header />

      <BooksBanner />

      <CategoryList />

      <section className="books-list">
        <div className="container">
          <FilterSection />

          <BookGrid books={books} />

          <Pagination totalPages={5} onPageChange={handlePageChange} />
        </div>
      </section>

      <AIAssistant onOpenChatbot={() => setIsChatbotOpen(true)} />

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />

      <Footer />
    </>
  );
}
