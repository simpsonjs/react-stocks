import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import StockList from '../containers/stocklist';
import StockData from '../containers/stockdata';
import '../css/App.css';

class App extends Component {

  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  addNotification = (title, message, level) => {
    this.notificationSystem.addNotification({
      title: title,
      message: message,
      level: level,
      autoDismiss: 2,
      dismissible: false
    });
  }

  render() {

    const style = {
      NotificationItem: {
        success: {
          color: '#000000',
          backgroundColor: '#5ea400',
          fontSize: '16px'
        },
        error: {
          color: '#000000',
          backgroundColor: '#ec3d3d',
          fontSize: '16px'
        }
      },
      Title: {
        success: {
          color: '#000000',
          fontSize: '24px',
        },
        error: {
          color: '#000000',
          fontSize: '24px',
        }
      }
    }

    return (
      <div className="App">
        <div className="container-fluid">

          <StockList
            addNotification={this.addNotification}/>
          <StockData />

        </div>
        <NotificationSystem ref="notificationSystem" style={style} />
      </div>
    );
  }
}

export default App;
