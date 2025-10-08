import { useNavigate } from 'react-router';
export default function Navbar() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <nav className='w-full h-[10vh] flex justify-center items-center px-8 md:px-16 '>
      <div
        className='text-xl italic hover:scale-110 cursor-pointer'
        onClick={() => handleNavigate('/')}
      >
        Hirejob
      </div>
      <div className='ml-auto space-x-4'>
        <button
          className='bg-white cursor-pointer text-purple-700 outline outline-purple-700 p-1.5 hover:scale-110'
          onClick={() => handleNavigate('/login')}
        >
          Masuk
        </button>
        <button
          className='bg-purple-700 cursor-pointer text-white p-1.5 hover:scale-110'
          onClick={() => handleNavigate('/register')}
        >
          Daftar
        </button>
      </div>
    </nav>
  );
}
