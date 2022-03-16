import React, { useState } from 'react';

import Header from '../partials/Header';
import SettingsSidebar from '../partials/patientInfoDetails/SettingsSidebar';
import AdditionalInfo from '../partials/patientInfoDetails/AdditionalInfo';
import PatientHeader from '../partials/patients/PatientHeader';
function AdditionalInfoPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <PatientHeader />
            {/* Content */}
            <div className="bg-white shadow-lg rounded-sm mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
                <SettingsSidebar tab={'AdditionalInfo'} />
                <AdditionalInfo />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdditionalInfoPage;
