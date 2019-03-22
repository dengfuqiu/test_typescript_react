import React, { Component } from 'react';

class App extends Component {
  test(value: string): string {
    const item: string = value.length + 'test';
    return item;
  }

  render() {
    console.log(this.test('xxxxxx'));
    return (
      <div>test</div>
    );
  }
}

export default App;
