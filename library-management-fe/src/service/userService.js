import api from "./authService";

export const getCurrentUser = async () => {
  try {
    const result = await api.get("/users");
    console.log(result.data);

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, updateData) => {
  try {
    await api.put(`/users/${id}`, updateData);
  } catch (error) {
    console.log(error);
  }
};
