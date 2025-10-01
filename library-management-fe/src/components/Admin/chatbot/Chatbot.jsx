import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import styles from "./Chatbot.module.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Xin chào! Tôi là trợ lý AI của thư viện. Tôi có thể giúp bạn tìm sách, kiểm tra tình trạng mượn/trả, hoặc trả lời các câu hỏi về thư viện. Bạn cần giúp đỡ gì?",
      time: "10:30",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    const now = new Date();
    const time = `${now.getHours()}:${
      now.getMinutes() < 10 ? "0" : ""
    }${now.getMinutes()}`;

    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue,
      time,
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        sender: "bot",
        text: botResponse,
        time: time,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (
      lowerCaseMessage.includes("xin chào") ||
      lowerCaseMessage.includes("hello") ||
      lowerCaseMessage.includes("hi")
    ) {
      return "Xin chào! Tôi có thể giúp gì cho bạn?";
    } else if (lowerCaseMessage.includes("tìm sách")) {
      return "Để tìm sách, bạn có thể cho tôi biết tên sách, tác giả hoặc chủ đề bạn quan tâm.";
    } else if (lowerCaseMessage.includes("python")) {
      return 'Tôi đã tìm thấy 15 sách về Python trong thư viện. Một số sách nổi bật bao gồm:<br/><br/>1. "Python Crash Course" - Eric Matthes<br/>2. "Automate the Boring Stuff with Python" - Al Sweigart<br/>3. "Learning Python" - Mark Lutz<br/><br/>Bạn muốn biết thêm chi tiết về quyển sách nào?';
    } else if (lowerCaseMessage.includes("mượn sách")) {
      return 'Để mượn sách, bạn cần đăng nhập vào tài khoản thư viện của mình, tìm sách bạn muốn mượn và nhấn nút "Mượn". Bạn có thể mượn tối đa 5 quyển sách trong thời hạn 14 ngày.';
    } else if (lowerCaseMessage.includes("trả sách")) {
      return "Bạn có thể trả sách trực tiếp tại thư viện hoặc sử dụng hộp trả sách tự động. Đừng quên trả sách đúng hạn để tránh phí phạt nhé!";
    } else if (lowerCaseMessage.includes("gia hạn")) {
      return "Bạn có thể gia hạn sách đang mượn tối đa 2 lần, mỗi lần 7 ngày. Để gia hạn, vui lòng truy cập vào tài khoản của bạn và chọn sách cần gia hạn.";
    } else {
      return "Tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể diễn đạt theo cách khác được không?";
    }
  };
  return (
    <>
      <div className={styles.chatbotContainer}>
        <div className={styles.chatbotButton} onClick={toggleChatbot}>
          <i className="fas fa-robot"></i>
        </div>

        {isOpen && (
          <div className={styles.chatbotWindow}>
            <div className={styles.chatbotHeader}>
              <div className={styles.botAvatar}>
                <i className="fas fa-robot"></i>
              </div>
              <h3>Trợ lý thư viện</h3>
              <div className={styles.closeBtn} onClick={toggleChatbot}>
                <i className="fas fa-times"></i>
              </div>
            </div>

            <div className={styles.chatMessages}>
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  sender={message.sender}
                  text={message.text}
                  time={message.time}
                />
              ))}
            </div>

            <div className={styles.chatInput}>
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button onClick={sendMessage}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
