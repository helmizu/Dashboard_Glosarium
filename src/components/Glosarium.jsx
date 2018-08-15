import React, { Component } from 'react'

export class Glosarium extends Component {
  render() {
    return (
      <div className="card body-content">
      <div className="card-body">
      <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nama</th>
            <th scope="col">Label</th>
            <th scope="col">Tags</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
      </table>
      </div>
      </div>
      </div>
    )
  }
}

export default Glosarium
