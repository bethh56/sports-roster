import React from 'react';
import PropTypes from 'prop-types';
import './Players.scss';
import playerShape from '../../../App/helpers/propz/playerShape';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { editAPlayer, player } = this.props;
    editAPlayer(player);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Players">
        <div className="card">
        <img className="card-img-top" src={player.imageUrl} alt=""/>
        <div className="card-body">
        <h5 className="card-title playerName">{player.name}</h5>
        <p className="card-text playerPosition">{player.position}</p>
        <div className="buttons">
        <button className="deleteBtn" onClick={this.deletePlayerEvent}> Delete</button>
        <button className="editBtn" onClick={this.editPlayerEvent}>Edit</button>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Players;
