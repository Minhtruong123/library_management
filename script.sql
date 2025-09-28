INSERT INTO authors (full_name, nationality, birth_year, biography)
VALUES 
('Nguyễn Nhật Ánh', 'Việt Nam', 1955, 'Nhà văn nổi tiếng với nhiều tác phẩm viết cho thiếu nhi.'),
('J.K. Rowling', 'Anh', 1965, 'Tác giả của bộ truyện Harry Potter nổi tiếng toàn cầu.'),
('Haruki Murakami', 'Nhật Bản', 1949, 'Nhà văn hiện đại với phong cách độc đáo, tác giả của "Rừng Na Uy".'),
('Gabriel García Márquez', 'Colombia', 1927, 'Tác giả đoạt giải Nobel, nổi tiếng với tiểu thuyết "Trăm năm cô đơn".'),
('Leo Tolstoy', 'Nga', 1828, 'Tác giả của những tác phẩm kinh điển như "Chiến tranh và Hòa bình".'),
('George Orwell', 'Anh', 1903, 'Tác giả của "1984" và "Trại súc vật", có ảnh hưởng lớn trong văn học chính trị.'),
('Mark Twain', 'Mỹ', 1835, 'Nhà văn hài hước, tác giả của "Cuộc phiêu lưu của Tom Sawyer".'),
('Victor Hugo', 'Pháp', 1802, 'Tác giả của "Những người khốn khổ" và "Nhà thờ Đức Bà Paris".'),
('Ernest Hemingway', 'Mỹ', 1899, 'Đoạt giải Nobel Văn học, nổi tiếng với phong cách tối giản.'),
('Nguyễn Du', 'Việt Nam', 1766, 'Đại thi hào dân tộc, tác giả của kiệt tác "Truyện Kiều".');

INSERT INTO categories (name, description)
VALUES
('Văn học Việt Nam', 'Các tác phẩm văn học của các tác giả Việt Nam qua nhiều thời kỳ.'),
('Văn học nước ngoài', 'Tác phẩm văn học dịch từ nhiều nền văn hóa khác nhau.'),
('Khoa học - Kỹ thuật', 'Sách về khoa học tự nhiên, công nghệ, kỹ thuật ứng dụng.'),
('Kinh tế - Quản trị', 'Sách nghiên cứu về kinh tế, quản trị, tài chính, marketing.'),
('Tâm lý - Kỹ năng sống', 'Tài liệu giúp phát triển bản thân và kỹ năng mềm.'),
('Lịch sử - Chính trị', 'Sách nghiên cứu về các sự kiện lịch sử, chính trị trong và ngoài nước.'),
('Triết học - Xã hội học', 'Sách nghiên cứu về tư tưởng, triết lý và các vấn đề xã hội.'),
('Thiếu nhi', 'Truyện, tiểu thuyết và sách tranh cho trẻ em.'),
('Ngoại ngữ - Từ điển', 'Sách học ngoại ngữ, từ điển song ngữ, đa ngữ.'),
('Y học - Sức khỏe', 'Sách nghiên cứu và hướng dẫn về y tế, chăm sóc sức khỏe.');

INSERT INTO fines (user_id, amount, reason, paid, issued_date, paid_date) VALUES
(1, 20000, 'Trả sách trễ 3 ngày', false, '2025-09-01', NULL),
(2, 50000, 'Mất sách "Lập trình Java cơ bản"', false, '2025-09-02', NULL),
(3, 15000, 'Trả sách trễ 1 ngày', true, '2025-08-20', '2025-08-22'),
(4, 30000, 'Hư hỏng bìa sách', false, '2025-09-05', NULL),
(5, 25000, 'Trả sách trễ 5 ngày', true, '2025-08-28', '2025-09-03'),
(1, 40000, 'Viết vẽ bậy trong sách', false, '2025-09-10', NULL),
(2, 10000, 'Trả sách trễ 1 ngày', true, '2025-08-15', '2025-08-16'),
(3, 60000, 'Mất sách "Cấu trúc dữ liệu & Giải thuật"', false, '2025-09-12', NULL),
(4, 18000, 'Trả sách trễ 2 ngày', true, '2025-09-01', '2025-09-04'),
(5, 35000, 'Làm ướt sách', false, '2025-09-14', NULL);

INSERT INTO publishers (name, address, contact_info) VALUES
('NXB Trẻ', '161B Lý Chính Thắng, Quận 3, TP.HCM', 'hotro@nxbtre.com.vn'),
('NXB Giáo dục Việt Nam', '81 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội', 'info@nxbgd.vn'),
('NXB Kim Đồng', '55 Quang Trung, Hai Bà Trưng, Hà Nội', 'contact@kimdong.vn'),
('NXB Văn Học', '18 Nguyễn Trường Tộ, Ba Đình, Hà Nội', 'support@nxbanhoc.vn'),
('NXB Lao Động', '175 Giảng Võ, Đống Đa, Hà Nội', 'info@nxblaodong.vn'),
('NXB Chính Trị Quốc Gia', '6/86 Duy Tân, Cầu Giấy, Hà Nội', 'ctqg@nxbctqg.vn'),
('NXB Tổng Hợp TP.HCM', '62 Nguyễn Thị Minh Khai, Quận 1, TP.HCM', 'info@nxbtphcm.vn'),
('NXB Hội Nhà Văn', '65 Nguyễn Du, Hai Bà Trưng, Hà Nội', 'hoinhavan@nxb.com.vn'),
('NXB Khoa Học Xã Hội', '26 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội', 'contact@nxhkhsxh.vn'),
('NXB Tự Do', '21 Pasteur, Quận 3, TP.HCM', 'support@nxbtd.vn');

INSERT INTO books (title, isbn, published_year, edition, language, total_copies, available_copies, shelf_location, image, category_id)
VALUES
('Nghệ thuật tinh tế của việc đếch quan tâm', 'ISBN001', 2017, '1st', 'Tiếng Việt', 10, 5, 'A1-01', 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_5283.jpg', 1),
('Đắc nhân tâm', 'ISBN002', 1936, '10th', 'Tiếng Việt', 15, 8, 'A1-02', 'https://nxbhcm.com.vn/Image/Biasach/dacnhantam86.jpg', 2),
('Sapiens: Lược sử loài người', 'ISBN003', 2011, '1st', 'Tiếng Việt', 12, 6, 'B1-01', 'https://bizweb.dktcdn.net/100/197/269/products/sapiens-luoc-su-ve-loai-nguoi-outline-5-7-2017-02.jpg?v=1520935327270', 3),
('Atomic Habits', 'ISBN004', 2018, '1st', 'Tiếng Việt', 20, 10, 'B1-02', 'https://0.academia-photos.com/attachment_thumbnails/105741810/mini_magick20230915-1-9p5k2q.png?1694777602', 4),
('1984', 'ISBN005', 1949, '1st', 'Tiếng Anh', 8, 4, 'C1-01', 'https://dilib.vn/img/news/2022/09/larger/1011-1984-1.jpg?v=8882', 6),
('Harry Potter và Hòn đá Phù thủy', 'ISBN006', 1997, '1st', 'Tiếng Việt', 30, 20, 'C1-02', 'https://bizweb.dktcdn.net/100/567/082/products/8934974203216-2.jpg?v=1747319784877', 10),
('Sự giàu có của các quốc gia', 'ISBN007', 1776, '1st', 'Tiếng Anh', 5, 2, 'D1-01', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcngu5Vp706WihvAFv97E_UWpjhvUY4dGVQ&s', 7),
('Lược sử thời gian', 'ISBN008', 1988, '2nd', 'Tiếng Việt', 7, 3, 'D1-02', 'https://www.nxbtre.com.vn/Images/Book/nxbtre_full_20002022_040049.jpg', 8),
('Nhà giả kim', 'ISBN009', 1988, '1st', 'Tiếng Việt', 18, 9, 'E1-01', 'https://upload.wikimedia.org/wikipedia/vi/9/9c/Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg', 6),
('Mắt biếc', 'ISBN010', 1990, '1st', 'Tiếng Việt', 25, 15, 'E1-02', 'https://via.placeholder.com/150x220', 10);


INSERT INTO reservations (book_id, user_id, reservation_date, expiration_date, status) VALUES
(1, 1, '2025-09-01', '2025-09-07', 'PENDING'),
(2, 1, '2025-09-02', '2025-09-08', 'COMPLETED'),
(3, 2, '2025-09-05', '2025-09-12', 'CANCELLED'),
(4, 2, '2025-09-10', '2025-09-17', 'PENDING'),
(5, 3, '2025-09-15', '2025-09-22', 'PENDING'),
(1, 2, '2025-09-16', '2025-09-23', 'COMPLETED'),
(2, 3, '2025-09-18', '2025-09-25', 'PENDING'),
(3, 1, '2025-09-20', '2025-09-27', 'CANCELLED'),
(4, 3, '2025-09-22', '2025-09-29', 'COMPLETED'),
(5, 1, '2025-09-25', '2025-10-02', 'PENDING');
