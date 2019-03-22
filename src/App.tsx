import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'mobx-react';

import router from './router';
import stores from './stores/index';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider {...stores}>
          <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Switch>
              {router.map(item => <Route key={item.path} {...item} />)}
            </Switch>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
