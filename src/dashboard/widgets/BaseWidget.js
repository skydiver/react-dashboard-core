import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

const StyledWidget = styled.div`
  display: flex;
  padding: 10px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FFF'};
  color: ${props => props.textColor ? props.textColor : '#000'};
  flex: ${props => props.widgetSize > 0 && props.widgetSize < 10 ? `0.${props.widgetSize}` : 1};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 0.8rem;
  }
`;

const BaseWidget = (props) =>
  <StyledWidget
    className={classNames('widget', props.className)}
    widgetSize={props.widgetSize}
    backgroundColor={props.backgroundColor}
    textColor={props.textColor}
  >
    {props.children}
  </StyledWidget>
;

BaseWidget.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  widgetSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default BaseWidget;