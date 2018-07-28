import * as React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import store from '../../store'
import SecondPage from '../SecondPage';
import FirstPage from '../FirstPage';

let App;
const history = createMemoryHistory();
  App = () => (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/" component={FirstPage} />
          <Route exact={true} path="/second" component={SecondPage} />
        </Switch>
      </Router>
    </Provider>
  );
export default App;
