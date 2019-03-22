import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { HomeStore } from 'stores/home';

export interface HomePorps {
  homeStore: HomeStore;
}

class Home extends Component<HomePorps> {
  onClick = () => {
    this.props.homeStore.updateValue('test', this.props.homeStore.test + 1);
  }
  
  render() {
    return (
      <div>
        this is home
        <button onClick={this.onClick}>click</button>
        {this.props.homeStore.test}
      </div>
    );
  }
}

export default inject('homeStore')(observer(Home));
