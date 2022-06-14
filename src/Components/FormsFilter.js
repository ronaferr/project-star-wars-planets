import React, { useContext, useEffect, useState } from 'react';
import ContextPlanets from '../Context/ContextPlanets';
import starWars from '../Star_Wars_Logo.svg.png';
import '../css/FormsFilter.css';

function FormsFilter() {
  const INITIAL_COLUMN_OPTIONS = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const ZERO = 0;

  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(ZERO);
  const [columnOptions, setColumnOptions] = useState(INITIAL_COLUMN_OPTIONS);
  const [columnOrder, setColumnOrder] = useState('population');
  const [orderSort, setOrderSort] = useState('ASC');

  const { data, setFilterData, setFilters,
    filterByNumericValues, setFilterByNumericValues,
    setOrder, filterData } = useContext(ContextPlanets);

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

  const filterColumns = (nameColumn) => {
    const filterSave = filterByNumericValues.filter((filter) => filter.column
  !== nameColumn);
    setFilterByNumericValues(filterSave);
  };

  const allRemoveFilters = () => {
    setColumnOptions(INITIAL_COLUMN_OPTIONS);
    setFilterByNumericValues([]);
  };

  const sortPlanets = () => {
    const newOrderSort = {
      column: columnOrder,
      sort: orderSort,
    };

    setOrder(newOrderSort);
    const notUnknown = filterData.filter((planets) => (
      !planets[columnOrder].includes('unknown')
    ));
    const unknown = filterData.filter((planets) => (
      planets[columnOrder].includes('unknown')
    ));
    if (orderSort === 'ASC') {
      notUnknown.sort((a, b) => a[columnOrder] - b[columnOrder]);
      unknown.forEach((planet) => notUnknown.push(planet));
      setFilterData(notUnknown);
    } else {
      notUnknown.sort((a, b) => b[columnOrder] - a[columnOrder]);
      unknown.forEach((planet) => notUnknown.push(planet));
      setFilterData(notUnknown);
    }
  };

  return (
    <section className="containerForms">
      <img src={ starWars } alt="Star Wars Logo" className="logo" />
      <br />
      <input
        type="text"
        onChange={ filterName }
        data-testid="name-filter"
        placeholder="Name Planet"
        className="inputName"
      />
      <br />
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
        className="inputNumber"
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ ({ target }) => { setValue(Number(target.value)); } }
      />
      <button
        className="btnForm"
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        Filtrar
      </button>
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => { setColumnOrder(target.value); } }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <label
        htmlFor="ascendente"
        className="inputASC"
      >
        <input
          data-testid="column-sort-input-asc"
          value="ASC"
          type="radio"
          name="order"
          id="ascendente"
          onChange={ () => { setOrderSort('ASC'); } }
        />
        Ascendente
      </label>
      <label
        htmlFor="descendente"
        className="inputDESC"
      >
        <input
          value="DESC"
          data-testid="column-sort-input-desc"
          type="radio"
          name="order"
          id="descendente"
          onChange={ () => { setOrderSort('DESC'); } }
        />
        Descendente
      </label>
      <button
        className="btnForm"
        type="button"
        data-testid="column-sort-button"
        onClick={ () => sortPlanets() }
      >
        Ordernar
      </button>
      <button
        className="btnForm"
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => allRemoveFilters() }
      >
        Remover Filtros
      </button>
      {filterByNumericValues.map((filter) => (
        <div key={ filter.value } data-testid="filter" className="filterSaved">
          <p>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </p>
          <button
            type="button"
            onClick={ () => filterColumns(filter.column) }
          >
            X
          </button>
        </div>))}
    </section>
  );
}

export default FormsFilter;
