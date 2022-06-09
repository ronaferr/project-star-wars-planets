import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';

function ProviderPlanets({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const contextValue = {
    data,
    setData,
    filterData,
    setFilterData,
    filters,
    setFilters,
    filterByNumericValues,
    setFilterByNumericValues,
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
