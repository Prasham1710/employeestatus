import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { EmployeeForm } from "./components/EmployeeForm";
import { EmployeeList } from "./components/EmployeeList";

export const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <Routes>
        <Route path="/" element={<EmployeeList/>} />
        <Route path="/create-employee" element={<EmployeeForm/>} />
        <Route path="/edit-employee/:id" element={<EmployeeForm/>} />
      </Routes>
      </div>
    </div>
  )
}