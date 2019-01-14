import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BaseWidget from './BaseWidget';

const StyledWidget = styled(BaseWidget)`
  .svg-inline--fa,
  h2,
  h3 {
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
  }

  .svg-inline--fa {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: ${props => props.iconColor ? props.iconColor : '#000'};
  }

  h2 {
    margin-top: 1rem;
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
`;

const BoxIcon = (props) =>
  <StyledWidget
    widgetSize={props.widgetSize}
    backgroundColor={props.backgroundColor}
    textColor={props.textColor}
    iconColor={props.iconColor}
  >
    <FontAwesomeIcon icon={props.icon} />
    <h3>{props.label}</h3>
    <h2>{props.value || '-'}</h2>
  </StyledWidget>
;

BoxIcon.propTypes = {
  widgetSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.array.isRequired,
  iconColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default BoxIcon;