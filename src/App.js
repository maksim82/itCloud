import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthProvider from './hoc/AuthProvider';

import Layout from './components/layout/Layout';
import Registration from './components/autorization/Registration';
import Login from './components/autorization/Login';
import Home from './components/home/Home';
import StudentProject from './components/studentProject/StudentProject';
import DownloadProjects from './components/downloadProjects/DownloadProjects';
import NotFound from './components/noFound/NotFound';
import RequireAuth from './hoc/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<RequireAuth><Layout /></RequireAuth>}>
              <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
              <Route path='/:id' element={<RequireAuth><StudentProject /></RequireAuth>} />
              <Route path='/create' element={<RequireAuth><DownloadProjects /></RequireAuth>} />
              <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
