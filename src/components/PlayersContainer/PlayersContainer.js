import React from 'react';

import Players from './Players/Players';
import './PlayersContainer.scss';

class PlayersContainer extends React.Component {
  render() {
    return (
      <div className="PlayersContainer">
        <h1>Inside Player Container</h1>
        <Players />
      </div>
    );
  }
}

export default PlayersContainer;
