import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CompanyName</h1>
        <ul className="flex space-x-4">
          <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          <li><a href="#blogs" className="hover:text-gray-300">Blogs</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
