import React from 'react';
import UserForm from './userForm';




const Sidebar: React.FC = () => {
  
  return (
    <div className="w-1/5 bg-gray-100 p-4">
      <h2>اضافة مستخدم</h2>

      <UserForm/>
    </div>
  );
};

export default Sidebar;

