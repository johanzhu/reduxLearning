import React, { PropTypes } from 'react';
import './app.css';


const yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          {value}<button onClick={increment}>加</button>
          <button onClick={decrement}>减</button>
        </div>
      </div>
    );
  }
}

AppComponent.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default AppComponent;
