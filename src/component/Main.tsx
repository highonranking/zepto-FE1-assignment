
import React, { useState } from 'react';
import UserSelect from './UserSelect';
import { UserOption } from '../dataTypes/userTypes';

const Main: React.FC = () => {
    const [selectedUsers, setSelectedUsers] = useState<UserOption[]>([]);

    const handleChange = (selectedOptions: UserOption[] | null) => {
      setSelectedUsers(selectedOptions || []);
    };
  

  return (
    <div className='container mt-8 p-4 items-center md:px-44 '>      
    <div className=" items-center flex flex-col w-full mb-14">
      <h1 className="text-2xl font-bold mb-4 text-blue-600 items-center mx-a">Pick Users</h1>
    </div>
    <UserSelect defaultValue={selectedUsers} isMulti onChange={handleChange} />

    </div>
  );
};

export default Main;
