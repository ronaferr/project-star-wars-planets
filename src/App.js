import React from 'react';
import './App.css';
import Table from './Components/Table';
import ProviderPlanets from './Context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <main>Hello World</main>
      <Table />
    </ProviderPlanets>
  );
}

export default App;
