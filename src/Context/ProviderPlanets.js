import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';

function ProviderPlanets({ children }) {
  const [data, setData] = useState([]);
  const contextValue = {
    data,
    setData,
  };

  return (
    <ContextPlanets.Provider value={ contextValue }>
      { children }
    </ContextPlanets.Provider>
  );
}

export default ProviderPlanets;

ProviderPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};
