import axios from "axios";

const backend = axios.create({
  baseURL: `https://venkateshwara-packaging-solution-server.onrender.com/api`,
});

backend.defaults.headers.common['key'] = process.env.API_KEY || 'token';

backend.interceptors.request.use((config) => {
  // For example, you can modify headers here before each request
  // config.headers.common['Authorization'] = 'Bearer your_token';
  return config;
});

export const login = (data, config) => {
  return backend.post("/auth/login", data, config);
};

export const signup = (data) => {
  return backend.post("/auth/signup", data);
};

export const getUserByToken = (token) => {
  return backend.get("/auth/", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const submitBillingForm = (data) => {
  return backend.post('/form/submit', data);
};

export const getCustomers = async () => {
  try {
    const response = await backend.get("/form/status"); // Update with your endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};