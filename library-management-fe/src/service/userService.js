import api from "./authService";

export const getCurrentUser = async () => {
  try {
    const result = await api.get("/users");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
