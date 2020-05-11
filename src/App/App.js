import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-dark"><i className="fas fa-rocket"></i> TESTING BOOTSTRAP</button>
      </div>
    );
  }
}

export default App;
