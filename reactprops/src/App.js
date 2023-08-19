import React, {Component} from 'react';
import Classprops from './Classprops';


class App extends Component {
  render() {
    return (
      <div>
        <Classprops name="people 1" place="World 1">
          <p>Hungry?</p>
        </Classprops>
        <Classprops name="people 2" place="World 2">
          <button>Click me</button>
        </Classprops>
        <Classprops name="people 3" place="World 3"/>
      </div>
    );
  }
}

export default App;
