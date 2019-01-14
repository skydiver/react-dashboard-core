import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    padding-right: 10px;
`;

const Row = ({ children }) =>
  <StyledRow>{children}</StyledRow>
;

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;