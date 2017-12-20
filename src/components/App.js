import React, { Component } from 'react';
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';
import StockList from '../containers/StockList';
import StockData from '../containers/StockData';
import '../css/App.css';

class App extends Component {
  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  addNotification = (title, message, level) => {
    switch (level) {
      case 'success':
        NotificationManager.success(message, title, 2000);
        break;
      case 'error':
        NotificationManager.error(message, title, 2000);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <StockList addNotification={this.addNotification} />
          <StockData />
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default App;
