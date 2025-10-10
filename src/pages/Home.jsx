import { FaSearch } from 'react-icons/fa';
import Navbar from '../components/navbar.jsx';
import HomeCard from '../components/HomeCard.jsx';
import Footer from '../components/Footer.jsx';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full '>
      <Navbar />
      <div className='px-8 md:px-16 h-[7vh] bg-purple-400 flex text-lg md:text-xl italic items-center text-white font-semibold'>
        Top worker
      </div>
      <div className='w-full  flex flex-col md:flex-row gap-2 items-stretch text-gray-500 p-2 rounded-md bg-white px-8 md:px-16'>
        <div className='flex flex-row items-center border border-gray-300 rounded-md flex-grow'>
          <input
            type='text'
            placeholder='Search...'
            className='flex-grow p-3 focus:outline-none rounded-l-md'
          />
          <FaSearch className='text-gray-400 mr-3' />
        </div>

        <div className='flex flex-row md:flex-row gap-2'>
          <button className='flex justify-center items-center p-2 border border-gray-300 rounded-md md:w-auto w-full'>
            Sort
          </button>

          <button className='flex justify-center items-center p-2 bg-purple-600 text-white rounded-md md:w-auto w-full'>
            Search
          </button>
        </div>
      </div>
      <section className='bg-white mt-4 md:mt-8 gap-3 flex flex-col px-8 md:px-16 '>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </section>
      <div className='mt-4 flex justify-center text-purple-300'>
        <Pagination total={99} />
      </div>
      <Footer />
    </div>
  );
}
