import React, {Component} from 'react';
import Classprops from './Classprops';
import Functionalprops from './Functionalprops';

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
        <Functionalprops name="people 4" place="world 4"/>
      </div>
    );
  }
}

export default App;
