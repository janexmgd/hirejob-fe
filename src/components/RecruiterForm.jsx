import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function RecruiterForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    position: '',
  });
  useEffect(() => {
    setErr('');
  }, [form]);

  useEffect(() => {
    setErr('');
    if (form.password != form.confirmPassword) {
      setErr('password dan konfirmasi password tidak sesuai');
    }
  }, [form.password, form.confirmPassword]);
  const handleRegister = (e) => {
    try {
      e.preventDefault();
      setErr('');
      for (const [key, value] of Object.entries(form)) {
        if (!value) {
          setErr(`${key} can't be empty`);
          return;
        }
      }
      console.log(form);
    } catch (error) {
      alert(error.message || 'error');
    }
  };
  const [err, setErr] = useState('');
  return (
    <div className='w-full md:w-1/2 h-full flex flex-col p-16 space-y-4'>
      <p className='text-2xl'>Hello</p>
      <p className='text-gray-700'>
        Bergabung bersama kami sebagai perusahaan yang mencari developer
      </p>
      <form onSubmit={handleRegister} className='flex flex-col space-y-2'>
        <div className='flex flex-col space-y-2'>
          <p className='text-gray-700 text-sm'>Nama</p>
          <input
            type='text'
            className='border border-gray-300 p-2 placeholder:text-gray-700'
            placeholder='Masukkan nama anda'
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
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
          <p className='text-gray-700 text-sm'>Nama</p>
          <input
            type='text'
            className='border border-gray-300 p-2 placeholder:text-gray-700'
            placeholder='Masukkan nama anda'
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <p className='text-gray-700 text-sm'>Nama</p>
          <input
            type='text'
            className='border border-gray-300 p-2 placeholder:text-gray-700'
            placeholder='Masukkan nama anda'
            onChange={(e) => setForm({ ...form, name: e.target.value })}
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
        <div className='flex flex-col space-y-2'>
          <p className='text-gray-700 text-sm'>Konfirmasi password</p>
          <input
            type='password'
            className='border border-gray-300 p-2 placeholder:text-gray-700'
            placeholder='Konfirmasi password anda'
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
        </div>
        <p className='mt-2 text-red-400 text-sm min-h-[20px]'>{err}</p>
        <div className='flex items-end justify-end w-full'>
          <p
            className='text-black underline hover:cursor-pointer'
            onClick={() => navigate('/register?role=jobseeker')}
          >
            bergabung sebagai pencari kerja
          </p>
        </div>
        <button className='bg-yellow-400 text-white p-2 hover:bg-yellow-500 hover:cursor-pointer'>
          Register
        </button>
      </form>
      <p className='text-xs sm:text-sm'>
        sudah punya akun ?
        <span
          className='text-yellow-400 hover:cursor-pointer ps-3'
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </p>
    </div>
  );
}
