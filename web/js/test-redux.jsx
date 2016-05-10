import React from 'react';
import { render } from 'react-dom';
import Counter from './counter';

class App extends React.Component {
  render() {
    return <div><h1>Hi react!!</h1>
        <Counter />
      </div>
  }
}

render(<App />, document.getElementById('root'));
