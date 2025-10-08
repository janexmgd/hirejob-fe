import { FaSearch } from 'react-icons/fa';
import Navbar from '../components/navbar.jsx';
import HomeCard from '../components/HomeCard.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full px-8 md:px-16 bg-[#F6F7F8]'>
      <Navbar />
      <div className='w-full mt-4 md:mt-8 flex flex-col md:flex-row gap-2 items-stretch bg-white text-gray-500 p-2 rounded-md shadow-sm'>
        {/* Input + Icon */}
        <div className='flex flex-row items-center border border-gray-300 rounded-md flex-grow'>
          <input
            type='text'
            placeholder='Search...'
            className='flex-grow p-3 focus:outline-none rounded-l-md'
          />
          <FaSearch className='text-gray-400 mr-3' />
        </div>

        {/* Tombol sort dan search */}
        <div className='flex flex-row md:flex-row gap-2'>
          <button className='flex justify-center items-center p-2 border border-gray-300 rounded-md md:w-auto w-full'>
            Sort
          </button>

          <button className='flex justify-center items-center p-2 bg-purple-600 text-white rounded-md md:w-auto w-full'>
            Search
          </button>
        </div>
      </div>
      <section className='bg-white mt-4 md:mt-8 gap-3 flex flex-col'>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </section>
      <Footer />
    </div>
  );
}
