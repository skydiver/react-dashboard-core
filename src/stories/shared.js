import React from 'react';

import { Dashboard, Row } from '../dashboard/layout';

const decoratorDashboard = (story) => {
  return (
    <Dashboard style={{ paddingBottom: '10px', paddingRight: '10px' }}>
      <Row>
        {story()}
      </Row>
    </Dashboard>
  );
};

const widgetSizeKnobOptions = {
  range: true,
  min: 1,
  max: 10,
  step: 1,
};


export default {
  decoratorDashboard,
  widgetSizeKnobOptions,
};