import { useState } from 'react';
import AgentDropdown from '../components/AgentDropdown';
import DayDropdown from '../components/DayDropdown';
import DisplayData from '../components/DisplayData';  

const Home = () => {
  const [selectedAgent, setSelectedAgent] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  return (
    <div>
      <h1>Agent Data Dashboard</h1>
      <AgentDropdown selectedAgent={selectedAgent} onAgentChange={setSelectedAgent} />
      <DayDropdown selectedDay={selectedDay} onDayChange={setSelectedDay} />
      {(selectedAgent && selectedDay) && (
        <DisplayData selectedAgent={selectedAgent} selectedDay={selectedDay} />
      )}
    </div>
  );
};

export default Home;
