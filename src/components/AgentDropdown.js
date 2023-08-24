import React from 'react';
import Select from 'react-select';
import jsonData from '../data/excel.json';

const AgentDropdown = ({ selectedAgent, onAgentChange }) => {
  const agentOptions = [...new Set(jsonData.map(item => item.Agent))].map(agent => ({
    value: agent,
    label: agent,
  }));

  return (
    <div className="mb-4 text-gray-700">
      <label htmlFor="agentDropdown" className="block text-gray-200">
        Select an Agent:
      </label>
      <Select
        className='placeholder:text-gray-300'
        id="agentDropdown"
        value={{ value: selectedAgent, label: selectedAgent }}
        onChange={option => onAgentChange(option.value)}
        options={agentOptions}
        isSearchable={true} // Enables search functionality
        placeholder="Select an Agent"
      />
    </div>
  );
};

export default AgentDropdown;
