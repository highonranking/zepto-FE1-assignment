import React from 'react';
import logo from '../images/logo.png'


const Header: React.FC = () => {
  return (
    <header className ="text-white flex flex-col p-4 items-center bg-[#3C006B]">
      <div className=" mx-auto flex items-center">
        <img src={logo} alt="Logo" className="w-24 rounded-lg h-24 mr-2" />
      </div>
    </header>
  );
};

export default Header;
