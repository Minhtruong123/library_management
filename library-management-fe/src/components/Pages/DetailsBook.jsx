import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetail from "../BookDetail/BookDetail";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
import ChatBot from "../Chatbot/ChatBot";
import * as bookService from "../../service/bookService";

export default function DetailsBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchApi = async () => {
    try {
      const data = await bookService.getBookById(id);
      setBook(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const similarBooks = [
    {
      title: "Nghệ thuật tinh tế của việc đếch quan tâm",
      author: "Mark Manson",
      coverImage: "https://via.placeholder.com/150x220",
      rating: 4.5,
      category: "Tâm lý học",
    },
    {
      title: "Đắc nhân tâm",
      author: "Dale Carnegie",
      coverImage: "https://via.placeholder.com/150x220",
      rating: 4.8,
      category: "Kỹ năng sống",
    },
    {
      title: "7 Thói quen của người thành đạt",
      author: "Stephen R. Covey",
      coverImage: "https://via.placeholder.com/150x220",
      rating: 4.7,
      category: "Phát triển bản thân",
    },
    {
      title: "Người giàu có nhất thành Babylon",
      author: "George S. Clason",
      coverImage: "https://via.placeholder.com/150x220",
      rating: 4.6,
      category: "Tài chính",
    },
  ];

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <>
      <Header />
      <BookDetail book={book} />
      <SimilarBooks books={similarBooks} />
      <ChatBot />
      <Footer />
    </>
  );
}
