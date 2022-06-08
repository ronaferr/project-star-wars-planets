import React, { useContext, useEffect, useState } from 'react';
import ContextPlanets from '../Context/ContextPlanets';

function FormsFilter() {
  const [filterByName, setFilterByName] = useState('');
  const { data, setFilterData, setFilters } = useContext(ContextPlanets);
  const filterName = ({ target }) => {
    setFilterByName(target.value.toLowerCase());
    const newfilters = {
      filterByName,
    };
    setFilters(newfilters);
  };

  useEffect(() => {
    const filterNamePlanets = data.filter((planet) => planet.name.toLowerCase()
      .includes(filterByName));
    console.log(filterNamePlanets);
    setFilterData(filterNamePlanets);
  }, [filterByName]);

  return (
    <section>
      <input
        type="text"
        onChange={ filterName }
        data-testid="name-filter"
        placeholder="Name Planet"
      />
    </section>
  );
}

export default FormsFilter;
