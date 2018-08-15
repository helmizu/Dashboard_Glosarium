import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RxGlosarium from './RxGlosarium'

export class index extends Component {
  static propTypes = {
    component: PropTypes.string.isRequired
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
    return (
      <div>
        {content}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
