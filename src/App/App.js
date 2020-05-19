import React from 'react';
import './App.scss';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import PlayersContainer from '../components/PlayersContainer/PlayersContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar/>
        <h2>INSIDE APP COMPONENT</h2>
        <Auth/>
        <PlayersContainer/>
      </div>
    );
  }
}

export default App;
