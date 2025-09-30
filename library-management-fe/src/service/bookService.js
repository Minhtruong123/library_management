import api from "./authService";

export const getNewBooks = async () => {
  try {
    const result = await api.get("books");
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (id) => {
  try {
    const result = await api.get(`/books/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
