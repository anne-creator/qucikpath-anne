import React, { Fragment } from 'react';
import Header from '../partials/Header';
import PatientHeader from '../partials/patients/PatientHeader';
import SpecimenInfo from '../partials/specimen/SpecimenInfo';
import Measurements from '../partials/measurements/Measurements';
const SpecimenDetailPage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <PatientHeader />
        <SpecimenInfo />
        <Measurements />
      </main>
    </Fragment>
  );
};
export default SpecimenDetailPage;
