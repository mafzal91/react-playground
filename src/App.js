import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useQueryParams } from './hooks'
import Pages from './pages'
import './App.css';

const {QueryParamProvider} = useQueryParams

const App = () => {
  return (
    <div className="App">
      <Router>
        <QueryParamProvider>
          <Switch>
            <Route path="/form" component={Pages.Form} />
            <Redirect from='/' to='/form' />
          </Switch>
        </QueryParamProvider>
      </Router>
    </div>
  );
}

export default App;
