import React from 'react';
import './PlayersContainer.scss';

import playerData from '../../App/helpers/data/playerData';
import authData from '../../App/helpers/data/authData';

import Players from './Players/Players';

class PlayersContainer extends React.Component {
  state = {
    sportsRoster: [],
  }

  componentDidMount() {
    playerData.getPlayersByUid(authData.getUid())
      .then((sportsRoster) => this.setState({ sportsRoster }))
      .catch((err) => console.error('unable to display sports roster players', err));
  }

  render() {
    const { sportsRoster } = this.state;
    const viewPlayers = sportsRoster.map((player) => <Players key={player.id} player={player}/>);
    return (
      <div className="PlayersContainer d-flex flex-wrap justify-content-center">
        {viewPlayers}
      </div>
    );
  }
}

export default PlayersContainer;
