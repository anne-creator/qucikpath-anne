import React, { useState } from 'react';
import Header from '../partials/Header';
import SettingsSidebar from '../partials/patientInfoDetails/SettingsSidebar';
import BasicInfo from '../partials/patientInfoDetails/BasicInfo';
import AdditionalInfo from '../partials/patientInfoDetails/AdditionalInfo';
import PatientHeader from '../partials/patients/PatientHeader';
import SpecimenTable from '../partials/specimen/SpecimenTable';

function PatientDetail() {
  const [tab, setTab] = useState('basicInfo');
  const changeTab = (tab) => setTab(tab);
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden rounded">
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 w-full max-w-9xl mx-auto">
            {/* NOTE: HEADER */}
            <PatientHeader />
            {/* NOTE: Patient Info */}
            <div className="bg-white shadow-lg rounded-sm mb-8 rounded">
              <header className="px-5 pt-6 flex items-center">
                <h2 className="font-semibold text-lg text-gray-400">Patient Info</h2>
              </header>
              <div className="flex flex-col md:flex-row md:-mr-px">
                <SettingsSidebar changeTab={changeTab} />
                {tab === 'basicInfo' ? <BasicInfo /> : null}
                {tab === 'additionalInfo' ? <AdditionalInfo /> : null}
              </div>
            </div>
            {/* NOTE: specimen table */}
            <div className="bg-white shadow-lg rounded-sm mb-8 rounded ">
              <header className="px-5 pt-6 flex items-center">
                <h2 className="font-semibold text-lg text-gray-400">Patient Info</h2>
              </header>
              <div className="flex justify-center flex-col md:flex-row md:-mr-px py-6">
                <SpecimenTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default PatientDetail;
