import React from 'react';
import { render } from 'react-dom';
import Counter from './counter';

// redux
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

function reducer1(state = 0, action) {
  console.log('reducer1', state, action);
  switch(action.type) {
    case '+':
      return state + 1;
    default:
      return state;
  }
}

function reducer2(state = 100, action) {
  console.log('reducer2:', state, action);
  return state + 100;
}


const reducer = combineReducers({
  reducer1, reducer2
})

const store = createStore(reducer);

const mapStateToProps = (state) => {
  return {
    val: state.reducer1 + state.reducer2
  }
}

// setInterval(() => {
//   store.dispatch({type:'+', haha: 1})
// }, 1000);

const V = ({val}) => (
  <div>val: {val}</div>
)

class V2 extends React.Component {
  render() {
    console.log('v2', this.state, this.props);
    return <div>V2 r1: {this.props.val}</div>
  }
}

const CV = connect(mapStateToProps)(V);
const CV2 = connect(state => ({val: state.reducer1}))(V2);

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <div><h1>Hi react!!</h1>
            {/*val:{store.getState()}*/}
            <CV />
            <CV2 />
            <Counter />
            <V val={'hi'}/>
          </div>
        </Provider>
      );
    }
}

function makeup() {
  console.log('makeup:', store.getState());
  render(<App />, document.getElementById('root'));
}

makeup();
// store.subscribe(makeup);
