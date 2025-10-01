import React, { useState } from "react";
import styles from "./MembersManagement.module.css";
import Layout from "../Admin/Layout/Layout";

export default function MembersManagement() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@email.com",
      phone: "0912345678",
      joinDate: "15/01/2025",
      status: "active",
      booksLoaned: 2,
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranthib@email.com",
      phone: "0923456789",
      joinDate: "20/02/2025",
      status: "active",
      booksLoaned: 1,
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "levanc@email.com",
      phone: "0934567890",
      joinDate: "05/03/2025",
      status: "inactive",
      booksLoaned: 0,
    },
    {
      id: 4,
      name: "Phạm Thị D",
      email: "phamthid@email.com",
      phone: "0945678901",
      joinDate: "10/04/2025",
      status: "active",
      booksLoaned: 3,
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      email: "hoangvane@email.com",
      phone: "0956789012",
      joinDate: "25/05/2025",
      status: "active",
      booksLoaned: 0,
    },
    {
      id: 6,
      name: "Vũ Thị F",
      email: "vuthif@email.com",
      phone: "0967890123",
      joinDate: "30/06/2025",
      status: "blocked",
      booksLoaned: 0,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
    status: "active",
  });

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm);

    const matchesStatus =
      filterStatus === "all" || member.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const handleAddMember = (e) => {
    e.preventDefault();
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(
      today.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${today.getFullYear()}`;

    const newMemberWithId = {
      ...newMember,
      id: members.length + 1,
      joinDate: formattedDate,
      booksLoaned: 0,
    };

    setMembers([...members, newMemberWithId]);
    setNewMember({
      name: "",
      email: "",
      phone: "",
      status: "active",
    });
    setShowAddForm(false);
  };

  const handleStatusChange = (id, newStatus) => {
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, status: newStatus } : member
      )
    );
  };
  return (
    <>
      <Layout>
        <div className={styles.membersContainer}>
          <div className={styles.membersHeader}>
            <h1>Quản lý Thành viên</h1>
            <p>Quản lý tất cả thành viên của thư viện</p>
          </div>

          <div className={styles.membersControls}>
            <div className={styles.searchAndFilter}>
              <div className={styles.searchBox}>
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên, email hoặc số điện thoại"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className={styles.filterBox}>
                <label>Trạng thái:</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">Tất cả</option>
                  <option value="active">Đang hoạt động</option>
                  <option value="inactive">Không hoạt động</option>
                  <option value="blocked">Đã khóa</option>
                </select>
              </div>
            </div>

            <button
              className={styles.addButton}
              onClick={() => setShowAddForm(true)}
            >
              <i className="fas fa-plus"></i> Thêm thành viên
            </button>
          </div>

          {showAddForm && (
            <div className={styles.formOverlay}>
              <div className={styles.addMemberForm}>
                <div className={styles.formHeader}>
                  <h3>Thêm thành viên mới</h3>
                  <button
                    className={styles.closeButton}
                    onClick={() => setShowAddForm(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <form onSubmit={handleAddMember}>
                  <div className={styles.formGroup}>
                    <label>Họ và tên</label>
                    <input
                      type="text"
                      required
                      value={newMember.name}
                      onChange={(e) =>
                        setNewMember({ ...newMember, name: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                      type="email"
                      required
                      value={newMember.email}
                      onChange={(e) =>
                        setNewMember({ ...newMember, email: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Số điện thoại</label>
                    <input
                      type="tel"
                      required
                      value={newMember.phone}
                      onChange={(e) =>
                        setNewMember({ ...newMember, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Trạng thái</label>
                    <select
                      value={newMember.status}
                      onChange={(e) =>
                        setNewMember({ ...newMember, status: e.target.value })
                      }
                    >
                      <option value="active">Đang hoạt động</option>
                      <option value="inactive">Không hoạt động</option>
                    </select>
                  </div>
                  <div className={styles.formActions}>
                    <button type="button" onClick={() => setShowAddForm(false)}>
                      Hủy
                    </button>
                    <button type="submit" className={styles.submitButton}>
                      Thêm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className={styles.membersTable}>
            <div className={styles.tableHeader}>
              <div className={styles.memberName}>Tên thành viên</div>
              <div className={styles.memberContact}>Liên hệ</div>
              <div className={styles.memberJoin}>Ngày tham gia</div>
              <div className={styles.memberStatus}>Trạng thái</div>
              <div className={styles.memberBooks}>Sách mượn</div>
              <div className={styles.memberActions}>Thao tác</div>
            </div>

            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <div key={member.id} className={styles.tableRow}>
                  <div className={styles.memberName}>
                    <div className={styles.memberAvatar}>
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.name}>{member.name}</div>
                      <div className={styles.id}>ID: {member.id}</div>
                    </div>
                  </div>
                  <div className={styles.memberContact}>
                    <div>{member.email}</div>
                    <div className={styles.phone}>{member.phone}</div>
                  </div>
                  <div className={styles.memberJoin}>{member.joinDate}</div>
                  <div className={styles.memberStatus}>
                    <span
                      className={`${styles.statusBadge} ${
                        styles[member.status]
                      }`}
                    >
                      {member.status === "active" && "Đang hoạt động"}
                      {member.status === "inactive" && "Không hoạt động"}
                      {member.status === "blocked" && "Đã khóa"}
                    </span>
                  </div>
                  <div className={styles.memberBooks}>
                    {member.booksLoaned > 0 ? (
                      <span className={styles.loanCount}>
                        {member.booksLoaned}
                      </span>
                    ) : (
                      <span className={styles.noLoans}>0</span>
                    )}
                  </div>
                  <div className={styles.memberActions}>
                    <div className={styles.actionDropdown}>
                      <button className={styles.actionButton}>
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                      <div className={styles.dropdownContent}>
                        <a href="#">
                          <i className="fas fa-eye"></i> Xem chi tiết
                        </a>
                        <a href="#">
                          <i className="fas fa-edit"></i> Chỉnh sửa
                        </a>
                        {member.status === "active" ? (
                          <a
                            href="#"
                            onClick={() =>
                              handleStatusChange(member.id, "inactive")
                            }
                          >
                            <i className="fas fa-user-slash"></i> Vô hiệu hóa
                          </a>
                        ) : (
                          <a
                            href="#"
                            onClick={() =>
                              handleStatusChange(member.id, "active")
                            }
                          >
                            <i className="fas fa-user-check"></i> Kích hoạt
                          </a>
                        )}
                        {member.status !== "blocked" ? (
                          <a
                            href="#"
                            onClick={() =>
                              handleStatusChange(member.id, "blocked")
                            }
                            className={styles.dangerAction}
                          >
                            <i className="fas fa-ban"></i> Khóa tài khoản
                          </a>
                        ) : (
                          <a
                            href="#"
                            onClick={() =>
                              handleStatusChange(member.id, "active")
                            }
                          >
                            <i className="fas fa-unlock"></i> Mở khóa
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                <i className="fas fa-search"></i>
                <p>Không tìm thấy thành viên nào phù hợp</p>
              </div>
            )}
          </div>

          <div className={styles.memberStats}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fas fa-users"></i>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>{members.length}</span>
                <span className={styles.statLabel}>Tổng thành viên</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fas fa-user-check"></i>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>
                  {members.filter((m) => m.status === "active").length}
                </span>
                <span className={styles.statLabel}>Đang hoạt động</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fas fa-user-slash"></i>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>
                  {members.filter((m) => m.status === "inactive").length}
                </span>
                <span className={styles.statLabel}>Không hoạt động</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fas fa-ban"></i>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>
                  {members.filter((m) => m.status === "blocked").length}
                </span>
                <span className={styles.statLabel}>Đã khóa</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
