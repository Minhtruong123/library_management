import api from "./authService";

export const getCurrentUser = async () => {
  try {
    const result = await api.get("/users");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (updateData) => {
  try {
    await api.put(`/users/me`, updateData);
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = async (oldPassword, newPassword) => {
  try {
    const result = await api.put(`/users/change-password`, {
      oldPassword,
      newPassword,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
