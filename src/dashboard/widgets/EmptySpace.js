import React from 'react';
import PropTypes from 'prop-types';

import BaseWidget from './BaseWidget';

const EmptySpace = (props) =>
  <BaseWidget
    widgetSize={props.widgetSize}
    backgroundColor="transparent"
  />
;

EmptySpace.propTypes = {
  widgetSize: PropTypes.number,
};

export default EmptySpace;