import api from "./authService";

export const getAllCategories = async () => {
  try {
    const result = await api.get("/category");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
