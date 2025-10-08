import { FaMarker } from 'react-icons/fa';
import avatr from '../assets/images/avatar.jpg';

export default function HomeCard() {
  return (
    <div className='w-full p-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 border-b border-gray-200 transition-all duration-200'>
      {/* Left: Avatar + Info */}
      <div className='flex items-center md:items-start gap-4 w-full md:w-auto'>
        {/* Avatar */}
        <div className='w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0'>
          <img
            src={avatr}
            alt='avatar'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Info */}
        <div className='flex flex-col gap-1'>
          <p className='text-gray-900 font-semibold md:text-base text-sm'>
            Liam Payne
          </p>
          <p className='text-gray-500 text-xs md:text-sm'>Web Developer</p>

          <div className='flex items-center gap-1 text-gray-400 text-xs md:text-sm'>
            <FaMarker className='text-gray-400' />
            <span>Jakarta, Indonesia</span>
          </div>

          {/* Skills */}
          <div className='flex flex-wrap gap-1 mt-2'>
            <span className='bg-yellow-400 text-white text-xs px-3 py-1 rounded-md shadow-sm'>
              PHP
            </span>
            <span className='bg-yellow-400 text-white text-xs px-3 py-1 rounded-md shadow-sm'>
              JavaScript
            </span>
            <span className='bg-yellow-400 text-white text-xs px-3 py-1 rounded-md shadow-sm'>
              HTML
            </span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-200 w-full md:w-auto'>
        Lihat Profile
      </button>
    </div>
  );
}
