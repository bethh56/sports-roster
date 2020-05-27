import React from 'react';
import './PlayersContainer.scss';

import playerData from '../../App/helpers/data/playerData';
import authData from '../../App/helpers/data/authData';

import PlayerForm from '../PlayerForm/PlayerForm';
import Players from './Players/Players';

class PlayersContainer extends React.Component {
  state = {
    sportsRoster: [],
    formOpen: false,
  }

  getPlayerInfo = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((sportsRoster) => this.setState({ sportsRoster }))
      .catch((err) => console.error('unable to display sports roster players', err));
  }

  componentDidMount() {
    this.getPlayerInfo();
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => this.getPlayerInfo())
      .catch((err) => console.error('unable to delete player', err));
  }

  addPlayerEvent = (e) => {
    e.preventDefault();
    console.error('button');
  }

  render() {
    const { sportsRoster, formOpen } = this.state;
    const viewPlayers = sportsRoster.map((player) => <Players key={player.id} player={player} deletePlayer={this.deletePlayer}/>);
    return (
      <div>
      <button className="btn btn-success mt-2" onClick={() => this.setState({ formOpen: true })}>Add Player</button>
      { formOpen ? <PlayerForm /> : '' }
      <div className="PlayersContainer d-flex flex-wrap justify-content-center">
        {viewPlayers}
      </div>
      </div>
    );
  }
}

export default PlayersContainer;
