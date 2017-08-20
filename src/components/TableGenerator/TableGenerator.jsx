import React from 'react';

function renderHeaders() {
  return(
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Username</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Company</th>
      <th>Website</th>
    </tr>
  )
}

function renderBody(data) {
  return(
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.username}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>{data.company.name}</td>
      <td>{data.website}</td>
    </tr>
  )
}

const TableGenerator = ({userData}) => {
  return(
    <div>
      <table>
        <tbody>
          {renderHeaders()}
          {userData.map(data => renderBody(data))}
        </tbody>
      </table>
    </div>
  )
}

export default TableGenerator;