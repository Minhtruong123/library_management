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
    const result = await axios.post("http://localhost:8080/api/auth/login", {
      ...values,
    });

    const { token, userResponse } = result.data;

    localStorage.setItem("token", token);
    localStorage.setItem("role", userResponse.role);
    localStorage.setItem("userInfo", JSON.stringify(userResponse));
    return result;
  } catch (error) {
    console.log(error);
  }
};
