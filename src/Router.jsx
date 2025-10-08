import { BrowserRouter, Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
