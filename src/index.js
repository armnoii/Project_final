import React from 'react';
import ReactDOM from 'react-dom';

import Login from './login';

class MyHeader extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById("root"));