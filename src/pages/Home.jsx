import { FaSearch } from 'react-icons/fa';
import Navbar from '../components/navbar.jsx';
import HomeCard from '../components/HomeCard.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full px-8 md:px-16 bg-[#F6F7F8]'>
      <Navbar />
      <div className='w-full mt-4 md:mt-8 flex flex-row gap-2 items-center bg-white text-gray-500'>
        <div className='flex flex-grow flex-row items-center border-0 border-r-2 border-gray-300 pr-5'>
          <input
            type='text'
            placeholder='search'
            className='flex-grow p-3 focus:outline-none'
          />
          <FaSearch className='text-gray-400' />
        </div>
        <button className='p-1'>sort</button>

        <button className='p-2 bg-purple-600 text-white'>Search</button>
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
