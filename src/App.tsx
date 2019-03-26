import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'mobx-react';
import { Row, Col } from 'antd';

import router from './router';
import stores from './stores/index';

import Navbar from 'components/Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider {...stores}>
          <BrowserRouter>
            <Row>
              <Col span={12} offset={6}>
                <Navbar />
                <Switch>
                  {router.map(item => <Route key={item.path} {...item} />)}
                </Switch>
              </Col>
            </Row>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
