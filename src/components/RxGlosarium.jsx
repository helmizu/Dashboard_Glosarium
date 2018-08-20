import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { getAllData, insertData, getData, deleteData, updateValue, updateData } from '../actions/glosariumAction'
import { modalShow } from '../actions/navAction'

export class RxGlosarium extends Component {
    constructor(props){
        super(props)
        
        this.state = { 
            nama : "",
            label : "",
            tags : "",
            pengertian : "",
            ilustrasiFile : {},
            ilustrasi : "",
            penggunaan : "",
            // table
            labelFilter : "",
            limit : 10,
            page : 1,
            pageNumber : [],
            search : "",
            update : false
        }

        this.modalHandler = this.modalHandler.bind(this)
        this.updateHandler = this.updateHandler.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.fileChangedHandler = this.fileChangedHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    modalHandler(){
        this.props.modalShow(!this.props.modal)
        if (this.state.update) {
            this.setState({update : false})
        }
    }

    updateHandler(label, komponen){
        this.props.modalShow(!this.props.modal)
        this.props.updateValue(label, komponen)
        this.setState({update : true})
    }
    
    deleteHandler(label, id){
        if (window.confirm("Are you sure?")){
            this.props.deleteData(label, id)
        }
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
    }
    
    onSubmit(e) {
        e.preventDefault()

        const formData = new FormData()
        if (this.state.ilustrasiFile.name == null) {
            formData.append('nama', this.state.nama.toLowerCase())
            formData.append('label', this.state.label)
            formData.append('tags', this.state.tags)
            formData.append('pengertian', this.state.pengertian)
            formData.append('ilustrasi', this.state.ilustrasi)
            formData.append('penggunaan', this.state.penggunaan)  
        } else {
            formData.append('nama', this.state.nama.toLowerCase())
            formData.append('label', this.state.label)
            formData.append('tags', this.state.tags)
            formData.append('pengertian', this.state.pengertian)
            formData.append('ilustrasi', this.state.ilustrasiFile, this.state.ilustrasiFile.name)
            formData.append('penggunaan', this.state.penggunaan)
        }
        if (this.state.update) {
            this.props.updateData(this.props.value._id, formData)
        } else {
            this.props.insertData(formData)
        }  
        this.props.modalShow(!this.props.modal)
    }
    
    clickHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    makePagination() {
        const arrayNumber = [];
        for (let i = 1; i <= Math.ceil(this.props.data.length / this.state.limit); i++) {
            arrayNumber.push(i);
            if(i === Math.ceil(this.props.data.length / this.state.limit)){
                this.setState({pageNumber : arrayNumber})
            }
        }
    }
    
    componentDidMount = () => {
        this.props.getAllData()
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.report !== this.props.report) {
            if (this.props.report === "") {

            } else {
                this.props.getAllData()
            }
        }

        if (prevProps.data !== this.props.data) {
            this.setState({
                nama : "",
                label : "",
                tags : "",
                pengertian : "",
                ilustrasiFile : {},
                ilustrasi : "",
                penggunaan : "",
                page : 1
            })
            this.makePagination()
        }

        if (prevProps.value !== this.props.value) {
            this.setState(this.props.value)
        }

        if (prevState.limit !== this.state.limit) {
            this.makePagination()
            this.setState({ page : 1 })
        }

        if (prevState.search !== this.state.search) {
            this.props.getAllData(this.state.search.toLowerCase())
        }

        if (prevState.labelFilter !== this.state.labelFilter){
            if (this.state.labelFilter !== "") {
                this.props.getData(this.state.labelFilter)
            } else {
                this.props.getAllData()
            }
        }

        if (prevProps.modal !== this.props.modal) {
            if (this.props.modal) {
                
            } else {
                this.props.getAllData()
            }
        }
    }
    
    sortData(data = []){
        data.sort(function(a, b){
            var x = a.label.toLowerCase();
            var y = b.label.toLowerCase();
            var c = a.nama.toLowerCase();
            var d = b.nama.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            if (x === y) {
                if (c < d) {return -1;}
                if (c > d) {return 1;}
            }
            return 0;
        })
    }
    
    static propTypes = {
        data: PropTypes.array.isRequired,
        value: PropTypes.object.isRequired,
        report: PropTypes.string.isRequired,
        getData : PropTypes.func.isRequired,
        getAllData : PropTypes.func.isRequired,
        insertData : PropTypes.func.isRequired,
        modal : PropTypes.bool.isRequired,
        modalShow : PropTypes.func.isRequired,
        deleteData : PropTypes.func.isRequired,
        updateValue : PropTypes.func.isRequired,
        updateData : PropTypes.func.isRequired
    }
    
    render() {
        const { nama, label, tags, pengertian, ilustrasi, ilustrasiFile, penggunaan, labelFilter, page, limit, search } = this.state
        const { modal } = this.props
        var no = 1
        this.sortData(this.props.data)
        var tabel = this.props.data.slice((page - 1) * limit, page * limit).map(dt => (
            <tr key={dt._id}>
            <td>{(page - 1) * limit + no++}</td>
            <td className="text-capitalize">{dt.nama}</td>
            <td>{dt.label}</td>
            <td>{dt.tags}</td>
            <td>{dt.pengertian}</td>
            <td><img src={dt.ilustrasi} alt={"Ilustrasi " + dt.nama} width="200px"/></td>
            <td>{dt.penggunaan}</td>
            <td>
                <button type="button" className="btn btn-orange btn-block" onClick={() => this.updateHandler(dt.label, dt.nama)}>Update</button>
                <button type="button" className="btn btn-danger btn-block" onClick={() => this.deleteHandler(dt.label, dt._id)}>Delete</button>
            </td>
            </tr>
        ))
        const renderPageNumbers = this.state.pageNumber.map(number => {
            if (this.state.pageNumber.length > 10){
                if (number < 5){
                    return(
                        <li key={number} className={this.state.page == number ? "page-item active disabled" : "page-item"}><button type="button" value={number} name="page" className={this.state.page == number ? "page-link bg-primary text-white" : "page-link"} onClick={this.clickHandler}>{number}</button></li>
                    )    
                } else if (number > this.state.pageNumber.length - 5) {
                    return(
                        <li key={number} className={this.state.page == number ? "page-item disabled" : "page-item"}><button type="button" value={number} name="page" className={this.state.page == number ? "page-link bg-primary text-white" : "page-link"} onClick={this.clickHandler}>{number}</button></li>
                    )  
                } else {
                    if (number == this.state.page) {
                        if(number === Math.ceil(this.state.pageNumber.length/2)) {
                            return(
                                <li key={number} className="page-item disabled btn-group"><button type="button" value={null} name="page" className="page-link" onClick={this.clickHandler}>...</button><button type="button" value={number} name="page" className="page-link bg-primary text-white" onClick={this.clickHandler}>{number}</button><button type="button" value={null} name="page" className="page-link disabled" onClick={this.clickHandler}>...</button></li>
                            )  
                        } else if (number > 5 && number < Math.ceil(this.state.pageNumber.length/2)) {
                            return(
                                <li key={number} className="page-item btn-group disabled"><button type="button" value={null} name="page" className="page-link disabled" onClick={this.clickHandler}>...</button><button type="button" value={number} name="page" className="page-link bg-primary text-white" onClick={this.clickHandler}>{number}</button></li>
                            )
                        } else if (number < this.state.pageNumber.length - 5 && number > Math.ceil(this.state.pageNumber.length/2)) {
                            return(
                                <li key={number} className="page-item btn-group disabled"><button type="button" value={number} name="page" className="page-link bg-primary text-white" onClick={this.clickHandler}>{number}</button><button type="button" value={null} name="page" className="page-link disabled" onClick={this.clickHandler}>...</button></li>
                            )
                        } else {
                            return(
                                <li key={number} className="page-item active"><button type="button" value={number} name="page" className="page-link" onClick={this.clickHandler}>{number}</button></li>
                            )
                        }
                    } else {
                        if(number === Math.ceil(this.state.pageNumber.length/2)) {
                            return(
                                <li key={number} className="page-item disabled"><button type="button" value={null} name="page" className="page-link" onClick={this.clickHandler}>...</button></li>
                            )  
                        }                    }
                    } 
                } else {
                    return(
                        <li key={number} className={this.state.page == number ? "page-item active disabled" : "page-item"}><button type="button" value={number} name="page" className={this.state.page == number ? "page-link bg-primary text-white" : "page-link"} onClick={this.clickHandler}>{number}</button></li>
                    )
                }
            })
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
                <input name="search" value={search} onChange={this.onChange} type="text" className="form-control" placeholder="Cari Nama Komponen"/>
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
                <option value="CSS">CSS</option>
                <option value="HTML">HTML</option>
                <option value="PHP">PHP</option>
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
                <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {tabel}
                </tbody>
                </table>
                </div>
                <div className="row">
                <div className="col-6">
                <select value={this.state.limit} name="limit" className="form-control limit" onChange={this.onChange}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                </select>
                </div>
                <div className="col-6">
                <nav className="float-right">
                <ul className="pagination">
                <li className={parseInt(this.state.page, 10)-1 < 1 ? "page-item disabled" : "page-item"}><button type="button" value={parseInt(this.state.page, 10)-1} name="page" className="page-link" onClick={this.clickHandler}>Previous</button></li>
                {renderPageNumbers}
                <li className={parseInt(this.state.page, 10)+1 > this.state.pageNumber.length ? "page-item disabled" : "page-item"}><button type="button" value={parseInt(this.state.page, 10)+1} name="page" className="page-link" onClick={this.clickHandler}>Next</button></li>
                </ul>
                </nav>
                </div>
                </div>
                </div>
                
                {/* Modal */}
                <div className={classnames("modal fade show", {"in" : modal})} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                <input name="nama" value={nama} onChange={this.onChange} type="text" className="form-control text-capitalize" placeholder="Nama Komponen"/>
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
                <input name="ilustrasiFile" value="" onChange={this.fileChangedHandler} type="file" className="custom-file-input"/>
                <label className="custom-file-label">{ilustrasiFile.name ? ilustrasiFile.name : (ilustrasi ? ilustrasi.slice(0, 70) : "Pilih Gambar")}</label>
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
        data : state.glosarium.data,
        modal : state.nav.modal,
        value : state.glosarium.value,
        report : state.glosarium.report
    })
    
    const mapDispatchToProps = 
    {
        getAllData,
        insertData,
        getData,
        modalShow,
        deleteData,
        updateValue,
        updateData
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(RxGlosarium)
    