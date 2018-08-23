import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RxGlosarium from './RxGlosarium'
import Header from './Header'
import Sidebar from './Sidebar'
import Login from './Login'

export class index extends Component {
  static propTypes = {
    component: PropTypes.string.isRequired,
    user : PropTypes.bool.isRequired,
  }

  render() {
    const body = () => {
      if (this.props.component === 'Glosarium') {
        return (< RxGlosarium />)
      } else {
        return (<h1>ERRROOORRR</h1>)
      }
    }
    const content = body()
    const { user } = this.props
    return (
      <div>
      {user ?  
        <div className="page-wrapper">
        < Sidebar />
        <div className="page-container">
        < Header />
        <div className="main-content">
        <div className="section__content section__content--p5">
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <div className="content-wrapper">
        {content}
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>        
        </div>
        </div>
        : 
        <div className="page-wrapper">
        < Login />
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  component : state.nav.navbar,
  user : state.glosarium.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
