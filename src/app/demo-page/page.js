'use client'
import { Pencil } from 'lucide-react';
import React, { useState } from 'react';


const EditableDeviceName = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [deviceName, setDeviceName] = useState('Device 2');

  const handleNameClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    setDeviceName(e.target.value);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="flex flex-row items-center cursor-pointer mb-1 gap-2">
      {isEditing ? (
        <form onSubmit={handleNameSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={deviceName}
            onChange={handleNameChange}
            className="font-bold text-lg p-1 border border-gray-300 rounded"
          />
          <button type="submit" className="text-xs font-light w-5 h-5">
            Save
          </button>
        </form>
      ) : (
        <div onClick={handleNameClick} className="flex items-center gap-2">
          <p className="font-bold text-lg m-0">{deviceName}</p>
          <Pencil className="text-xs font-light w-5 h-5" />
        </div>
      )}
    </div>
  );
};

export default EditableDeviceName;
