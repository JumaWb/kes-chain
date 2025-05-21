// src/routes/index.js
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/landing/LandingPage';
import Login from '../components/login/Login';
import Signup from '../components/signup/SignUp';
import Dashboard from '../pages/dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,           // http://localhost:3000/
        element: <LandingPage />
      },
      {
        path: 'login',         // http://localhost:3000/login
        element: <Login />
      },
      {
        path: 'signup',        // http://localhost:3000/signup
        element: <Signup />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  }
]);

export default router;
