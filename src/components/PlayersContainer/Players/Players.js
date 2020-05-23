import React from 'react';

import './Players.scss';

class Players extends React.Component {
  render() {
    const { player } = this.props;

    return (
      <div className="Players col-4">
        <div className="card">
        <img className="card-img-top" src={player.imageUrl} alt=""/>
        <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">{player.position}</p>
      </div>
      </div>
      </div>
    );
  }
}

export default Players;
