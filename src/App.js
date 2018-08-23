import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './assets/css/App.css';
import Body from './components';
import store from './store';
import { userLogin } from './actions/glosariumAction';

class App extends Component {

  componentWillMount = () => {
    const data = sessionStorage.getItem('user')
    store.dispatch(userLogin(JSON.parse(data)))
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
