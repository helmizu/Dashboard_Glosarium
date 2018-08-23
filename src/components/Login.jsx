import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLogin } from '../actions/glosariumAction'

export class Login extends Component {
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    static propTypes = {
        userLogin: PropTypes.func.isRequired
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const data = {
            email : this.state.email,
            password : this.state.password
        }
        this.props.userLogin(data)
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="page-content--bge5">
            <div className="container">
            <div className="login-wrap">
            <div className="login-content">
            <div className="login-logo">
            <img src="https://arkademy.com/asset/v3/img/logo%20arkademy-tech%20academy-03.svg" alt="Arkademy"/>
            </div>
            <div className="login-form">
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
            <label>Email Address</label>
            <input className="au-input au-input--full" value={email} onChange={this.onChange} type="email" name="email" placeholder="Email"/>
            </div>
            <div className="form-group">
            <label>Password</label>
            <input className="au-input au-input--full" value={password} onChange={this.onChange} type="password" name="password" placeholder="Password"/>
            </div>
            <button className="btn btn-block btn-orange" type="submit">sign in</button>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
