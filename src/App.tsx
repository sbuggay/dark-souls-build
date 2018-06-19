import * as React from 'react';
import './App.css';

import WeaponList from "./components/WeaponList";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <WeaponList />
      </div>
    );
  }
}

export default App;
