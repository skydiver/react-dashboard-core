import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BaseWidget from './BaseWidget';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 2px;
  font-size: 0.8rem;

  th, td {
    background-color: rgba(255, 255, 255, 0.06);
    border: solid 1px rgba(255, 255, 255, 0.1);
    padding: 2px;
  }

  td:first-child {
    width: 50%;
    padding-left: 10px;
    text-align: left;
  }

  td {
    text-align: center;
  }
`;


class Table extends Component {
  buildHeaders = () => {
    return this.props.headers.map((header, key) =>
      <th key={key}>{header}</th>
    );
  }

  buildRows = () => {
    return this.props.rows.map((row, key) =>
      <tr key={key}>
        { this.buildCells(row) }
      </tr>
    );
  }

  buildCells = (row) => {
    return this.props.fields.map((field, key) =>
      <td key={key} className={field.toLowerCase()}>{row[field]}</td>
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
        { this.props.rows &&
        <div style={{ width: '100%', overflow: 'auto' }}>
          <StyledTable>
            <thead>
              <tr>
                { this.buildHeaders() }
              </tr>
            </thead>
            <tbody>
              { this.buildRows() }
            </tbody>
          </StyledTable>
        </div>
        }
        { !this.props.rows &&
          <h2>No records</h2>
        }
      </BaseWidget>
    );
  }
}

Table.propTypes = {
  widgetSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  headers: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  rows: PropTypes.array,
};

export default Table;