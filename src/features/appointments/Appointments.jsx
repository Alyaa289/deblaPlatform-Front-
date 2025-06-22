import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const Appointments = () => (
  <MainLayout>
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-[#7c5c2b] mb-4">Appointments</h2>
      {/* TODO: Render appointments here */}
      <div className="text-[#bfa76a]">No appointments scheduled.</div>
    </div>
  </MainLayout>
);

export default Appointments;
