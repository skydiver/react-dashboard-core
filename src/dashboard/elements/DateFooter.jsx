import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import format from 'date-fns/format';

const StyledDateFooter = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 4px 8px;
  background-color: #FFF;
  font-size: 0.8rem;
  border-radius: 0.4rem;
  opacity: 0.05;

  &:hover {
    opacity: 0.1;
  }
`;
const DateFooter = ({ date }) => {
  const dateFormatted = date ? format(date, 'YYYY-MM-DD HH:mm:ss') : '';
  return (
    <StyledDateFooter>Last update: {dateFormatted}</StyledDateFooter>
  );
};

DateFooter.propTypes = {
  date: PropTypes.string,
};

export default DateFooter;