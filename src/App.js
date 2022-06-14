import React from 'react';
import './App.css';
import FormsFilter from './Components/FormsFilter';
import Table from './Components/Table';
import ProviderPlanets from './Context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <FormsFilter />
      <Table />
    </ProviderPlanets>
  );
}

export default App;
