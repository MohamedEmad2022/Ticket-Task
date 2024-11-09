import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
      <h2 className="text-xl font-semibold">صيانة معدات صناعية ثقيلة</h2>
      <select className="border border-gray-300 p-2 rounded">
        <option>رقم الطلب: 08</option>
        
      </select>
    </div>
  );
};

export default Header;
