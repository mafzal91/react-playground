import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
            <Route path="/context" component={Pages.Context} />
            <Route path="/" render={() => (
              <div>
                <div>
                  <Link to="/form">Form Example</Link>
                </div>
                <div>
                  <Link to="/context">Context Example</Link>
                </div>
              </div>
            )} />
          </Switch>
        </QueryParamProvider>
      </Router>
    </div>
  );
}

export default App;
