import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Example from './examples/ReactHookForm';
import ReactQuery from './examples/ReactQuery';
import DevToolsExample from './tools/ReactQueryDevTools'
import MaterialHookForm from './examples/MaterialHookForm'

const NavList = () => {
  return (
    <ul>
      <li>
        <Link to='form-example'> React Hook Form </Link>
      </li>
      <li>
        <Link to='/material-hook-form-example'> Material-UI Hook Form </Link>
      </li>
      <li>
        <Link to='rq-example'> React Query Example </Link>
      </li>
      <li>
        <Link to='rq-devtools'> React Query DevTools </Link>
      </li>
    </ul>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={NavList} />
        <Route exact path='/form-example' component={Example} />
        <Route exact path='/material-hook-form-example' component={MaterialHookForm} />
        <Route exact path='/form-example' component={Example} />
        <Route exact path='/rq-example' component={ReactQuery} />
        <Route exact path='/rq-devtools' component={DevToolsExample} />
      </Switch>
    </Router>
  );
}

export default App;
