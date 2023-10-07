import React from 'react'
import EmployeeItem from './EmployeeItem';

export const EmployeeList = () => {
  return (
    <div>
      <h1 className="my-5 text-center">Manage Employees</h1>
      <div className="card bg-secondary p-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <EmployeeItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}
