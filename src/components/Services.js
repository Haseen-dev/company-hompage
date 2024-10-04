import React from 'react';

function Services() {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded">
            <h3 className="text-xl font-bold">Service 1</h3>
            <p>We provide high-quality service 1 description here.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded">
            <h3 className="text-xl font-bold">Service 2</h3>
            <p>We provide high-quality service 2 description here.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded">
            <h3 className="text-xl font-bold">Service 3</h3>
            <p>We provide high-quality service 3 description here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
