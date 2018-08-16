import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './assets/css/App.css';
import Body from './components';
import store from './store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


class App extends Component {
  
  render() {
    
    return (
      <Provider store={store}>
      <div className="page-wrapper">
      {/* Side Bar */}
      < Sidebar />
      {/* Page */}
      <div className="page-container">
      
      {/* Header */}
      < Header />
      {/* Content Frame */}
      <div className="main-content">
      <div className="section__content section__content--p5">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-12">
      
      {/* Content */}
      < Body />
      
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </Provider>
    );
  }
}

export default App;
