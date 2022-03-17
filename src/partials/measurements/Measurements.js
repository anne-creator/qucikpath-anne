import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import specimenImg from '../../images/mockPicture/specimen.jpg';
import spectrum from '../../images/mockPicture/spectrum.svg';

const Measurement = () => {
  const [clickedId, setClickedId] = useState(-1);
  const [selectedMeasurement, setSelectedMeasurement] = useState([]);
  /*eslint-disable*/
  const [measurementsData, setMeasurementsData] = useState([
    {
      id: '403250801',
      date: 'Jan 25, 2021',
      label: '1',
      note: 'measurement note',
      specimenId: '07251',
      specimenName: 'AtlanticSalmon',
      specimanPicture: 'https://i.postimg.cc/gcDfRmVr/IMG-2353.jpg',
      picture: 'https://i.postimg.cc/7PN9phvg/Spectrum1.png',
    },
    {
      id: '403250802',
      date: 'March 13, 2019',
      label: '2',
      note: 'measurement note',
      specimenId: '07251',
      specimenName: 'AtlanticSalmon',
      specimanPicture: 'https://i.postimg.cc/gcDfRmVr/IMG-2353.jpg',
      picture: 'https://i.postimg.cc/kG7c23S6/Spectrum2.png',
    },
    {
      id: '403250803',
      date: 'Sep 13, 2020',
      label: '3',
      note: 'measurement note',
      specimenId: '07251',
      specimenName: 'AtlanticSalmon',
      specimanPicture: 'https://i.postimg.cc/gcDfRmVr/IMG-2353.jpg',
      picture: 'https://i.postimg.cc/1XMK6C0W/Spectrum3.png',
    },
  ]);
  const pictureRef = useRef();
  const [imgClickable, setImgClickable] = useState(false);
  const [openpopWindow, setOpenPopWindow] = useState(false);
  const createNewMeasurement = useRef(null);

  useEffect(() => {
    const item = measurementsData.filter((item) => item.id === clickedId);
    setSelectedMeasurement(item);
  }, [clickedId, measurementsData]);

  const handleMeasurementClick = () => {
    setImgClickable(true);
    const message = document.createElement('div');
    message.innerHTML = 'Please select New Measurement Point on specimen sample';
    message.className =
      'message absolute bottom-0 left-[50%] translate-x-[-50%] px-4 py-1 bg-orange-500 text-white text-base font-semibold';
    pictureRef.current.appendChild(message);
  };

  const handleImgCLick = () => {
    if (imgClickable) {
      setOpenPopWindow(!openpopWindow);
    }
  };

  const handleDate = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const result = `${month} ${date.getDate()}, ${date.getFullYear()}`;
    return result;
  };
  return (
    <div className="py-8 px-6 bg-white shadow-lg rounded-sm mb-8 mx-8 rounded">
      {/* NOTE:popup window */}
      <Transition.Root show={openpopWindow} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={createNewMeasurement}
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
                        New Measurement
                      </Dialog.Title>
                      {/* NOTE: row1 */}
                      <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
                        <div className="sm:w-1/2">
                          {/* ID */}
                          <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                              Measurement ID <span className="text-red-500">*</span>
                            </label>
                            <div className="text-gray-900">
                              {Math.floor(Math.random() * 999999998) + 1}
                            </div>
                          </div>
                        </div>
                        {/* Which Specimen */}
                        <div className="sm:w-1/2">
                          <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                            For Specimen <span className="text-red-500">*</span>
                          </label>
                          <div className="text-gray-900">{measurementsData[0]?.specimenName}</div>
                        </div>
                      </div>

                      {/* NOTE: row2 */}
                      <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
                        {/* data */}
                        <div className="sm:w-1/2">
                          <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                            Date created <span className="text-red-500">*</span>
                          </label>
                          <div className="text-gray-900">{handleDate()}</div>
                        </div>
                        {/* Label */}
                        <div className="sm:w-1/2">
                          <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                            Label <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="mandatory"
                            className="form-input w-full"
                            type="text"
                            required
                          />
                        </div>
                      </div>

                      {/* NOTE: row3 */}
                      <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
                        {/* Note */}
                        <div className="w-full">
                          <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                            Note <span className="text-red-500">*</span>
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
                    onClick={() => {
                      setOpenPopWindow(false);
                      const message = pictureRef.current.querySelector('div');
                      pictureRef.current.removeChild(message);
                      setImgClickable(false);
                      console.log(imgClickable);
                    }}
                    ref={createNewMeasurement}
                  >
                    Create New Specimen
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpenPopWindow(false);
                      const message = pictureRef.current.querySelector('div');
                      pictureRef.current.removeChild(message);
                      setImgClickable(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <section>
        {/* NOTE:  measurement title */}
        <h2 className="text-xl leading-snug text-gray-800 font-bold mb-6 text-center">
          Measurements
        </h2>
        {/* NOTE: measurements picture */}
        <div
          ref={pictureRef}
          className={`px-2 my-6 pt-4 pb-8 sm:px-4 lg:px-8 w-full mx-auto flex justify-center max-h-[60vh] ${
            imgClickable ? 'cursor-pointer ring-4 ring-offset-2 ring-orange-500 relative' : ''
          }`}
        >
          <img
            className="w-100 h-100 object-scale-down"
            onClick={handleImgCLick}
            src={specimenImg}
            alt="measurements"
          />
        </div>
        {/* NOTE: measurements table */}
        <table className="flex flex-col table-auto">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Measurement ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Created Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Label
                      </th>
                    </tr>
                  </thead>
                  {/* NOTE: measurement body */}
                  <tbody className="bg-white divide-y divide-gray-200">
                    {measurementsData.map((item) => (
                      <tr
                        key={item.id}
                        className={`hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:cursor-pointer  ${
                          clickedId === item.id ? 'bg-indigo-50' : 'bg-white'
                        }`}
                        onClick={(e) => {
                          setClickedId(item?.id);
                        }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{item?.id}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{item?.date}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{item?.label}</div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* NOTE: measurement detail */}
                </table>
              </div>
            </div>
          </div>
        </table>

        {/* NOTE: new measurement button */}
        <div className="flex flex-col px-6n py-4 ">
          <div className="flex self-center ">
            <button
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
              onClick={handleMeasurementClick}
            >
              New Measurement
            </button>
          </div>
        </div>
        {/* NOTE: measurement detail: info + img */}
        {clickedId > 0 && (
          <section className="py-8 flex items-center flex-col">
            <h2 className="text-xl font-normal leading-snug text-gray-800 font-bold mb-1 text-center">
              Measurement Detail
            </h2>
            <div className="px-4 sm:px-6 lg:px-8 w-full max-w-9xl mx-auto">
              <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
                <div className="sm:w-1/4">
                  <div className="block text-sm font-normal text-gray-500 mb-1 ">
                    Measurement ID
                  </div>
                  <div className="w-full text-gray-700 font-medium text-base">
                    {selectedMeasurement[0]?.id}
                  </div>
                </div>
                <div className="sm:w-1/4">
                  <div className="block text-sm font-normal text-gray-500 mb-1">Label</div>
                  <div className="w-full text-gray-800 font-medium text-base">
                    {selectedMeasurement[0]?.label}
                  </div>
                </div>
                <div className="sm:w-1/4">
                  <div className="block text-sm font-normal text-gray-500 mb-1">Created Date</div>
                  <div className="w-full text-gray-800 font-medium text-base">
                    {selectedMeasurement[0]?.date}
                  </div>
                </div>
                <div className="sm:w-1/4">
                  <div className="block text-sm font-normal text-gray-500 mb-1">For Specimen</div>
                  <div className="w-full text-gray-800 font-medium text-base">
                    {selectedMeasurement[0]?.specimenName}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 w-full max-w-9xl mx-auto">
              <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
                <div className="sm:w-full">
                  <div className="block text-sm font-normal text-gray-500 mb-1">Note</div>
                  <div className="w-full text-gray-800 font-medium text-base">
                    {selectedMeasurement[0]?.note}
                  </div>
                </div>
              </div>
            </div>

            {/* NOTE: img */}
            <div className="my-1 sm:px-0 lg:px-2 flex justify-center items-start min-h-[60vh] min-w-[80vw] max-h-[90vh]">
              <img
                className=" w-auto h-[100%] drop-shawdow-sm"
                src={spectrum}
                alt="measuremnet analyst"
              />
            </div>
          </section>
        )}
      </section>
    </div>
  );
};
export default Measurement;
