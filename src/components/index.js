import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Broadcast from './Broadcast';
import Siswa from './Siswa';
import Guru from './Guru';
import Sekolah from './Sekolah';
import Statistik from './Statistik';
import Email from './Email';
import Glosarium from './Glosarium';

class Index extends Component {
    render() {
        const body = () => {
            if (this.props.component === 'Dashboard') {
                return (< Dashboard />)
            } else if (this.props.component === 'Broadcast') {
                return (< Broadcast />)
            } else if (this.props.component === 'Siswa') {
                return (< Siswa />)
            } else if (this.props.component === 'Guru') {
                return (< Guru />)
            } else if (this.props.component === 'Sekolah') {
                return (< Sekolah />)
            } else if (this.props.component === 'Statistik') {
                return (< Statistik />)
            } else if (this.props.component === 'Email') {
                return (< Email />)
            } else if (this.props.component === 'Glosarium') {
                return (< Glosarium />)
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

export default Index