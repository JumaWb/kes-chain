// src/services/authService.js

const API_BASE_URL = 'http://127.0.0.1:5000/api'; 
  //const API_BASE_URL = 'https://keschain.stepcashier.com/';

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

  // ✅ Store token
  if (data.token) {
    localStorage.setItem('token', data.token);
  }

  // ✅ Store user object (make sure your backend returns this!)
  if (data.user) {
    localStorage.setItem('user', JSON.stringify(data.user));
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
  localStorage.removeItem('user'); // ✅ Also remove user data on logout
};

// Get current user
export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  return token && user ? { token, user: JSON.parse(user) } : null;
};
