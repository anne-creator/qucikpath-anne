import React from 'react';

function AdditionalInfo() {
  return (
    <div className="grow">
      {/* Panel body */}
      <div className="px-6 space-y-6 pb-10">
        {/* additional Info */}
        <section className="py-8">
          <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1">Additional Info</h2>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">Sex</div>
              <div className="w-full text-gray-800 font-medium text-base">Male</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">Height </div>
              <div className="w-full text-gray-800 font-medium text-base">175cm</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">Weight</div>
              <div className="w-full text-gray-800 font-medium text-base">82KG</div>
            </div>
          </div>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">Date of birth</div>
              <div className="w-full text-gray-800 font-medium text-base">April 4, 1972</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">Date of Diagnosis</div>
              <div className="w-full text-gray-800 font-medium text-base">Sep 18, 2019</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1 ">Primary Physician</div>
              <div className="w-full text-gray-700 font-medium text-base	">Dr. Wu</div>
            </div>
          </div>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <div className="sm:w-1/3">
              <div className="block text-sm font-medium mb-1 min-w-fit ">Email</div>
              <div className="w-full text-gray-800 font-medium text-sm">patientemail@gmail.com</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-medium mb-1">Class of Cases</div>
              <div className="w-full text-gray-800 font-medium text-base">A</div>
            </div>
            <div className="sm:w-1/3"></div>
          </div>
        </section>
        <div className="flex flex-col px-6 ">
          <div className="flex self-end">
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
