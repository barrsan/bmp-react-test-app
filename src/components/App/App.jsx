import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ExhibitsContainer from '../../containers/ExhibitsContainer';
import NewExhibitFormContainer from '../../containers/NewExhibitFormContainer';
import Navigation from '../Navigation/Navigation';


const App = () => (
  <div className="app">
    <Navigation />
    <Switch>
      <Route exact path="/" component={ExhibitsContainer} />
      <Route path="/new" component={NewExhibitFormContainer} />
      <Route render={() => (
        <div
          className="error-page container"
        >
          {'Page not found :('}
        </div>
      )}
      />
    </Switch>
  </div>
);


export default App;
