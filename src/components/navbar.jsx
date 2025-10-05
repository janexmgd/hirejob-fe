export default function Navbar() {
  return (
    <nav className='w-full h-[10vh] flex justify-center items-center'>
      <div className='text-xl italic hover:scale-110 cursor-pointer'>
        Hirejob
      </div>
      <div className='ml-auto space-x-4'>
        <button className='bg-white cursor-pointer text-purple-700 outline outline-purple-700 p-1.5 hover:scale-110'>
          Masuk
        </button>
        <button className='bg-purple-700 cursor-pointer text-white p-1.5 hover:scale-110'>
          Daftar
        </button>
      </div>
    </nav>
  );
}
