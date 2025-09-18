import React from "react";
import BookDetail from "../BookDetail/BookDetail";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
import ChatBot from "../Chatbot/ChatBot";

export default function DetailsBook() {
  const bookData = {
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "https://via.placeholder.com/300x450",
    rating: 4.8,
    ratingCount: 120,
    category: "Phát triển bản thân",
    language: "Tiếng Việt",
    publishYear: 2018,
    isbn: "978-1847941831",
    available: 4,
    totalCopies: 5,
    description: [
      "Atomic Habits là cuốn sách của James Clear về việc xây dựng thói quen tốt và loại bỏ thói quen xấu. Tác giả tin rằng việc cải thiện cuộc sống không chỉ dựa vào những thay đổi lớn mà còn từ những thay đổi nhỏ, thực hiện hàng ngày.",
      "Clear chia sẻ hệ thống bốn bước để xây dựng thói quen tốt: làm nó rõ ràng, làm nó hấp dẫn, làm nó dễ dàng và làm nó thỏa mãn. Đối với việc loại bỏ thói quen xấu, ông đề xuất làm ngược lại: làm nó khó nhận thấy, làm nó không hấp dẫn, làm nó khó thực hiện và làm nó không thỏa mãn.",
      'Cuốn sách cũng đề cập đến khái niệm "cải thiện 1%" - ý tưởng rằng nếu bạn cải thiện một điều gì đó chỉ 1% mỗi ngày, sau một năm, bạn sẽ tốt hơn 37 lần. Clear kết hợp nghiên cứu khoa học với các câu chuyện cá nhân và ví dụ từ các vận động viên Olympic, nhà lãnh đạo doanh nghiệp và nghệ sĩ đã đạt được thành công nhờ những thay đổi nhỏ trong thói quen hàng ngày.',
      "Atomic Habits đã trở thành hiện tượng toàn cầu với hơn 5 triệu bản được bán ra trên toàn thế giới, và được dịch ra hơn 50 ngôn ngữ khác nhau.",
    ],
    details: {
      publisher: "Random House Business",
      pages: 320,
      dimensions: "15 x 23 cm",
      categories: "Phát triển bản thân, Tâm lý học",
      location: "Kệ 3, Tầng 2, Khu A",
    },
    reviews: [
      {
        name: "Nguyễn Văn A",
        avatar: "https://via.placeholder.com/50x50",
        date: "15/08/2025",
        rating: 5,
        content:
          "Cuốn sách này đã thay đổi cách tôi nhìn nhận về thói quen hàng ngày. Những kỹ thuật trong sách rất thực tế và dễ áp dụng. Sau 2 tháng thực hành, tôi đã thấy sự khác biệt rõ rệt trong cuộc sống. Highly recommended!",
      },
      {
        name: "Trần Thị B",
        avatar: "https://via.placeholder.com/50x50",
        date: "02/09/2025",
        rating: 4,
        content:
          "Tôi thích cách James Clear giải thích những khái niệm phức tạp một cách đơn giản và dễ hiểu. Tuy nhiên, một số ví dụ trong sách hơi bị lặp lại. Nhưng nhìn chung, đây là một cuốn sách đáng đọc cho những ai muốn cải thiện bản thân từ những điều nhỏ nhất.",
      },
      {
        name: "Lê Văn C",
        avatar: "https://via.placeholder.com/50x50",
        date: "10/09/2025",
        rating: 4.5,
        content:
          'Quyển sách này đã giúp tôi hiểu rõ hơn về cách thói quen hình thành và làm thế nào để thay đổi chúng. Phần tôi thích nhất là "định luật 1%" - cải thiện một chút mỗi ngày sẽ tạo ra kết quả to lớn trong tương lai. Tôi đã áp dụng và thấy rất hiệu quả trong việc học ngoại ngữ.',
      },
    ],
  };

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
  return (
    <>
      <Header />
      <BookDetail book={bookData} />
      <SimilarBooks books={similarBooks} />
      <ChatBot />
      <Footer />
    </>
  );
}
