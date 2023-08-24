import { useState } from 'react';
import AgentDropdown from '../components/AgentDropdown';
import DayDropdown from '../components/DayDropdown';
import DisplayData from '../components/DisplayData';  
import Link from 'next/link'
const Home = () => {
  const [selectedAgent, setSelectedAgent] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  return (
    <div>
      <h1 className='text-2xl'>OP Pharma Agent Data</h1>
      <AgentDropdown selectedAgent={selectedAgent} onAgentChange={setSelectedAgent} />
      <DayDropdown selectedDay={selectedDay} onDayChange={setSelectedDay} />
      {(selectedAgent && selectedDay) && (
        <DisplayData selectedAgent={selectedAgent} selectedDay={selectedDay} />
      )}
      <div><Link href="https://github.com/codes-guide-youtube/collection-tracker/blob/main/README.md" target='_blank'>How does this work?</Link></div>
    </div>
  );
};

export default Home;
