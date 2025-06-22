import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    phone: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add register logic
    alert("Register submitted! (Demo only)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#e6d3b3] to-[#bfa76a]">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 shadow-lg rounded-xl px-8 py-10 w-full max-w-md border border-[#bfa76a]"
      >
        <h2 className="text-2xl font-bold mb-6 text-[#7c5c2b] text-center">Register</h2>
        <div className="mb-4">
          <label className="block text-[#7c5c2b] mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border border-[#bfa76a] rounded focus:outline-none focus:ring-2 focus:ring-[#bfa76a] bg-white"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#7c5c2b] mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-4 py-2 border border-[#bfa76a] rounded focus:outline-none focus:ring-2 focus:ring-[#bfa76a] bg-white"
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#7c5c2b] mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-4 py-2 border border-[#bfa76a] rounded focus:outline-none focus:ring-2 focus:ring-[#bfa76a] bg-white"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#7c5c2b] mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-full px-4 py-2 border border-[#bfa76a] rounded focus:outline-none focus:ring-2 focus:ring-[#bfa76a] bg-white"
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#7c5c2b] mb-2" htmlFor="role">
            Role
          </label>
          <select
            className="w-full px-4 py-2 border border-[#bfa76a] rounded focus:outline-none focus:ring-2 focus:ring-[#bfa76a] bg-white"
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="customer">Customer</option>
            <option value="shop_owner">Shop Owner</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#bfa76a] to-[#7c5c2b] text-white font-semibold py-2 rounded shadow hover:from-[#e6d3b3] hover:to-[#bfa76a] transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
