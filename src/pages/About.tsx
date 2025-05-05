import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">About MediCare</h1>
      <p className="text-gray-700 mb-4">
        MediCare is a leading healthcare provider committed to delivering exceptional medical services 
        with compassion and expertise. Our state-of-the-art facility is equipped with the latest 
        medical technology and staffed by highly qualified healthcare professionals.
      </p>
      <p className="text-gray-700 mb-4">
        With over 20 years of experience in healthcare, we have built a reputation for excellence 
        in patient care, innovative treatments, and personalized medical attention.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Values</h2>
        <ul className="space-y-3 text-gray-700">
          <li>✓ Patient-centered care</li>
          <li>✓ Medical excellence</li>
          <li>✓ Compassionate service</li>
          <li>✓ Continuous innovation</li>
        </ul>
      </div>
    </div>
  );
};

export default About;