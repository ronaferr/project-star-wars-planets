import React, { useContext, useEffect, useState } from 'react';
import ContextPlanets from '../Context/ContextPlanets';

function FormsFilter() {
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const ZERO = 0;
  const [value, setValue] = useState(ZERO);
  const { data, setFilterData, setFilters,
    filterByNumericValues, setFilterByNumericValues } = useContext(ContextPlanets);

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

    const arrayMultipliFilters = filterByNumericValues.reduce((acc, filter) => (
      acc.filter((planet) => {
        switch (filter.comparison) {
        case 'maior que':
          return Number(planet[filter.column]) > Number(filter.value);
        case 'menor que':
          return Number(planet[filter.column]) < Number(filter.value);
        case 'igual a':
          return Number(planet[filter.column]) === Number(filter.value);
        default:
          return true;
        }
      })), filterNamePlanets);
    setFilterData(arrayMultipliFilters);
  }, [filterByName, filterByNumericValues]);

  const handleClickFilter = () => {
    const newFilterByNumericValues = {
      column,
      comparison,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, newFilterByNumericValues]);
  };

  return (
    <section>
      <input
        type="text"
        onChange={ filterName }
        data-testid="name-filter"
        placeholder="Name Planet"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => { setColumn(target.value); } }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => { setComparison(target.value); } }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ ({ target }) => { setValue(Number(target.value)); } }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        Filtrar
      </button>
      {filterByNumericValues.map((filter) => (
        <p key={ filter.value }>
          {`${filter.column} ${filter.comparison} ${filter.value}`}
        </p>))}
    </section>
  );
}

export default FormsFilter;
