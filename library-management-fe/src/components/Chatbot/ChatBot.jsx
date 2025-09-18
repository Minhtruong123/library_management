import React, { useState, useRef, useEffect } from "react";
import styles from "./ChatBot.module.css";

export default function ChatBot({ isOpen, closeChatbot }) {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: `Xin chào! Tôi là trợ lý AI của thư viện. Tôi có thể giúp gì cho bạn hôm nay? Bạn có thể hỏi tôi về:
        <ul>
          <li>Tìm kiếm sách theo tên, tác giả, thể loại</li>
          <li>Thông tin về quy trình mượn/trả sách</li>
          <li>Gợi ý sách theo sở thích</li>
          <li>Trạng thái đặt sách của bạn</li>
        </ul>`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    setMessages([...messages, { type: "user", content: inputValue }]);

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", content: botResponse },
      ]);
    }, 600);

    setInputValue("");
  };

  const getBotResponse = (input) => {
    input = input.toLowerCase();

    if (
      input.includes("xin chào") ||
      input.includes("hello") ||
      input.includes("hi")
    ) {
      return "Xin chào! Tôi có thể giúp gì cho bạn?";
    } else if (input.includes("mượn sách") || input.includes("thuê sách")) {
      return "Để mượn sách, bạn cần có tài khoản thư viện. Sau đó, bạn có thể đặt sách trực tuyến hoặc đến trực tiếp thư viện. Thời gian mượn tối đa là 14 ngày và có thể gia hạn thêm nếu không có người đặt trước.";
    } else if (input.includes("đặt sách") || input.includes("reservation")) {
      return 'Bạn có thể đặt sách trực tuyến thông qua tài khoản của mình. Sách đặt trước sẽ được giữ cho bạn trong 3 ngày. Bạn cần đăng nhập và tìm sách muốn đặt, sau đó nhấn nút "Đặt sách".';
    } else if (input.includes("phí trễ hạn") || input.includes("phạt")) {
      return "Phí trễ hạn là 5.000đ/ngày/cuốn sách. Nếu bạn biết mình sẽ trả sách trễ, hãy gia hạn trực tuyến trước ngày hết hạn để tránh bị phạt.";
    } else if (input.includes("giờ mở cửa") || input.includes("thời gian")) {
      return "Thư viện mở cửa từ 8:00 - 21:00 các ngày trong tuần, 9:00 - 19:00 thứ Bảy và 9:00 - 17:00 Chủ Nhật.";
    } else if (
      input.includes("sách hay") ||
      input.includes("gợi ý") ||
      input.includes("recommend")
    ) {
      return 'Dựa trên xu hướng hiện nay, tôi gợi ý bạn đọc: "Atomic Habits" của James Clear, "Sapiens" của Yuval Noah Harari, hoặc "Đắc Nhân Tâm" của Dale Carnegie. Bạn quan tâm đến thể loại nào để tôi gợi ý cụ thể hơn?';
    } else if (input.includes("đăng ký") || input.includes("tài khoản")) {
      return "Để đăng ký tài khoản thư viện, bạn cần mang CMND/CCCD đến thư viện và điền vào mẫu đăng ký. Phí thành viên là 50.000đ/năm. Bạn cũng có thể đăng ký trực tuyến và đến thư viện để xác nhận thông tin.";
    } else if (input.includes("cảm ơn")) {
      return "Rất vui được giúp bạn! Bạn có câu hỏi nào khác không?";
    } else {
      return "Tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi về cách mượn sách, đặt sách, giờ mở cửa, hoặc các dịch vụ khác của thư viện. Hoặc bạn cần gợi ý sách để đọc?";
    }
  };

  if (!isOpen) return null;
  return (
    <>
      <div className={styles.chatbotContainer}>
        <div className={styles.chatbotHeader}>
          <h3>
            <i className="fas fa-robot"></i> Trợ lý thư viện
          </h3>
          <button onClick={closeChatbot}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className={styles.chatbotMessages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${styles[message.type]}`}
            >
              <div
                className={styles.messageContent}
                dangerouslySetInnerHTML={{ __html: message.content }}
              ></div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.chatbotInput}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Nhập câu hỏi của bạn..."
          />
          <button onClick={sendMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
}
