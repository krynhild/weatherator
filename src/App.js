import React from 'react';
import { Search } from "./components/Search";
import { Widget } from "./components/Widget";
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Search/>
         <Widget/>
      </header>
    </div>
  );
}

export default App;
