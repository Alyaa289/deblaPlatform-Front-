import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const AdminDashboard = () => (
  <MainLayout>
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-[#7c5c2b] mb-4">Admin Dashboard</h2>
      {/* TODO: Add admin controls and metrics */}
      <div className="text-[#bfa76a]">Admin dashboard content goes here.</div>
    </div>
  </MainLayout>
);

export default AdminDashboard;
