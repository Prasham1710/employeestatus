import React from 'react'

const EmployeeItem = () => {
  return (
    <tr className="table-primasry">
      <th>pj</th>
      <td>jain</td>
      <td>yes</td>
      <td>3546454</td>
      <td>
        <div className="d-flex gap-3">
          <span
            type="button"
            className="badge bg-success"
          >
            Edit
          </span>
          <span
            type="button"
            className="badge bg-danger"
          >
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
}

export default EmployeeItem