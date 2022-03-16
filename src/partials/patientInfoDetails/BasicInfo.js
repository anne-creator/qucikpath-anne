import React from 'react';

function BasicInfo() {
  return (
    <div className="grow">
      {/* Panel body */}
      <div className="px-6 space-y-6 pb-10">
        {/* Primary Address */}
        <section className="py-8">
          <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1">Primary Address</h2>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1 ">Name</div>
              <div className="w-full text-gray-700 font-medium text-base">Patricia Semklo</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">Address</div>
              <div className="w-full text-gray-800 font-medium text-base">39 Capulet Lane</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">City</div>
              <div className="w-full text-gray-800 font-medium text-base">Kingston</div>
            </div>
          </div>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1 min-w-fit ">
                Province
              </div>
              <div className="w-full text-gray-800 font-medium text-base">ON</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">Contry</div>
              <div className="w-full text-gray-800 font-medium text-base">Canada</div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-normal text-gray-500 mb-1">Postal Code</div>
              <div className="w-full text-gray-800 font-medium text-base">N2P 5T3</div>
            </div>
          </div>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
            <div className="sm:w-1/3">
              <div className="block text-sm font-medium mb-1 min-w-fit ">Email</div>
              <div className="w-full text-gray-800 font-medium text-base">
                patientemail@gmail.com
              </div>
            </div>
            <div className="sm:w-1/3">
              <div className="block text-sm font-medium mb-1">Phone</div>
              <div className="w-full text-gray-800 font-medium text-base">(226)3848243</div>
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

export default BasicInfo;
