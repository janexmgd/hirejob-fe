import Footer from '../components/Footer.jsx';
import Navbar from '../components/navbar.jsx';
import avatr from '../assets/images/avatar.jpg';
import portoImg from '../assets/images/porto.jpg';

import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { BsGeoAlt } from 'react-icons/bs';
import { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <div className='flex flex-col min-h-screen w-full'>
      <Navbar />

      {/* Header Background */}
      <div className='bg-purple-600 h-[14vh] w-full'></div>

      {/* Main Section */}
      <div className='flex flex-col lg:flex-row min-h-screen px-6 md:px-12 lg:px-16 gap-8 -mt-[7vh]'>
        {/* Left Profile Card */}
        <div className='w-full lg:w-1/4 bg-white rounded-xl shadow-md flex flex-col pt-8 px-8 pb-6 gap-3'>
          <div className='w-32 h-32 mx-auto'>
            <img
              src={avatr}
              alt='avatar'
              className='object-cover w-full h-full rounded-full border-2 border-purple-500'
            />
          </div>
          <p className='text-xl font-semibold text-center mt-2'>
            Louis Tompson
          </p>
          <p className='text-gray-500 text-center text-sm'>Web Developer</p>

          <div className='flex items-center justify-center gap-2 text-sm text-gray-400 mt-2'>
            <BsGeoAlt className='text-lg' />
            <p>Jakarta</p>
          </div>

          <p className='text-sm text-gray-500 mt-3 leading-relaxed text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </p>

          <button className='bg-purple-600 text-white px-4 py-2 rounded-md mt-3 hover:bg-purple-700 transition'>
            Hire
          </button>

          <p className='text-sm text-gray-500 mt-4 font-semibold'>Skills</p>
          <div className='flex flex-wrap gap-2 mt-2'>
            {['PHP', 'JavaScript', 'HTML'].map((skill) => (
              <span
                key={skill}
                className='bg-yellow-400 text-white text-xs px-3 py-1 rounded-md shadow-sm'
              >
                {skill}
              </span>
            ))}
          </div>

          <div className='flex flex-col w-full mt-4 text-gray-600 space-y-2'>
            <div className='flex items-center gap-3'>
              <FaGithub className='text-lg text-gray-500' />
              <p className='text-sm font-medium'>Janexmgd</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaEnvelope className='text-lg text-gray-500' />
              <p className='text-sm font-medium'>janexmgd@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className='w-full lg:w-3/4 bg-white rounded-xl shadow-md flex flex-col pt-6 px-8 pb-6'>
          <div className='flex gap-6 mb-6 border-b pb-2'>
            <button
              className={`text-sm ${
                activeTab === 'portfolio'
                  ? 'font-semibold text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-400 hover:text-purple-600'
              }`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portofolio
            </button>
            <button
              className={`text-sm ${
                activeTab === 'experience'
                  ? 'font-semibold text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-purple-600'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              Pengalaman Kerja
            </button>
          </div>

          <div>
            {activeTab === 'portfolio' && (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className='group border border-purple-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-white'
                  >
                    <img
                      src={portoImg}
                      alt={`Project ${i}`}
                      className='w-full h-40 object-cover group-hover:opacity-90 transition-opacity duration-300'
                    />
                    <div className='p-4'>
                      <p className='text-sm font-semibold text-gray-800'>
                        Project Name {i}
                      </p>
                      <p className='text-xs text-gray-500 mt-1'>
                        Website Development • React & Tailwind
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'experience' && (
              <div className='space-y-6'>
                {[
                  {
                    role: 'Frontend Developer',
                    company: 'TechNova Studio',
                    period: 'Jan 2023 - Sekarang',
                    description:
                      'Mengembangkan antarmuka pengguna menggunakan React dan Tailwind CSS. Bertanggung jawab atas performa UI, optimasi komponen, dan kolaborasi dengan tim backend.',
                  },
                  {
                    role: 'Web Developer Intern',
                    company: 'Digital Creative ID',
                    period: 'Jun 2022 - Des 2022',
                    description:
                      'Membantu pengembangan website e-commerce menggunakan Next.js. Membuat komponen reusable dan memperbaiki bug UI.',
                  },
                  {
                    role: 'Freelance UI Designer',
                    company: 'Self Employed',
                    period: '2021 - 2022',
                    description:
                      'Merancang layout website dan aplikasi mobile menggunakan Figma serta memastikan desain konsisten dengan brand guideline klien.',
                  },
                ].map((exp, index) => (
                  <div
                    key={index}
                    className='relative pl-6 border-l-2 border-purple-500 bg-gray-50 p-4 shadow-sm rounded-sm'
                  >
                    <h3 className='text-lg font-semibold text-gray-800'>
                      {exp.role}
                    </h3>
                    <p className='text-sm text-purple-600 font-medium'>
                      {exp.company}
                    </p>
                    <p className='text-xs text-gray-400 mb-2'>{exp.period}</p>
                    <p className='text-sm text-gray-600 leading-relaxed'>
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
