import React from 'react';

function Header() {
  return (
    <section className='bg-white'>
      <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
        <nav className='flex flex-wrap justify-center -mx-5 -my-2'>
          <div className='px-5 py-2 text-5xl leading-6 text-gray-900'>
            ReportGen
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
