// src/routes/index.js
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/landing/LandingPage';
import Login from '../components/login/Login';
import Signup from '../components/signup/SignUp';
import Dashboard from '../pages/dashboard/Dashboard';
import Earnings from '../pages/earnings/Earnings';
import Referrals from '../pages/referrals/Referrals';
import Settings from '../pages/settings/Settings';
import Messages from '../pages/messages/Messages';
import Help from '../pages/help/Help';

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
      },
      {
        path: 'earnings',
        element: <Earnings />
      },
      {
        path: 'referrals',
        element: <Referrals />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'messages',
        element: <Messages />
      },
      {
        path: 'help',
        element: <Help />
      }
    ]
  }
]);

export default router;
