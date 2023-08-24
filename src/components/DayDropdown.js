import React from 'react';
import Select from 'react-select';
import jsonData from '../data/excel.json';

const DayDropdown = ({ selectedDay, onDayChange }) => {
  const dayOptions = [
    { value: 'MON', label: 'Monday' },
    { value: 'TUES', label: 'Tuesday' },
    { value: 'WED', label: 'Wednesday' },
    { value: 'THUR', label: 'Thursday' },
    { value: 'FRI', label: 'Friday' },
    { value: 'SAT', label: 'Saturday' },
    { value: 'SUN', label: 'Sunday' },
  ];

  return (
    <div className="mb-4 text-gray-700">
      <label htmlFor="dayDropdown" className="block text-gray-200">
        Select a Collection Day:
      </label>
      <Select
        id="dayDropdown"
        value={dayOptions.find(option => option.value === selectedDay)} // Find the selected day option by value
        onChange={option => onDayChange(option.value)}
        options={dayOptions}
        isSearchable={true} // Enables search functionality
        placeholder="Select a Collection Day"
      />
    </div>
  );
};

export default DayDropdown;
