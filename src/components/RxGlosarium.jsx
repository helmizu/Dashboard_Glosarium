import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { getAllData, insertData } from '../actions/glosariumAction'

export class RxGlosarium extends Component {
    constructor(props){
        super(props)
        
        this.state = { 
            modal : false,
            labelFilter : "",
            nama : "",
            label : "",
            tags : "",
            pengertian : "",
            ilustrasi : {},
            penggunaan : ""
        }
        this.modalHandler = this.modalHandler.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.fileChangedHandler = this.fileChangedHandler.bind(this)
    }
    
    modalHandler(){
        this.setState({
            modal : !this.state.modal
        })
    }
    
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    fileChangedHandler(e) {
        this.setState({
            [e.target.name] : e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    onSubmit(e) {
        e.preventDefault()
        const data = {
            nama : this.state.nama,
            label : this.state.label,
            tags : this.state.tags,
            pengertian : this.state.pengertian,
            ilustrasi : this.state.ilustrasi,
            penggunaan : this.state.penggunaan
        }
        const formData = new FormData()
        formData.append('nama', this.state.nama)
        formData.append('label', this.state.label)
        formData.append('tags', this.state.tags)
        formData.append('pengertian', this.state.pengertian)
        formData.append('ilustrasi', this.state.ilustrasi, this.state.ilustrasi.name)
        formData.append('penggunaan', this.state.penggunaan)
        this.props.insertData(formData)
    }

    componentDidMount = () => {
      this.props.getAllData()
    }
    
    static propTypes = {
        data: PropTypes.array.isRequired,
        getAllData : PropTypes.func.isRequired,
        insertData : PropTypes.func.isRequired
    }
    
    render() {
        const { modal, nama, label, tags, pengertian, ilustrasi, penggunaan, labelFilter } = this.state
        const { data } = this.props
        return (
            <div className="card body-content">
            <div className="card-body">
            <div className="row">
            <div className="col-10">
            <h2 className="card-title">Data Glosarium</h2>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-orange btn-block" onClick={this.modalHandler}>+ Tambah Data</button>      </div>
            </div>
            <div className="row">
            <div className="col-6">
            <div className="form-group row">
            <div className="col-sm-10">
            <div className="input-group">
            <input type="text" className="form-control" placeholder="Cari Komponen" aria-label="Search Component" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
            <span className="input-group-text bg-white" id="basic-addon2"><i className="fas fa-search"></i></span>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="col-6">
            <div className="col-6 offset-6 tag">
            <div className="form-group">
            <select name="labelFilter" value={labelFilter} onChange={this.onChange} className="custom-select" required>
            <option value="">Semua Label</option>
            <option value="1">CSS</option>
            <option value="2">PHP</option>
            <option value="3">HTML</option>
            </select>
            </div>
            </div>
            </div>
            </div>
            <div className="table-responsive">
            <table className="table table-bordered table-hover">
            <thead className="thead-light">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nama</th>
            <th scope="col">Label</th>
            <th scope="col">Tags</th>
            <th scope="col">Pengertian</th>
            <th scope="col">Ilustrasi</th>
            <th scope="col">Penggunaan</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Padding</td>
            <td>CSS</td>
            <td>Padding, CSS, Arkademy, Arkademy Glosarium</td>
            <td>Padding adalah properti yang digunakan untuk menghasilkan ruang di sekitar konten elemen, di dalam batasan yang ditentukan</td>
            <td><img src="" alt=""/></td>
            <td>Ketika menggunakan padding...</td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
            {/* Modal */}
            <div className={classnames("modal fade show ", {"in" : modal})} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document" style={{display : "block"}}>
            <div className="modal-content">
            <form onSubmit={this.onSubmit} encType="multipart/form-data">
            <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLongTitle">Tambah Data</h3>
            <button type="button" className="close" onClick={this.modalHandler}>
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">                
            {/* Body */}
            <div className="form-group row">
            <label className="col-sm-2 col-form-label">Nama</label>
            <div className="col-sm-10">
            <input name="nama" value={nama} onChange={this.onChange} type="text" className="form-control" placeholder="Nama Komponen"/>
            </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-2 col-form-label">Label</label>
            <div className="col-sm-10">
            <select name="label" value={label} onChange={this.onChange} className="custom-select">
            <option value="" selected disabled>Pilih Label</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="PHP">PHP</option>
            </select>
            </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-2 col-form-label">Tags</label>
            <div className="col-sm-10">
            <input name="tags" value={tags} onChange={this.onChange} type="text" className="form-control" placeholder="Tags"/>
            </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-2 col-form-label">Pengertian</label>
            <div className="col-sm-10">
            <textarea name="pengertian" value={pengertian} onChange={this.onChange} className="form-control" placeholder="Pengertian" rows="3"/>
            </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-2 col-form-label">Ilustrasi</label>
            <div className="col-sm-10">
            <div className="custom-file">
            <input name="ilustrasi" value='' onChange={this.fileChangedHandler} type="file" className="custom-file-input"/>
            <label className="custom-file-label">{ilustrasi.name ? ilustrasi.name : "Pilih Gambar"}</label>
            </div>
            </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-2 col-form-label">Penggunaan</label>
            <div className="col-sm-10">
            <textarea name="penggunaan" value={penggunaan} onChange={this.onChange} className="form-control" placeholder="Penggunaan" rows="3"/>
            </div>
            </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.modalHandler}>Close</button>
            <button type="submit" className="btn btn-primary">Save</button>
            </div>
            </form>
            </div>
            </div>
            </div>
            </div>      
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.glosarium.data
})

const mapDispatchToProps = 
{
    getAllData,
    insertData
}

export default connect(mapStateToProps, mapDispatchToProps)(RxGlosarium)
