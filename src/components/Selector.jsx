import React, { Fragment } from 'react';

function Selector() {
  return (
    <Fragment>
      <div className='flex items-center justify-center text-3xl leading-6 text-gray-500 mt-12 mb-8'>
        <p className='m-12'>Generate reports on demand</p>
        <button
          onClick={() => console.log('Hello')}
          type='button'
          className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-400 rounded-lg border border-gray-200 hover:bg-gray-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
        >
          Generate PDF
        </button>
      </div>
    </Fragment>
  );
}

export default Selector;
