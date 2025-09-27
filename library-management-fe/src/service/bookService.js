import api from "./authService";

export const getNewBooks = async () => {
  try {
    const result = await api.get("/books");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
