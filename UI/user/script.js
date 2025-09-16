// Mobile Menu Toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector("nav");

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Chatbot Functions
function openChatbot() {
  document.getElementById("chatbot").style.display = "flex";
}

function closeChatbot() {
  document.getElementById("chatbot").style.display = "none";
}

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatMessages = document.getElementById("chatbot-messages");

  if (userInput.value.trim() === "") return;

  // Add user message
  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.innerHTML = `
        <div class="message-content">
            ${userInput.value}
        </div>
    `;
  chatMessages.appendChild(userMessage);

  // Simulate bot response
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";

    // Simple responses based on keywords
    let response = getBotResponse(userInput.value);

    botMessage.innerHTML = `
            <div class="message-content">
                ${response}
            </div>
        `;
    chatMessages.appendChild(botMessage);

    // Auto scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 600);

  // Clear input
  userInput.value = "";

  // Auto scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Simple bot responses based on keywords
function getBotResponse(input) {
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
}

// Enter key to send message
document
  .getElementById("user-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

// Books data for search functionality
const books = [
  {
    title: "Nghệ thuật tinh tế của việc đếch quan tâm",
    author: "Mark Manson",
    category: "Tâm lý học",
    rating: 4.5,
    available: 3,
    image: "https://via.placeholder.com/150x220",
  },
  {
    title: "Đắc nhân tâm",
    author: "Dale Carnegie",
    category: "Kỹ năng sống",
    rating: 4.8,
    available: 5,
    image: "https://via.placeholder.com/150x220",
  },
  {
    title: "Sapiens: Lược sử loài người",
    author: "Yuval Noah Harari",
    category: "Lịch sử",
    rating: 4.7,
    available: 2,
    image: "https://via.placeholder.com/150x220",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Phát triển bản thân",
    rating: 4.9,
    available: 4,
    image: "https://via.placeholder.com/150x220",
  },
];

// Search functionality
const searchBox = document.querySelector(".search-box input");
if (searchBox) {
  searchBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const searchTerm = searchBox.value.toLowerCase().trim();
      if (searchTerm === "") return;

      // In a real app, this would redirect to search results page
      // For demo, we'll just alert
      alert(`Đang tìm kiếm: "${searchTerm}"`);

      // You would normally redirect here:
      // window.location.href = `books.html?search=${encodeURIComponent(searchTerm)}`;
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animation on scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.classList.add("animate");
    }
  });
});
