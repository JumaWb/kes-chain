// src/services/authService.js

const API_BASE_URL = 'http://127.0.0.1:5000/api'; 

// LOGIN
export const login = async (credentials) => {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Login failed');
  }

  const data = await res.json();

  // Optionally store token
  if (data.token) {
    localStorage.setItem('token', data.token);
  }

  return data;
};

// SIGNUP
export const signup = async (userData) => {
  const res = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Signup failed');
  }

  return await res.json();
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem('token');
};

// Get current user
export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  return token ? { token } : null;
};
