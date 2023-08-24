import React from 'react';
import jsonData from '../data/excel.json';

const DisplayData = ({ selectedAgent, selectedDay }) => {
  // Filter the JSON data based on the selected agent and day
  const filteredData = jsonData.filter(
    (item) => item.Agent === selectedAgent && item['COLLECTION Day'] === selectedDay
  );
  const fullDayNames = {
    MON: 'Monday',
    TUES: 'Tuesday',
    WED: 'Wednesday',
    THUR: 'Thursday',
    FRI: 'Friday',
    SAT: 'Saturday',
    SUN: 'Sunday',
  };
  if (filteredData.length === 0) {
    return <p>No data available for the selected agent and day.</p>;
  }

  // Convert the selectedDay to its full name using the fullDayNames object
  const fullDay = fullDayNames[selectedDay] || selectedDay;

  return (
    <div className='overflow-x-auto'>
      <h2 className='text-xl font-semibold mb-2'>
        Data for {selectedAgent} on {fullDay}:
      </h2>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Customer
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              July&apos;23
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Jun&apos;23
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              May&apos;23
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Apr&apos;23
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Jan-Mar
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Apr-Dec
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Old
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              TOTAL
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {filteredData.map((item) => (
            <tr key={item['OPPL Code']}>
              <td className='px-6 py-4 whitespace-nowrap'>{item.CUSTOMER}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item['July\'23']}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item['Jun\'23']}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item['May\'23']}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item['Apr\'23']}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item['Jan-Mar']}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item['Apr-Dec']}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item.Old}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item.TOTAL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
