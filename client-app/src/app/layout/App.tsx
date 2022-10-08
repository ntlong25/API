import React from 'react';
import { Container } from 'semantic-ui-react';

import Navbar from './Navbar';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route 
        path={'/*'}
        element={(
          <>
            <Navbar />
            <Container style={{ marginTop: '7em' }}>
              <Routes>
                <Route path='/activities' element={<ActivityDashboard />} />
                <Route path='/activities/:id' element={<ActivityDetails />} />
                {['/createactivity', '/manage/:id'].map((path) => (
                  <Route key={location.key} path={path} element={<ActivityForm key={location.key} />} />
                ))}
              </Routes>
            </Container>
          </>
        )}
      />
      </Routes>
  );
}

export default observer(App);
