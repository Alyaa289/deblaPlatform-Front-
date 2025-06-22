import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const Wishlist = () => (
  <MainLayout>
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-[#7c5c2b] mb-4">My Wishlist</h2>
      {/* TODO: Render wishlist items here */}
      <div className="text-[#bfa76a]">Your wishlist is empty.</div>
    </div>
  </MainLayout>
);

export default Wishlist;
