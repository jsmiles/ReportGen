import React from 'react';
import salesData from '../SALES_DATA.json';

function Table() {
  const DisplayData = salesData.map((el) => {
    return (
      <tr className='bg-white border-b'>
        <td className='px-6 py-4'>{el.ProductName}</td>
        <td className='px-6 py-4'>{el.Colour}</td>
        <td className='px-6 py-4'>{el.Category}</td>
        <td className='px-6 py-4'>{el.Price}</td>
      </tr>
    );
  });
  return (
    <div className='flex flex-col items-center justify-center mt-12'>
      <table className='w-3/4 text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-200'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Product Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Colour
            </th>
            <th scope='col' className='px-6 py-3'>
              Category
            </th>
            <th scope='col' className='px-6 py-3'>
              Price £
            </th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Table;
