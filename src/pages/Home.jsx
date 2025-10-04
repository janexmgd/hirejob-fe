import topLandingImg from '../assets/images/landing_page_top.png';
const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='sectionOne flex w-full h-screen '>
        <div className='w-1/2 flex flex-col justify-center'>
          <p className='text-3xl tracking-wider capitalize w-3/4'>
            talenta terbaik negeri untuk perubahan revolusi 4.0
          </p>
          <div className='text-gray-500 mt-3 tracking-widest w-3/4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </div>
          <button className='bg-purple-700 text-white p-2 w-1/2 max-w-64 mt-7'>
            Mulai Dari sekarang
          </button>
        </div>
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <div className='w-3/4 h-[80%] ml-auto mr-auto flex items-center justify-center'>
            <img
              src={topLandingImg}
              alt=''
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
