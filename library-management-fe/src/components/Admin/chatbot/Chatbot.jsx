import React, { useRef, useEffect } from "react";
import styles from "./Chatbot.module.css";

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào! Tôi là trợ lý AI của thư viện. Tôi có thể giúp bạn tìm sách, kiểm tra tình trạng mượn/trả, hoặc trả lời các câu hỏi về thư viện. Bạn cần giúp đỡ gì?",
      time: "10:30",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatMessagesRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const formatTime = () => {
    const now = new Date();
    return `${now.getHours()}:${
      now.getMinutes() < 10 ? "0" : ""
    }${now.getMinutes()}`;
  };

  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    const newUserMessage = {
      sender: "user",
      text: inputValue,
      time: formatTime(),
    };

    setMessages([...messages, newUserMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const generateBotResponse = (userMessage) => {
    let responseText = "";

    if (
      userMessage.toLowerCase().includes("xin chào") ||
      userMessage.toLowerCase().includes("hello") ||
      userMessage.toLowerCase().includes("hi")
    ) {
      responseText = "Xin chào! Tôi có thể giúp gì cho bạn?";
    } else if (userMessage.toLowerCase().includes("tìm sách")) {
      responseText =
        "Để tìm sách, bạn có thể cho tôi biết tên sách, tác giả hoặc chủ đề bạn quan tâm.";
    } else if (userMessage.toLowerCase().includes("mượn sách")) {
      responseText =
        'Để mượn sách, bạn cần đăng nhập vào tài khoản thư viện của mình, tìm sách bạn muốn mượn và nhấn nút "Mượn". Bạn có thể mượn tối đa 5 quyển sách trong thời hạn 14 ngày.';
    } else if (userMessage.toLowerCase().includes("trả sách")) {
      responseText =
        "Bạn có thể trả sách trực tiếp tại thư viện hoặc sử dụng hộp trả sách tự động. Đừng quên trả sách đúng hạn để tránh phí phạt nhé!";
    } else if (userMessage.toLowerCase().includes("gia hạn")) {
      responseText =
        "Bạn có thể gia hạn sách đang mượn tối đa 2 lần, mỗi lần 7 ngày. Để gia hạn, vui lòng truy cập vào tài khoản của bạn và chọn sách cần gia hạn.";
    } else if (userMessage.toLowerCase().includes("python")) {
      responseText = `Tôi đã tìm thấy 15 sách về Python trong thư viện. Một số sách nổi bật bao gồm:
      
1. "Python Crash Course" - Eric Matthes
2. "Automate the Boring Stuff with Python" - Al Sweigart
3. "Learning Python" - Mark Lutz

Bạn muốn biết thêm chi tiết về quyển sách nào?`;
    } else {
      responseText =
        "Tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể diễn đạt theo cách khác được không?";
    }

    return {
      sender: "bot",
      text: responseText,
      time: formatTime(),
    };
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <>
      <div className={styles.chatbotContainer}>
        <div className={styles.chatbotButton} onClick={toggleChat}>
          <i className="fas fa-robot"></i>
        </div>
        <div
          className={styles.chatbotWindow}
          style={{ display: isChatOpen ? "flex" : "none" }}
        >
          <div className={styles.chatbotHeader}>
            <div className={styles.botAvatar}>
              <i className="fas fa-robot"></i>
            </div>
            <h3>Trợ lý thư viện</h3>
            <div className={styles.closeBtn} onClick={toggleChat}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className={styles.chatMessages} ref={chatMessagesRef}>
            {messages.map((msg, index) => (
              <div
                className={`${styles.message} ${styles[msg.sender]}`}
                key={index}
              >
                <div className={styles.bubble}>{msg.text}</div>
                <div className={styles.time}>{msg.time}</div>
              </div>
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
      </div>
    </>
  );
}
