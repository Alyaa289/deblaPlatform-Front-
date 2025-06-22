import React from 'react';

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-white via-[#e6d3b3] to-[#bfa76a]">
    <header className="p-4 bg-white/80 shadow text-[#7c5c2b] font-bold text-xl">Digital Gold Platform</header>
    <main className="p-4">{children}</main>
  </div>
);

export default MainLayout;
