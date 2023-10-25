import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login/Login';
import { ErrorPage } from './pages/404/ErrorPage';
import { StudentPanel } from './pages/student-panel/panel/StudentPanel';
import { Grades } from './components/student-panel-components/grades/Grades';
import { Announcements } from './components/student-panel-components/announcements/Announcements';

function App() {

  const ProtectedRoute = ({ auth, children }) => {
    if (auth === false) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  const isAuthenticated = () => {
    return false;
  }

  return (
    <Routes>
      <Route path='/student-panel' element={
        <ProtectedRoute auth={isAuthenticated}>
          <StudentPanel/>
        </ProtectedRoute>
      } />
      <Route path='/student-panel/grades' element={<Grades />} />
      <Route path='/student-panel/announcements' element={<Announcements />} />
      <Route path='/' element={<Login />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
//
export default App;
