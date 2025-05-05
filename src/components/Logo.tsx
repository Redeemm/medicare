import React from 'react';
import { Heart } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Heart className="h-6 w-6 text-teal-600" strokeWidth={2.5} />
      <span className="text-xl font-bold text-blue-900">MediCare</span>
    </div>
  );
};

export default Logo;