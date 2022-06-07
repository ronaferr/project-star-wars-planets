import React, { useEffect, useContext } from 'react';
import ContextPlanets from '../Context/ContextPlanets';

function Table() {
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { data, setData } = useContext(ContextPlanets);
  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(endPoint).then((response) => response.json());
      results.map((planet) => delete planet.residents);
      setData(results);
    };
    getPlanets();
  }, []);
  console.log(data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
