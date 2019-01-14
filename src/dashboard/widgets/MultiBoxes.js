import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BaseWidget from './BaseWidget';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .box {
    display: flex;
    margin-right: 5px;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px ${props => props.boxBorderColor ? props.boxBorderColor : '#CCC'};
    background-color: ${props => props.boxColor ? props.boxColor : '#FFF'};
  }

  .box:last-child {
    margin-right: 0;
  }

  h2, h4 {
    margin: 0;
  }

  h2 {
    font-size: 2rem;
  }
`;


class MultiBoxes extends Component {
  buildBoxes = (boxes) => {
    return this.props.data.map((row, key) =>
      <div
        key={key}
        className="box"
      >
        <h4>{ row.label }</h4>
        <h2>{ row.value || '-'}</h2>
      </div>
    );
  }

  render() {
    return (
      <BaseWidget
        widgetSize={this.props.widgetSize}
        backgroundColor={this.props.backgroundColor}
        textColor={this.props.textColor}
      >
        <h3>{this.props.label}</h3>
        <StyledContainer
          boxColor={this.props.boxColor}
          boxBorderColor={this.props.boxBorderColor}
        >
          { this.buildBoxes() }
        </StyledContainer>
      </BaseWidget>
    );
  }
}

MultiBoxes.propTypes = {
  data: PropTypes.array,
  widgetSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  boxColor: PropTypes.string,
  boxBorderColor: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default MultiBoxes;