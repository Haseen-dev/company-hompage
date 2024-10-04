import React from 'react';

function LandingImage() {
  return (
    <div className="relative">
      <img
        src="https://via.placeholder.com/1500x500"
        alt="Landing"
        className="w-full h-96 object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 p-4 rounded">
          Welcome to Our Company
        </h1>
      </div>
    </div>
  );
}

export default LandingImage;
