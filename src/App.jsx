import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login/Login';
import { ErrorPage } from './pages/404/ErrorPage';
import { StudentPanel } from './pages/student-panel/StudentPanel';
import { Grades } from './components/student-panel-components/grades/Grades';
import { Announcements } from './components/student-panel-components/announcements/Announcements';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/student-panel' element={<StudentPanel />} />
        <Route path='/student-panel/grades' element={<Grades />} />
        <Route path='/student-panel/announcements' element={<Announcements />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
