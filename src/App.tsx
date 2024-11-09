
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MessageList from './components/messages';
import ReplayBox from './components/replay';


const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 p-4">
       <Header />
       <MessageList/>
       <ReplayBox />
      </div>
    </div>
  );
};

export default App;

