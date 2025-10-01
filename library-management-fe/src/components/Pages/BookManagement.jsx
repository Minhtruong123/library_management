import React, { useState } from "react";
import Layout from "../Admin/Layout/Layout";
import styles from "./BookManagement.module.css";

export default function BookManagement() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      category: "Văn học Việt Nam",
      publisher: "NXB Kim Đồng",
      year: 2020,
      status: "available",
      isbn: "9786041234567",
      copies: 5,
    },
    {
      id: 2,
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      category: "Tiểu thuyết",
      publisher: "NXB Hội Nhà Văn",
      year: 2019,
      status: "borrowed",
      isbn: "9786041123456",
      copies: 3,
    },
    {
      id: 3,
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      category: "Kỹ năng sống",
      publisher: "NXB Tổng hợp",
      year: 2018,
      status: "available",
      isbn: "9786048889562",
      copies: 8,
    },
    {
      id: 4,
      title: "Sách Giáo Khoa Toán Học 12",
      author: "Bộ Giáo dục",
      category: "Giáo trình",
      publisher: "NXB Giáo dục",
      year: 2021,
      status: "borrowed",
      isbn: "9786042457890",
      copies: 15,
    },
    {
      id: 5,
      title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
      author: "Nguyễn Nhật Ánh",
      category: "Văn học Việt Nam",
      publisher: "NXB Trẻ",
      year: 2017,
      status: "available",
      isbn: "9786041238765",
      copies: 4,
    },
    {
      id: 6,
      title: "Hai Số Phận",
      author: "Jeffrey Archer",
      category: "Tiểu thuyết",
      publisher: "NXB Văn Học",
      year: 2020,
      status: "available",
      isbn: "9786041654321",
      copies: 2,
    },
  ]);

  const [filter, setFilter] = useState({
    search: "",
    category: "",
    status: "",
  });

  const [isAddingBook, setIsAddingBook] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    category: "",
    publisher: "",
    year: "",
    status: "available",
    isbn: "",
    copies: 1,
  });

  // Categories for filter dropdown
  const categories = [
    "Văn học Việt Nam",
    "Tiểu thuyết",
    "Kỹ năng sống",
    "Giáo trình",
    "Khoa học",
    "Lịch sử",
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleNewBookChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const bookToAdd = {
      ...newBook,
      id: books.length + 1,
    };

    setBooks([...books, bookToAdd]);
    setNewBook({
      title: "",
      author: "",
      category: "",
      publisher: "",
      year: "",
      status: "available",
      isbn: "",
      copies: 1,
    });
    setIsAddingBook(false);
  };

  const filteredBooks = books.filter((book) => {
    return (
      (filter.search === "" ||
        book.title.toLowerCase().includes(filter.search.toLowerCase()) ||
        book.author.toLowerCase().includes(filter.search.toLowerCase()) ||
        book.isbn.includes(filter.search)) &&
      (filter.category === "" || book.category === filter.category) &&
      (filter.status === "" || book.status === filter.status)
    );
  });

  const getStatusDisplay = (status) => {
    switch (status) {
      case "available":
        return <span className={styles.statusAvailable}>Có sẵn</span>;
      case "borrowed":
        return <span className={styles.statusBorrowed}>Đang mượn</span>;
      default:
        return <span>{status}</span>;
    }
  };
  return (
    <>
      <Layout>
        <div className={styles.bookListContainer}>
          <div className={styles.header}>
            <h1>Quản lý sách</h1>
            <button
              className={styles.addButton}
              onClick={() => setIsAddingBook(true)}
            >
              <i className="fas fa-plus"></i> Thêm sách mới
            </button>
          </div>

          <div className={styles.filterContainer}>
            <div className={styles.searchBox}>
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Tìm kiếm theo tên, tác giả hoặc ISBN..."
                name="search"
                value={filter.search}
                onChange={handleFilterChange}
              />
            </div>

            <div className={styles.filterOptions}>
              <select
                name="category"
                value={filter.category}
                onChange={handleFilterChange}
              >
                <option value="">Tất cả danh mục</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                name="status"
                value={filter.status}
                onChange={handleFilterChange}
              >
                <option value="">Tất cả trạng thái</option>
                <option value="available">Có sẵn</option>
                <option value="borrowed">Đang mượn</option>
              </select>
            </div>
          </div>

          <div className={styles.bookTable}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên sách</th>
                  <th>Tác giả</th>
                  <th>Danh mục</th>
                  <th>Nhà xuất bản</th>
                  <th>Năm</th>
                  <th>ISBN</th>
                  <th>Số bản</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.publisher}</td>
                    <td>{book.year}</td>
                    <td>{book.isbn}</td>
                    <td>{book.copies}</td>
                    <td>{getStatusDisplay(book.status)}</td>
                    <td className={styles.actions}>
                      <button className={styles.actionButton}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className={styles.actionButton}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {isAddingBook && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                  <h2>Thêm sách mới</h2>
                  <button
                    className={styles.closeButton}
                    onClick={() => setIsAddingBook(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <form onSubmit={handleAddBook}>
                  <div className={styles.formGroup}>
                    <label htmlFor="title">Tên sách</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newBook.title}
                      onChange={handleNewBookChange}
                      required
                    />
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="author">Tác giả</label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleNewBookChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="category">Danh mục</label>
                      <select
                        id="category"
                        name="category"
                        value={newBook.category}
                        onChange={handleNewBookChange}
                        required
                      >
                        <option value="">Chọn danh mục</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="publisher">Nhà xuất bản</label>
                      <input
                        type="text"
                        id="publisher"
                        name="publisher"
                        value={newBook.publisher}
                        onChange={handleNewBookChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="year">Năm xuất bản</label>
                      <input
                        type="number"
                        id="year"
                        name="year"
                        value={newBook.year}
                        onChange={handleNewBookChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="isbn">ISBN</label>
                      <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        value={newBook.isbn}
                        onChange={handleNewBookChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="copies">Số bản</label>
                      <input
                        type="number"
                        id="copies"
                        name="copies"
                        value={newBook.copies}
                        onChange={handleNewBookChange}
                        min="1"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="status">Trạng thái</label>
                    <select
                      id="status"
                      name="status"
                      value={newBook.status}
                      onChange={handleNewBookChange}
                    >
                      <option value="available">Có sẵn</option>
                      <option value="borrowed">Đang mượn</option>
                    </select>
                  </div>

                  <div className={styles.formActions}>
                    <button
                      type="button"
                      className={styles.cancelButton}
                      onClick={() => setIsAddingBook(false)}
                    >
                      Hủy
                    </button>
                    <button type="submit" className={styles.submitButton}>
                      Lưu sách
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
