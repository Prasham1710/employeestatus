import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { inputValues, handleInputChange, resetForm } = useForm({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValues);
        resetForm();
    }
  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h1 className="text-center"> Employee</h1>
        <div />
      </div>

      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={inputValues.email}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={inputValues.address}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              value={inputValues.phone}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-primary btn-block">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
