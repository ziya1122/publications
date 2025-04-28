import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token || (role && user?.role !== role)) {
    return <Navigate to="/login" />;
  }

  return children;
}
