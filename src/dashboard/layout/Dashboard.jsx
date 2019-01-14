import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #272727;
  flex-direction: column;

  .widget {
    margin: 10px 0 0 10px;
  }
`;

const Dashboard = ({ children, className, style }) =>
  <Layout
    className={className}
    style={style}
  >
    {children}
  </Layout>
;

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Dashboard;