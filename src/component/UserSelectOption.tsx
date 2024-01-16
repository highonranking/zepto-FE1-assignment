import React from 'react';
import { UserOption } from '../dataTypes/userTypes';

const UserSelectOption: React.FC<{ data: UserOption; innerProps: any }> = ({ data, innerProps }) => {
  return (
    <div {...innerProps} className="flex items-center space-x-4 py-2 px-4 hover:bg-slate-200">
      <img src={data.image} alt={data.name} className="w-12 h-12 rounded-full" />
      <div className='flex flex-row items-center justify-center space-x-2'>
        <p className="text-lg font-semibold">{data.name}</p>
        {data.email && <p className="text-sm text-gray-500">{data.email}</p>}
      </div>
    </div>
  );
};

export default UserSelectOption;
