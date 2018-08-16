import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import arka from '../assets/img/arka.png'
import { profileShow, btnBurgerShow } from '../actions/navAction'

export class Header extends Component {
  constructor(props) {
    super(props)

    this.dropdownProfile=this.dropdownProfile.bind(this)
    this.btnBurger=this.btnBurger.bind(this)
  }

  dropdownProfile(){
    this.props.profileShow(!this.props.profile)
  }
  
  btnBurger(){
      this.props.btnBurgerShow(!this.props.btnBurger)
  }

  static propTypes = {
    btnBurger: PropTypes.bool.isRequired,
    profile: PropTypes.bool.isRequired,
    modal: PropTypes.bool.isRequired,
    navbar: PropTypes.string.isRequired,
    btnBurgerShow: PropTypes.func.isRequired,
    profileShow: PropTypes.func.isRequired
  }

  render() {
    const { btnBurger, profile, navbar, modal } = this.props
    return (
      <header className={classnames("header-desktop", {"index-h-desktop" : modal})}>
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
     
    )
  }
}

const mapStateToProps = (state) => ({
  profile : state.nav.profile,
  navbar : state.nav.navbar,
  btnBurger : state.nav.btnBurger,
  modal : state.nav.modal
})

const mapDispatchToProps = {
  btnBurgerShow,
  profileShow
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
