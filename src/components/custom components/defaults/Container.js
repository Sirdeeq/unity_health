import React from 'react';

export default function Container({ children }) {
  return (
    <div className="bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-12">
          {children}
        </div>
      </div>
    </div>
  );
}
