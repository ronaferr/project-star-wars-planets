import React, { useContext, useEffect, useState } from 'react';
import ContextPlanets from '../Context/ContextPlanets';

function FormsFilter() {
  const INITIAL_COLUMN_OPTIONS = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const ZERO = 0;

  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(ZERO);
  const [columnOptions, setColumnOptions] = useState(INITIAL_COLUMN_OPTIONS);
  // const [filterColumn, setFilterColumn] = useState(INITIAL_COLUMN_OPTIONS);
  // const [deleteFilter, setDeleteFilter] = useState('');

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

    const arrayColumnOptions = [];
    filterByNumericValues.forEach((filter) => arrayColumnOptions.push(filter.column));
    const newOpitons = INITIAL_COLUMN_OPTIONS
      .filter((opt) => !arrayColumnOptions.includes(opt));
    setColumnOptions(newOpitons);
  }, [filterByName, filterByNumericValues]);

  const handleClickFilter = () => {
    const newFilterByNumericValues = {
      column,
      comparison,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, newFilterByNumericValues]);
    const filterColumnOptions = columnOptions.filter((option) => option !== column);
    setColumnOptions(filterColumnOptions);
  };

  const func = (nameColumn) => {
    const filterSave = filterByNumericValues.filter((filter) => filter.column
  !== nameColumn);
    setFilterByNumericValues(filterSave);
  };

  /* useEffect(() => {
    const filterSave = filterByNumericValues.filter((filter) => filter.column
  !== deleteFilter);
    console.log(filterSave);
    setFilterByNumericValues(filterSave);
    func();
  }, [deleteFilter]); */

  const allRemoveFilters = () => {
    setColumnOptions(INITIAL_COLUMN_OPTIONS);
    setFilterByNumericValues([]);
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
        {columnOptions.map((option) => (
          <option key={ option }>{option}</option>
        ))}
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
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => allRemoveFilters() }
      >
        Remover Filtros
      </button>
      {filterByNumericValues.map((filter) => (
        <div key={ filter.value } data-testid="filter">
          <p>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </p>
          <button
            type="button"
            onClick={ () => func(filter.column) }
          >
            X
          </button>
        </div>))}
    </section>
  );
}

export default FormsFilter;
