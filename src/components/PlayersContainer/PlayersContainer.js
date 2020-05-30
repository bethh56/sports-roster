import React from 'react';
import './PlayersContainer.scss';

import playerData from '../../App/helpers/data/playerData';
import authData from '../../App/helpers/data/authData';

import PlayerForm from '../PlayerForm/PlayerForm';
import Players from './Players/Players';

class PlayersContainer extends React.Component {
  state = {
    sportsRoster: [],
    editPlayer: {},
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

  addPlayerEvent = (newPlayer) => {
    playerData.addPlayer(newPlayer)
      .then(() => {
        this.getPlayerInfo();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('unable to add new player', err));
  }

  putPlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayerInfo();
        this.setState({ formOpen: false, editPlayer: {} });
      })
      .catch((err) => console.error('unable to update player', err));
  }

  editAPlayer = (player) => {
    this.setState({ formOpen: true, editPlayer: player });
  }

  render() {
    const { sportsRoster, formOpen, editPlayer } = this.state;
    const viewPlayers = sportsRoster.map((player) => <Players key={player.id} editAPlayer={this.editAPlayer} player={player} deletePlayer={this.deletePlayer}/>);
    return (
      <div>
      <button className="addPlayerBtn" onClick={() => this.setState({ formOpen: true })}>Add Player</button>
      { formOpen ? <PlayerForm addPlayerEvent={this.addPlayerEvent} player={editPlayer} putPlayer={this.putPlayer}/> : '' }
      <div className="PlayersContainer d-flex flex-wrap justify-content-center">
        {viewPlayers}
      </div>
      </div>
    );
  }
}

export default PlayersContainer;
