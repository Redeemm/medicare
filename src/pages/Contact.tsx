import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Contact Information</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Address:</strong><br />
              123 Healthcare Avenue<br />
              Medical District<br />
              City, State 12345
            </p>
            <p>
              <strong>Phone:</strong><br />
              (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong><br />
              info@medicare-hospital.com
            </p>
            <p>
              <strong>Hours:</strong><br />
              Monday - Friday: 8:00 AM - 8:00 PM<br />
              Saturday: 9:00 AM - 5:00 PM<br />
              Sunday: Emergency Services Only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;