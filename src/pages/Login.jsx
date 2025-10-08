import { useState } from 'react';
import Decoration from '../components/Decoration.jsx';
import { useNavigate } from 'react-router';
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [err, setErr] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      setErr('');
      for (const [key, value] of Object.entries(form)) {
        if (!value) {
          setErr(`${key} can't be empty`);
          return;
        }
      }
      console.log(form);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className='flex flex-row h-screen w-screen'>
      <Decoration />
      <div className='w-full md:w-1/2 h-full flex flex-col p-16 space-y-4'>
        <p className='text-2xl'>Hello</p>
        <p className='text-gray-700 mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
        <form onSubmit={handleLogin} className=' flex flex-col space-y-4'>
          <div className='flex flex-col space-y-2'>
            <p className='text-gray-700 text-sm'>Email</p>
            <input
              type='email'
              className='border border-gray-300 p-2 placeholder:text-gray-700'
              placeholder='Masukkan email anda'
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <p className='text-gray-700 text-sm'>Password</p>
            <input
              type='password'
              className='border border-gray-300 p-2 placeholder:text-gray-700'
              placeholder='Masukkan password anda'
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <p className='mt-2 text-red-400 text-sm min-h-[20px]'>{err}</p>
          <div className='flex items-end justify-end w-full'>
            <p className='text-black underline hover:cursor-pointer'>
              Lupa kata sandi
            </p>
          </div>
          <button className='bg-yellow-400 text-white p-2 hover:bg-yellow-500 hover:cursor-pointer'>
            Login
          </button>
        </form>
        <p className='text-xs sm:text-sm'>
          Anda belum punya akun ?
          <span
            className='text-yellow-400 hover:cursor-pointer ps-3'
            onClick={() => navigate('/register')}
          >
            Daftar
          </span>
        </p>
      </div>
    </div>
  );
}
