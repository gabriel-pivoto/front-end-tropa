import { Routes, Route, Navigate } from 'react-router-dom';
import {Login} from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default function AppRoutes() {
  const isLoggedIn = localStorage.getItem('logged') === 'true';

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
    </Routes>
  );
}
