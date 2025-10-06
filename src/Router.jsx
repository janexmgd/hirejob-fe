import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
