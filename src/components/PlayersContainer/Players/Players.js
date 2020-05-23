import React from 'react';
import PropTypes from 'prop-types';
import './Players.scss';
import playerShape from '../../../App/helpers/propz/playerShape';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Players col-4 pt-3">
        <div className="card">
        <img className="card-img-top" src={player.imageUrl} alt=""/>
        <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">{player.position}</p>
        <button className="btn btn-warning" onClick={this.deletePlayerEvent}> Delete</button>
      </div>
      </div>
      </div>
    );
  }
}

export default Players;
