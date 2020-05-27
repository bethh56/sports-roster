
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/sportsRoster.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const sportsRosterObject = result.data;
      const sportsRoster = [];
      if (sportsRosterObject !== null) {
        Object.keys(sportsRosterObject).forEach((playerId) => {
          const newPlayer = sportsRosterObject[playerId];
          newPlayer.id = playerId;
          sportsRoster.push(newPlayer);
        });
      }
      resolve(sportsRoster);
    })
    .catch((err) => reject(err));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/sportsRoster/${playerId}.json`);

const addPlayer = (newPlayer) => axios.post(`${baseUrl}/sportsRoster.json`, newPlayer);

export default { getPlayersByUid, deletePlayer, addPlayer };
