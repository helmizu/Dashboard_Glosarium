import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../assets/img/logo_arkademy.png';
import classnames from 'classnames'
import { connect } from 'react-redux'
import { navbarSelect } from '../actions/navAction'

export class Sidebar extends Component {
    constructor(props) {
        super(props)
        
        this.pageHandler=this.pageHandler.bind(this)
    }
    
    pageHandler(e) {
        this.props.navbarSelect(e.target.name)
    }
    
    static propTypes = {
        btnBurger: PropTypes.bool.isRequired,
        navbar: PropTypes.string.isRequired,
        navbarSelect: PropTypes.func.isRequired
    }
    
    render() {
        const { btnBurger } = this.props
        return (
            <aside className={classnames("menu-sidebar d-lg-block", { 'menu-sidebar-mobile' : btnBurger })}>
            <div className="logo">
            <img src={logo} className="img" alt="Arkademy" />
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
        )
    }
}

const mapStateToProps = (state) => ({
    btnBurger: state.nav.btnBurger,
    navbar: state.nav.navbar
})

const mapDispatchToProps = {
    navbarSelect
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
