import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import './css/style.scss';
// import './charts/ChartjsConfig';

import SigninPage from './pages/SigninPage';
import PatientsPage from './pages/PatientsPage';
import PatientDetailPage from './pages/PatientDetailPage';
import AdditionalInfoPage from './pages/AdditionalInfoPage';
import RefferalPage from './pages/RefferalPage';
import SpecimenDetailPage from './pages/SpecimenDetailPage';
import PageNotFound from './utils/PageNotFound';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        {/* quickpath route */}
        <Route exact path="/" component={SigninPage} />;
        <Route exact path="/signin" component={SigninPage} />;
        <Route exact path="/patients" component={PatientsPage} />;
        <Route exact path="/patientdetail" component={PatientDetailPage} />;
        <Route exact path="/additionalinfo" component={AdditionalInfoPage} />;
        <Route exact path="/refferal" component={RefferalPage} />;
        <Route exact path="/specimendetail" component={SpecimenDetailPage} />;
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
