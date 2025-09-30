import React, { useState } from "react";
import styles from "./BookTabs.module.css";

export default function BookTabs({ book }) {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <div className={styles.bookTabs}>
        <div className={styles.tabsNav}>
          <div
            className={`${styles.tabLink} ${
              activeTab === "description" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Mô tả
          </div>
          <div
            className={`${styles.tabLink} ${
              activeTab === "details" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("details")}
          >
            Thông tin chi tiết
          </div>
          <div
            className={`${styles.tabLink} ${
              activeTab === "reviews" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Đánh giá ({book?.reviews?.length})
          </div>
        </div>

        <div className={styles.tabContent}>
          {/* {activeTab === "description" && (
            <div className={styles.description}>
              {book?.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )} */}

          {activeTab === "details" && (
            <table className={styles.detailsTable}>
              <tbody>
                <tr>
                  <th>Tên sách</th>
                  <td>{book.title}</td>
                </tr>
                <tr>
                  <th>Tác giả</th>
                  <td>{book?.author}</td>
                </tr>
                <tr>
                  <th>Nhà xuất bản</th>
                  <td>{book?.details.publisher}</td>
                </tr>
                <tr>
                  <th>Năm xuất bản</th>
                  <td>{book.publishYear}</td>
                </tr>
                <tr>
                  <th>Ngôn ngữ</th>
                  <td>{book.language}</td>
                </tr>
                <tr>
                  <th>Số trang</th>
                  <td>{book?.details.pages}</td>
                </tr>
                <tr>
                  <th>Kích thước</th>
                  <td>{book?.details.dimensions}</td>
                </tr>
                <tr>
                  <th>ISBN</th>
                  <td>{book.isbn}</td>
                </tr>
                <tr>
                  <th>Thể loại</th>
                  <td>{book?.details.categories}</td>
                </tr>
                <tr>
                  <th>Vị trí trong thư viện</th>
                  <td>{book?.details.location}</td>
                </tr>
              </tbody>
            </table>
          )}

          {/* {activeTab === "reviews" && (
            <div className={styles.reviewsContainer}>
              {book?.reviews?.map((review, index) => (
                <div className={styles.review} key={index}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewerInfo}>
                      <div className={styles.reviewerAvatar}>
                        <img src={review.avatar} alt="Reviewer" />
                      </div>
                      <div>
                        <div className={styles.reviewerName}>{review.name}</div>
                        <div className={styles.reviewDate}>{review.date}</div>
                      </div>
                    </div>
                    <div className={styles.reviewRating}>
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={
                            i < Math.floor(review.rating)
                              ? "fas fa-star"
                              : i < review.rating
                              ? "fas fa-star-half-alt"
                              : "far fa-star"
                          }
                        ></i>
                      ))}
                    </div>
                  </div>
                  <div className={styles.reviewContent}>
                    <p>{review.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
