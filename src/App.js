import React, { Component } from 'react';
import logo from './assets/img/logo_arkademy.png';
import arka from './assets/img/arka.png';
import './assets/css/App.css';
import classnames from 'classnames'
import Body from './components';


class App extends Component {
  
  constructor(){
    super()
    
    this.state ={
      profile : false,
      btnBurger : false,
      navbar : 'Glosarium'
    }

    this.dropdownProfile=this.dropdownProfile.bind(this)
    this.pageHandler=this.pageHandler.bind(this)
    this.btnBurger=this.btnBurger.bind(this)
  }
  
  dropdownProfile(){
    this.setState({
      profile : !this.state.profile
    })
  }

  pageHandler(e) {
    this.setState({
      navbar : e.target.name
    })
  }

  btnBurger(){
    this.setState({
      btnBurger : !this.state.btnBurger
    })
  }
  render() {
    const {profile, navbar, btnBurger} = this.state

    return (
      <div className="page-wrapper">
      {/* Side Bar */}
      <aside className={classnames("menu-sidebar d-lg-block", { 'menu-sidebar-mobile' : btnBurger })}>
      <div className="logo">
      <a>
      <img src={logo} className="img" alt="Cool Admin" />
      </a>
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
      <nav className="navbar-sidebar">
      <ul className="list-unstyled navbar__list">
      <li>
      <a onClick={this.pageHandler} name="Glosarium"><i className="fas fa-th-list"></i>Glosarium</a>
      </li>
      </ul>
      </nav>
      </div>
      </aside>

      {/* Page */}
      <div className="page-container">
      
      {/* Header */}
      <header className="header-desktop">
      <div className="section__content section__content--p5">
      <div className="container-fluid">
      <div className="header-wrap">
      <div>
      <div className={classnames("btn-burger", {'change btn-burger-open' : btnBurger})} onClick={this.btnBurger}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <h2 className="nav-title">{navbar}</h2>
      </div>
      <div className="header-button" onClick={this.dropdownProfile}>
      <div className="account-wrap">
      <div className="account-item clearfix js-item-menu">
      <div className="image">
      <img src={arka} alt="Arka" />
      </div>
      <div className="content">
      <a className="js-acc-btn" >Arka</a>
      </div>
      <div className={classnames("account-dropdown js-dropdown", { 'display-block' : profile})}>
      <div className="info clearfix">
      <div className="image">
      <a >
      <img src={arka} alt="Arka" />
      </a>
      </div>
      <div className="content">
      <h5 className="name">
      <a >Arka</a>
      </h5>
      <span className="email">Arka@arkademy.com</span>
      </div>
      </div>
      <div className="account-dropdown__body">
      <div className="account-dropdown__item">
      <a ><i className="fas fa-cog"></i>Setting</a>
      </div>
      </div>
      <div className="account-dropdown__footer">
      <a ><i className="fas fa-sign-out-alt"></i>Logout</a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </header>

      {/* Content Frame */}
      <div className="main-content">
      <div className="section__content section__content--p5">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-12">
      
      {/* Content */}
      < Body component={navbar} />
      
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
