import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login/Login';
import { ErrorPage } from './pages/404/ErrorPage';
import { StudentPanel } from './pages/student-panel/panel/StudentPanel';
import { Grades } from './components/student-panel-components/grades/Grades';
import { Announcements } from './components/student-panel-components/announcements/Announcements';
import { Account } from './components/student-panel-components/account/Account';
import useAuthentication from './scripts/useAuthentication';
import { Notes } from './components/student-panel-components/notes/Notes';

function App() {
  const ProtectedRoute = () => {
    const [isAuthenticated, isLoading] = useAuthentication();
    if (isLoading) {
      console.log('loading');
    } else if (!isAuthenticated) {
      return <Navigate to='/' replace />;
    }
    return <Outlet />;
  };

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path='/student-panel' element={<StudentPanel />} />
        <Route path='/student-panel/grades' element={<Grades />} />
        <Route path='/student-panel/announcements' element={<Announcements />} />
        <Route path='/student-panel/account' element={<Account />} />
        <Route path='/student-panel/notes' element={<Notes />} />
      </Route>
      <Route path='/' element={<Login />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
