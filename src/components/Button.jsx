import React from 'react';

const Button = ({ children, ...props }) => (
  <button className="bg-gradient-to-r from-[#bfa76a] to-[#7c5c2b] text-white font-semibold py-2 px-4 rounded shadow hover:from-[#e6d3b3] hover:to-[#bfa76a] transition" {...props}>
    {children}
  </button>
);

export default Button;
