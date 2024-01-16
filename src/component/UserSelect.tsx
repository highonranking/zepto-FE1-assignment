import React from 'react';
import Select, { ActionMeta, MultiValue, SingleValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import userOption, { UserOption } from '../dataTypes/userTypes';
import UserSelectOption from './UserSelectOption';

const animatedComponents = makeAnimated();

interface UserSelectProps {
  defaultValue: UserOption[];
  isMulti?: boolean;
  onChange: (selectedOptions: UserOption[] | null) => void;
}

const UserSelect: React.FC<UserSelectProps> = ({ defaultValue, isMulti = false, onChange }) => {
  return (
    <Select
      closeMenuOnSelect={false}
      placeholder="Add new users..."
      components={{
        ...animatedComponents,
        Option: UserSelectOption,
     
        MultiValueLabel: ({ data, innerProps }) => (
          
          <div className="flex items-center space-x-2  p-2">
            <img src={data.image} alt={data.name} className="w-6 h-6 rounded-full" />
            <span className="font-semibold">{data.name}</span>
          </div>
          
        ),
      }}
      isMulti={isMulti}
      options={userOption}
      defaultValue={defaultValue}
      onChange={(newValue: MultiValue<UserOption> | SingleValue<UserOption>, actionMeta: ActionMeta<UserOption>) => {
        if (isMulti) {
          onChange(newValue as UserOption[] | null);
        } else {
          onChange(newValue ? [newValue as UserOption] : null);
        }
      }}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id.toString()}
      isOptionSelected={(option) => !!defaultValue.find((selected) => selected.id === option.id)}
      styles={{
        control: (provided, state) => ({
          ...provided,
          border: 'none',
          borderBottom: '1px solid #ccc',
          boxShadow: 'none',
          '&:hover': {
            borderBottom: '2px solid blue',
          
          },
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          display: 'none',
        }),
        indicatorSeparator: (provided, state) => ({
          ...provided,
          display: 'none',
        }),
        menu: (provided, state) => ({
          ...provided,
          marginTop: '2px',
          borderRadius: '0',
         width:'auto',
        marginLeft:'auto'
        }),
        multiValue:(provided, state) => ({
            ...provided,
            borderRadius:'9999px',
            paddingLeft: '4px',
            paddingRight: '4px',
            marginRight:'14px'

        })
      }}
    />
  );
};

export default UserSelect;
