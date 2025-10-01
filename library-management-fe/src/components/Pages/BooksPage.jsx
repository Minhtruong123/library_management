import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BooksBanner from "../BooksBanner/BooksBanner";
import CategoryList from "../CategoryList/CategoryList";
import FilterSection from "../FilterSection/FilterSection";
import BookGrid from "../BookGrid/BookGrid";
import Pagination from "../Pagination/Pagination";
import AIAssistant from "../AIAssistant/AIAssistant";
import Chatbot from "../Chatbot/ChatBot";
import * as bookService from "../../service/bookService";

export default function BooksPage() {
  const [bookList, setBookList] = useState([]);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const fetchApi = async () => {
    try {
      const data = await bookService.getNewBooks();
      setBookList(data);
    } catch (error) {
      error;
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

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

          <BookGrid books={bookList} />

          <Pagination totalPages={5} onPageChange={handlePageChange} />
        </div>
      </section>

      <AIAssistant onOpenChatbot={() => setIsChatbotOpen(true)} />

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />

      <Footer />
    </>
  );
}
