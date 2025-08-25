import React from 'react';

const BackgroundImage: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-blue-900 to-blue-800"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default BackgroundImage;