import React, { Fragment, useRef, useState } from 'react';
import SpecimenTableItem from './SpecimenTableItem';
import SpecimenData from '../../mockData/SpecimenData';
import { Dialog, Transition } from '@headlessui/react';

function Specimen({ selectedItems }) {
  const [openpopWindow, setOpenPopWindow] = useState(false);
  const createNewSpecimen = useRef(null);

  return (
    <div className="w-[90vw] bg-white shadow-lg rounded-sm border border-gray-200 relative">
      {/* NOTE: popup window */}
      <Transition.Root show={openpopWindow} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={createNewSpecimen}
          onClose={setOpenPopWindow}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        New Specimen
                      </Dialog.Title>
                      <div className="mt-2">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                            Specimen Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="mandatory"
                            className="form-input w-full"
                            type="text"
                            required
                          />
                        </div>
                        {/* Note */}
                        <div className="w-full">
                          <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                            Specimen Note <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="mandatory"
                            className="form-textarea w-full focus:border-gray-300"
                            type="text"
                            required
                            placeholder="Leave note here..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Popup Window Buttons */}
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base btn bg-indigo-500 hover:bg-indigo-600 text-white my-6font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpenPopWindow(false)}
                    ref={createNewSpecimen}
                  >
                    Create New Specimen
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpenPopWindow(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div>
        {/* NOTE:Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full divide-y divide-gray-200">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-500 bg-gray-50 border-t border-gray-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="text-left">Specimen Name</div>
                </th>

                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="text-left">Specimen ID</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="text-left">Created Date</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="cursor-pointer text-sm divide-y divide-gray-200">
              {SpecimenData.map((specimen) => {
                return (
                  <SpecimenTableItem
                    key={specimen.id}
                    id={specimen.id}
                    name={specimen.name}
                    createdDate={specimen.createdDate}
                    picture={specimen.picture}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center">
          <button
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white my-6"
            onClick={() => setOpenPopWindow(true)}
          >
            New Specimen
          </button>
        </div>
      </div>
    </div>
  );
}

export default Specimen;
