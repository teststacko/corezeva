import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-9 w-auto" }) => {
  return (
    <div className="flex items-center select-none group cursor-pointer">
      {/* Light Mode: Navy text */}
      <img
        src="/image1.png"
        alt="Corezeva"
        className={`${className} block dark:hidden object-contain transition-transform duration-300 group-hover:scale-105`}
      />

      {/* Dark Mode: White text */}
      <img
        src="/dark-image.png"
        alt="Corezeva"
        className={`${className} hidden dark:block object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </div>
  );
};