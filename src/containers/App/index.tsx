import * as React from "react";
import Routing from '../../utils/routing';
import { Provider } from 'react-redux';
import store from '../../store'
import SecondPage from '../SecondPage';
import FirstPage from '../FirstPage';

const { Route, Switch, HashRouter, BrowserRouter } = Routing;
const userAgent = navigator.userAgent.toLowerCase();
let App;
if (userAgent.indexOf(' electron/') > -1 ){
  App = () => (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route exact={true} path="/" component={FirstPage} />
          <Route exact={true} path="/second" component={SecondPage} />
        </div>
      </HashRouter>
    </Provider>
  );
} else {
  App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={FirstPage} />
          <Route exact={true} path="/second" component={SecondPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
