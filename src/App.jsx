import React from 'react';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import FloatingCollage from './components/FloatingCollage';
import './index.css';

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#fcfbf9] flex flex-col items-center justify-center border-[12px] border-[#6b7280]/20 box-border rounded-[32px] sm:m-2 sm:h-[calc(100vh-16px)] sm:w-[calc(100vw-16px)]">
      
      <Header />
      <FloatingCollage />
      <HeroContent />

    </div>
  );
}

export default App;