import React from 'react';
// import Image from '../../images/user-40-01.jpg';

function PatientHeader() {
  return (
    <div>
      {/* Page header */}
      <div className="pb-4 flex items-end justify-between rounded px-2.5 py-4">
        {/* Patient Name + img */}
        <div className="text-2xl md:text-3xl text-gray-800 font-bold">
          <h2 className="text-3xl text-gray-800 font-bold">Patricia Semklo</h2>
        </div>
      </div>
    </div>
  );
}

export default PatientHeader;
