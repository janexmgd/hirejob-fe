import { useNavigate } from 'react-router-dom';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col min-h-screen w-full '>
      <div className='flex-grow flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold text-purple-600'>404</h1>
        <p className='text-xl text-gray-600 mt-4'>Page Not Found</p>
        <p className='flex gap-2'>
          back to{' '}
          <p
            className='underline text-purple-600 hover:cursor-pointer'
            onClick={() => navigate('/home')}
          >
            home
          </p>
        </p>
      </div>
    </div>
  );
}
