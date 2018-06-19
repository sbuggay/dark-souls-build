import * as React from 'react';
import './App.css';

import WeaponList from "./components/WeaponList";
import Search from './components/Search';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Search />
        <WeaponList />
      </div>
    );
  }
}

export default App;
