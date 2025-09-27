import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

export const login = async (values) => {
  try {
    console.log(values);

    const result = await axios.post("http://localhost:8080/api/auth/login", {
      ...values,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (values) => {
  try {
    await axios.post("http://localhost:8080/api/auth/register", {
      ...values,
    });
  } catch (error) {
    console.log(error);
  }
};
