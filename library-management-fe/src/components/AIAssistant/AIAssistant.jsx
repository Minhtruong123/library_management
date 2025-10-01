import React from "react";
import styles from "./AIAssistant.module.css";

export default function AIAssistant({ openChatbot }) {
  return (
    <>
      <section className={styles.aiAssistant}>
        <div className="container">
          <div className={styles.aiAssistantContent}>
            <div className={styles.aiInfo}>
              <h2>Trợ lý AI thông minh</h2>
              <p>
                Trợ lý AI của chúng tôi luôn sẵn sàng hỗ trợ bạn tìm kiếm sách,
                giải đáp thắc mắc về thư viện, và gợi ý những cuốn sách phù hợp
                với sở thích của bạn.
              </p>
              <ul>
                <li>
                  <i className="fas fa-check"></i> Tìm kiếm sách nhanh chóng
                </li>
                <li>
                  <i className="fas fa-check"></i> Gợi ý sách dựa trên sở thích
                </li>
                <li>
                  <i className="fas fa-check"></i> Trả lời câu hỏi về thư viện
                </li>
                <li>
                  <i className="fas fa-check"></i> Hỗ trợ đặt và gia hạn sách
                </li>
              </ul>
              <button className={styles.btnTryAi} onClick={openChatbot}>
                Trò chuyện ngay
              </button>
            </div>
            <div className={styles.aiImage}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/14313/14313824.png"
                alt="AI Assistant"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
