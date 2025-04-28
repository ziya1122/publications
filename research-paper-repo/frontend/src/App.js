import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from 'C:/Users/Admin/Desktop/research-paper-repo/frontend/src/components/Login';
import Register from 'C:/Users/Admin/Desktop/research-paper-repo/frontend/src/components/Register';
import SubmitPaper from 'C:/Users/Admin/Desktop/research-paper-repo/frontend/src/components/SubmitPaper';
import PaperTable from 'C:/Users/Admin/Desktop/research-paper-repo/frontend/src/components/PaperTable';
import ProtectedRoute from 'C:/Users/Admin/Desktop/research-paper-repo/frontend/src/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /papers */}
        <Route path="/" element={<Navigate to="/papers" />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Paper list - currently public */}
        <Route path="/papers" element={<PaperTable />} />

        {/* Protected route - only faculty can submit */}
        <Route
          path="/submit"
          element={
            <ProtectedRoute role="faculty">
              <SubmitPaper />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
