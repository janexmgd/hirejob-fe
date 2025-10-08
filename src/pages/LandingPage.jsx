import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import topLandingImg from '../assets/images/landing_page_top.png';
import midLandingImg from '../assets/images/landing_page_middle.jpg';
import bottomLandingImg from '../assets/images/landing_page_bottom.jpg';

const LandingPage = () => {
  return (
    <div className='flex flex-col min-h-screen w-full pl-8 pr-8 md:pl-16 md:pr-16'>
      <Navbar />
      <section className='sectionOne flex w-full h-[90vh]'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
          <div className='flex flex-col items-start w-full'>
            <div className='text-3xl md:text-xl tracking-wider capitalize font-bold'>
              talenta terbaik negeri untuk perubahan revolusi 4.0
            </div>
            <div className='text-gray-500 mt-3 tracking-widest'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </div>

            <button className=' bg-purple-700 text-white p-2 w-1/2 max-w-64 mt-7 md:text-xs cursor-pointer hover:scale-105'>
              Mulai Dari sekarang
            </button>
          </div>
        </div>

        <div className='hidden md:w-1/2 md:flex flex-col justify-center items-center'>
          <div className='w-3/4 h-[80%] ml-auto mr-auto flex items-center justify-center hover:scale-105'>
            <img
              src={topLandingImg}
              alt='image top landing'
              loading='lazy'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </section>

      <section className='sectionTwo flex w-full h-screen '>
        <div className='hidden md:w-1/2 md:flex  flex-col justify-center items-center'>
          <div className='w-3/4 h-[80%] ml-auto mr-auto flex items-center justify-center hover:scale-105'>
            <img
              src={midLandingImg}
              alt='image middle landing'
              loading='lazy'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
          <p className='text-3xl md:text-xl tracking-wider capitalize w-full font-bold'>
            kenapa harus mencari talenta disini
          </p>
          <ul className='list-disc list-inside text-gray-500 mt-3 tracking-widest w-full marker:text-purple-700 marker:font-bold'>
            <li className='text-xs md:text-sm'>Lorem ipsum dolor sit amet,</li>
            <li className='text-xs md:text-sm'>Lorem ipsum dolor sit amet,</li>
            <li className='text-xs md:text-sm'>Lorem ipsum dolor sit amet,</li>
            <li className='text-xs md:text-sm'>Lorem ipsum dolor sit amet,</li>
          </ul>
        </div>
      </section>

      <section className='sectionThree flex w-full h-screen'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
          <p className='text-xl md:text-3xl tracking-wider capitalize w-full md:w-3/4 font-bold'>
            Skill Talent
          </p>
          <p className='text-gray-500 mt-3 w-full md:w-3/4 tracking-widest text-sm md:text-xs'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <ul className='list-disc list-inside text-gray-500 mt-3 tracking-widest w-full md:w-3/4 marker:text-yellow-200 marker:font-bold marker:text-2xl md:marker:text-lg'>
            <li className='text-sm md:text-xs'>Golang</li>
            <li className='text-sm md:text-xs'>Javascript</li>
            <li className='text-sm md:text-xs'>Rust</li>
            <li className='text-sm md:text-xs'>Python</li>
          </ul>
        </div>
        <div className='hidden md:w-1/2 md:flex  flex-col justify-center items-center'>
          <div className='w-3/4 h-[80%] ml-auto mr-auto flex items-center justify-center hover:scale-105'>
            <img
              src={bottomLandingImg}
              alt='image bottom landing'
              loading='lazy'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
