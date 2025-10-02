import React, { useState } from "react";
import styles from "./SchedualingManagement.module.css";
import Layout from "../Admin/Layout/Layout";

export default function SchedualingManagement() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      memberName: "Nguyễn Văn A",
      bookTitle: "Dế Mèn Phiêu Lưu Ký",
      date: "2025-10-05",
      time: "09:30",
      status: "pending",
    },
    {
      id: 2,
      memberName: "Trần Thị B",
      bookTitle: "Nhà Giả Kim",
      date: "2025-10-07",
      time: "14:00",
      status: "confirmed",
    },
    {
      id: 3,
      memberName: "Lê Văn C",
      bookTitle: "Đắc Nhân Tâm",
      date: "2025-10-10",
      time: "10:15",
      status: "confirmed",
    },
    {
      id: 4,
      memberName: "Phạm Thị D",
      bookTitle: "Tôi thấy hoa vàng trên cỏ xanh",
      date: "2025-10-12",
      time: "15:45",
      status: "cancelled",
    },
  ]);

  const [formData, setFormData] = useState({
    memberName: "",
    bookTitle: "",
    date: "",
    time: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: appointments.length + 1,
      memberName: formData.memberName,
      bookTitle: formData.bookTitle,
      date: formData.date,
      time: formData.time,
      status: "pending",
      note: formData.note,
    };

    setAppointments([...appointments, newAppointment]);
    setFormData({
      memberName: "",
      bookTitle: "",
      date: "",
      time: "",
      note: "",
    });
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return styles.pending;
      case "confirmed":
        return styles.confirmed;
      case "cancelled":
        return styles.cancelled;
      default:
        return "";
    }
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("vi-VN", options);
  };
  return (
    <>
      <Layout>
        <div className={styles.schedulingContainer}>
          <h1>Đặt lịch mượn sách</h1>
          <p className={styles.subheading}>
            Đặt lịch trước để chắc chắn sách bạn muốn sẽ có sẵn khi bạn đến.
          </p>

          <div className={styles.twoColumnGrid}>
            <div className={styles.card}>
              <h2>Đặt lịch mới</h2>
              <form className={styles.schedulingForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="memberName">Tên thành viên</label>
                  <input
                    type="text"
                    id="memberName"
                    name="memberName"
                    value={formData.memberName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="bookTitle">Tên sách</label>
                  <input
                    type="text"
                    id="bookTitle"
                    name="bookTitle"
                    value={formData.bookTitle}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="date">Ngày đặt</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="time">Giờ đặt</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="note">Ghi chú</label>
                  <textarea
                    id="note"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  <i className="fas fa-calendar-plus"></i> Đặt lịch
                </button>
              </form>
            </div>

            <div className={styles.card}>
              <h2>Lịch đặt sắp tới</h2>
              <div className={styles.upcomingAppointments}>
                {appointments
                  .filter((app) => app.status !== "cancelled")
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .slice(0, 3)
                  .map((appointment) => (
                    <div
                      key={appointment.id}
                      className={styles.appointmentCard}
                    >
                      <div className={styles.appointmentHeader}>
                        <span className={styles.appointmentDate}>
                          <i className="fas fa-calendar-day"></i>{" "}
                          {formatDate(appointment.date)}
                        </span>
                        <span className={styles.appointmentTime}>
                          <i className="fas fa-clock"></i> {appointment.time}
                        </span>
                      </div>
                      <h3>{appointment.bookTitle}</h3>
                      <p>
                        <i className="fas fa-user"></i> {appointment.memberName}
                      </p>
                      <div className={styles.appointmentStatus}>
                        <span className={getStatusClass(appointment.status)}>
                          {appointment.status === "pending" && "Chờ xác nhận"}
                          {appointment.status === "confirmed" && "Đã xác nhận"}
                          {appointment.status === "cancelled" && "Đã hủy"}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Tất cả lịch đặt</h2>
            <div className={styles.tableResponsive}>
              <table className={styles.appointmentsTable}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Thành viên</th>
                    <th>Sách</th>
                    <th>Ngày</th>
                    <th>Giờ</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td>{appointment.id}</td>
                      <td>{appointment.memberName}</td>
                      <td>{appointment.bookTitle}</td>
                      <td>{formatDate(appointment.date)}</td>
                      <td>{appointment.time}</td>
                      <td>
                        <span className={getStatusClass(appointment.status)}>
                          {appointment.status === "pending" && "Chờ xác nhận"}
                          {appointment.status === "confirmed" && "Đã xác nhận"}
                          {appointment.status === "cancelled" && "Đã hủy"}
                        </span>
                      </td>
                      <td className={styles.actions}>
                        {appointment.status === "pending" && (
                          <>
                            <button
                              className={styles.actionButton}
                              onClick={() =>
                                handleStatusChange(appointment.id, "confirmed")
                              }
                            >
                              <i className="fas fa-check"></i>
                            </button>
                            <button
                              className={styles.actionButton}
                              onClick={() =>
                                handleStatusChange(appointment.id, "cancelled")
                              }
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </>
                        )}
                        {appointment.status === "confirmed" && (
                          <button
                            className={styles.actionButton}
                            onClick={() =>
                              handleStatusChange(appointment.id, "cancelled")
                            }
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        )}
                        {appointment.status === "cancelled" && (
                          <button
                            className={styles.actionButton}
                            onClick={() =>
                              handleStatusChange(appointment.id, "pending")
                            }
                          >
                            <i className="fas fa-redo"></i>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
