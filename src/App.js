import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import SideBarLayout from './layout/SideBarLayout';
import ForgotPassword from './pages/ForgotPassword';
// import UndertrialPrisoner from './pages/UndertrialPrisoner';
import Notifications from './pages/Notifications';
import ChatWindow from './components/chat/ChatWindow';
import ClientDetails from './pages/advisor/ClientDetails';
import ClientForm from './pages/advisor/ClientForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/dashboards' element={<SideBarLayout />}>
          <Route
            path="home"
            element={
              // <PrivateRoute>
              <ChatWindow />
              // </PrivateRoute>
            }
          />
          <Route
            path="details"
            element={
              // <PrivateRoute>
              <ClientDetails />
              // </PrivateRoute>
            }
          />
          <Route
            path="notification"
            element={
              // <PrivateRoute>
              <Notifications />
              // </PrivateRoute>
            }
          />
          <Route
            path="add-client"
            element={
              // <PrivateRoute>
              <ClientForm />
              // </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}

export default App;