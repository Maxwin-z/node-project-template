import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link, IndexLink, IndexRoute } from 'react-router'

const Home = ({children}) => (
  <div>
    Home
    <ul>
      <li>
        <IndexLink to="/test-router.html" activeStyle={{color: 'red'}}>Home</IndexLink>
      </li>
      <li>
        <Link to="/about" activeStyle={{ color: 'red' }}>About</Link>
      </li>
      <li>
        <Link to="/repos/max" activeStyle={{ color: 'red' }}>Repos</Link>
      </li>
    </ul>
    {children}
  </div>
);

const Index = () => (
  <div>Index</div>
)

const About = () => (
  <div>About</div>
);

const Repos = ({params:{user}}) => (
  <div>Repos: {user}</div>
);

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/test-router.html" component={Home}>
          <IndexRoute component={Index}/>

          <Route path="/about" component={About} />
          <Route path="/repos/:user" component={Repos} />
        </Route>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
