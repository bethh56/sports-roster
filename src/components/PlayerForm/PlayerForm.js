import React from 'react';
import PropTypes from 'prop-types';

import './PlayerForm.scss';
import authData from '../../App/helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayerEvent: PropTypes.func.isRequired,
  }

  state = {
    image: '',
    playerName: '',
    playerPosition: '',
  }

  savePlayer = (e) => {
    e.preventDefault();
    console.error('form button working');
    const { image, playerName, playerPosition } = this.state;
    const { addPlayerEvent } = this.props;
    const newPlayer = {
      imageUrl: image,
      name: playerName,
      position: playerPosition,
      uid: authData.getUid(),
    };
    addPlayerEvent(newPlayer);
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ image: e.target.value });
  }

  playerChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  render() {
    const { image, playerName, playerPosition } = this.state;

    return (
      <div>
        <form className='col-6 offset-3'>
          <div className="form-group">
            <label htmlFor="playerForm-imgUrl">Image Url</label>
            <input type="text"
            className="form-control"
            id="playerForm-imgUrl"
            placeholder="Enter Image url of player"
            value={image}
            onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="playerForm-name">Name</label>
            <input type="text"
            className="form-control"
            id="playerForm-name"
            placeholder="Enter name of player"
            value={playerName}
            onChange={this.playerChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="playerForm-position">Position</label>
            <input type="text"
            className="form-control"
            id="playerForm-position"
            placeholder="Enter position of player"
            value={playerPosition}
            onChange={this.positionChange}
            />
          </div>
          <button type="submit" className="btn btn-dark" onClick={this.savePlayer}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
