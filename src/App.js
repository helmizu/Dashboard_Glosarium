import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './assets/css/App.css';
import Body from './components';
import store from './store';
import { userLogin } from './actions/glosariumAction';
import Axios from 'axios'

class App extends Component {
  cekUser() {
    if(localStorage.getItem('user')){
      const data = localStorage.getItem('user')
      store.dispatch(userLogin(JSON.parse(data)))
    }
  }

  componentWillMount(){
    this.cekUser()
  }
  
  render() {
    return (
      <Provider store={store}>
      < Body />
      </Provider>
    );
  }
}

export default App;
