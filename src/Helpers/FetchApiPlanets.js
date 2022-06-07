import { useContext } from 'react';
import ContextPlanets from '../Context/ContextPlanets';

const useGetPlanets = async () => {
  const { setData } = useContext(ContextPlanets);
  const { results } = await fetch(endPoint).then((response) => response.json());
  await console.log(results);
  results.map((planet) => delete planet.residents);
  console.log(results);
  setData(results);
};

export default useGetPlanets;
