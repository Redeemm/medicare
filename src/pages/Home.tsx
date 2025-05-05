import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Welcome to MediCare</h1>
      <p className="text-gray-700 mb-4">
        Providing exceptional healthcare services with a focus on patient comfort and wellbeing. 
        Our dedicated team of medical professionals is committed to delivering the highest standard of care.
      </p>
      <p className="text-gray-700">
        Explore our services, learn about our facility, or get in touch with our team using the navigation menu above.
      </p>
    </div>
  );
};

export default Home;