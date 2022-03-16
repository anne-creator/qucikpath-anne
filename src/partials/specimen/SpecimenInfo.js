import React, { useState } from 'react';
import report from '../../images/mockPicture/patientReport.png';

const SpecimenInfo = () => {
  const [patientReport, setPatientReport] = useState('');

  return (
    <div className="py-8 px-6 bg-white shadow-lg rounded-sm mb-8 mx-8 rounded">
      <section>
        {/* NOTE: title */}
        <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1 text-center">
          Specimen Info
        </h2>
        {/* NOTE: first row: name; address; city */}
        <div className="px-4 sm:px-6 lg:px-8 w-full max-w-9xl mx-auto">
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1 ">Name</div>
              <div className="w-full text-gray-700 font-medium text-base">AtlanticSalmon</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">id</div>
              <div className="w-full text-gray-800 font-medium text-base">07251</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">Created Date</div>
              <div className="w-full text-gray-800 font-medium text-base">2019-03-29</div>
            </div>
          </div>
        </div>

        {/* 2nd row: note */}
        <div className="px-4 sm:px-6 lg:px-8 w-full max-w-9xl mx-auto">
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1 ">Notes</div>
              <div className="w-full text-gray-700 font-medium text-base">
                Notes about this specimen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTE: button */}
      <div className="flex mt-6 justify-end">
        <div className="flex flex-col px-4">
          <div className="flex self-end">
            <button className="btn text-indigo-500 border-indigo-500 hover:bg-indigo-600 hover:text-white">
              Edit
            </button>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="flex self-end">
            <button
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
              onClick={() => setPatientReport(!patientReport)}
            >
              Generate Report
            </button>
          </div>
        </div>
      </div>
      {patientReport ? (
        <div className=" py-2 flex justify-start max-h-[90vh] min-h-[60vh] mt-4">
          <img
            className="object-scale-down w-[100%] h-[100%]"
            key={report}
            src={report}
            alt="specimen"
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default SpecimenInfo;
