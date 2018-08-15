import React, { Component } from 'react'
import classnames from 'classnames'

export class Glosarium extends Component {
    constructor(props){
        super(props)

        this.state = { modal : false }
        this.modalHandler=this.modalHandler.bind(this)
    }
  
    modalHandler(){
        this.setState({
            modal : !this.state.modal
        })
    }

    render() {
    const { modal } = this.state
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
                <select className="custom-select" required>
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
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
      </table>
      </div>
      </div>
      <div className={classnames("modal fade show ", {"in" : modal})} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document" style={{display : "block"}}>
                <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLongTitle">Tambah Data</h3>
                    <button type="button" className="close" onClick={this.modalHandler}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">                
                {/* Body */}
                <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Nama</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Nama Komponen"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Label</label>
                    <div className="col-sm-10">
                    <select className="custom-select">
                        <option selected disabled>Pilih Label</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Tags</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Tags"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Pengertian</label>
                    <div className="col-sm-10">
                    <textarea className="form-control" placeholder="Pengertian" rows="3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Ilustrasi</label>
                    <div className="col-sm-10">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input"/>
                        <label class="custom-file-label" for="inputGroupFile03">Pilih Gambar</label>
                    </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Penggunaan</label>
                    <div className="col-sm-10">
                    <textarea className="form-control" placeholder="Penggunaan" rows="3"/>
                    </div>
                </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={this.modalHandler}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
}

export default Glosarium
