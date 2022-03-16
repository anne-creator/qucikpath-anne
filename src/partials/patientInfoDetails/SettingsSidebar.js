import React, { useState } from 'react';

const SettingsSidebar = ({ changeTab }) => {
  const [barTab, setBarTab] = useState('basicInfo');
  return (
    <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-gray-200 min-w-60 md:space-y-3">
      {/* Group 1 */}
      <div>
        <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
          <li key="basicInfo" className="mr-0.5 md:mr-0 md:mb-0.5 cursor-pointer rounded ">
            <div
              className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap text-gray-700  hover:text-indigo-500 hover:bg-indigo-50
              ${barTab === 'basicInfo' ? 'bg-indigo-50' : ''}`}
              onClick={() => {
                changeTab('basicInfo');
                setBarTab('basicInfo');
              }}
            >
              <span className={`text-sm font-sm`}>Basic Info</span>
            </div>
          </li>
          <li>
            <div
              className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap text-gray-700  hover:text-indigo-500 hover:bg-indigo-50
              ${barTab === 'additionalInfo' ? 'bg-indigo-50' : ''}`}
              onClick={() => {
                changeTab('additionalInfo');
                setBarTab('additionalInfo');
              }}
            >
              <span className={`text-sm font-sm`}>AdditionalInfo</span>
            </div>
          </li>
          <li>
            <div
              className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap text-gray-700  hover:text-indigo-500 hover:bg-indigo-50
              ${barTab === 'refferal' ? 'bg-indigo-50' : ''}`}
              onClick={() => {
                changeTab('refferal');
                setBarTab('refferal');
              }}
            >
              <span className={`text-sm font-sm`}>Refferal</span>
            </div>
          </li>
          <li>
            <div
              className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap text-gray-700  hover:text-indigo-500 hover:bg-indigo-50
              ${barTab === 'addmission' ? 'bg-indigo-50' : ''}`}
              onClick={() => {
                changeTab('addmission');
                setBarTab('addmission');
              }}
            >
              <span className={`text-sm font-sm`}>Addmission</span>
            </div>
          </li>
          <li>
            <div
              className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap text-gray-700  hover:text-indigo-500 hover:bg-indigo-50
              ${barTab === 'tumor' ? 'bg-indigo-50' : ''}`}
              onClick={() => {
                changeTab('tumor');
                setBarTab('tumor');
              }}
            >
              <span className={`text-sm font-sm`}>Tumor</span>
            </div>
          </li>
          <li>
            <div
              className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap text-gray-700  hover:text-indigo-500 hover:bg-indigo-50
              ${barTab === 'treatment' ? 'bg-indigo-50' : ''}`}
              onClick={() => {
                changeTab('treatment');
                setBarTab('treatment');
              }}
            >
              <span className={`text-sm font-sm`}>Treatment</span>
            </div>
          </li>
          <li>
            <div
              className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap text-gray-700  hover:text-indigo-500 hover:bg-indigo-50
              ${barTab === 'notes' ? 'bg-indigo-50' : ''}`}
              onClick={() => {
                changeTab('notes');
                setBarTab('notes');
              }}
            >
              <span className={`text-sm font-sm`}>Notes</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsSidebar;
