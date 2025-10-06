import imgS from '../assets/images/landing_page_top.png';
export default function Decoration() {
  return (
    <div className='hidden md:block w-1/2 p-10 h-screen sticky top-0'>
      <div className='w-full h-full relative'>
        <img
          src={imgS}
          alt=''
          className='w-full h-full object-cover z-0 relative'
        />
        <div className='absolute inset-0 bg-gray-300 opacity-50 z-10'></div>
        <div className='absolute inset-0 z-20 flex ps-16 items-center'>
          <p className='text-3xl font-bold text-black w-3/4 '>
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </p>
        </div>
      </div>
    </div>
  );
}
