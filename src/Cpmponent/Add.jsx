import React, { useState } from "react";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setIsAdding }) {
  const [employeeData, setEmployeesData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    date: "",
  });

  const handleAdd = (event) => {
    event.preventDefault();

    if (!Object.values(employeeData).every((emp) => emp !== "")) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required",
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      id: employees.length + 1,
      ...employeeData,
    };

    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Employee Added",
      text: `${employeeData.firstName} ${employeeData.lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee </h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={employeeData.firstName}
          onChange={(event) =>
            setEmployeesData((prevent) => ({
              ...prevent,
              firstName: event.target.value,
            }))
          }
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lasttName"
          value={employeeData.lastName}
          onChange={(event) =>
            setEmployeesData((prevent) => ({
              ...prevent,
              lastName: event.target.value,
            }))
          }
        />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          value={employeeData.email}
          onChange={(event) =>
            setEmployeesData((prevent) => ({
              ...prevent,
              email: event.target.value,
            }))
          }
        />
        <label htmlFor="salary">Salary </label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={employeeData.salary}
          onChange={(event) =>
            setEmployeesData((prevent) => ({
              ...prevent,
              salary: event.target.value,
            }))
          }
        />
        <label htmlFor="date ">Date </label>
        <input
          type="date"
          id="date"
          name="data"
          value={employeeData.date}
          onChange={(event) =>
            setEmployeesData((prevent) => ({
              ...prevent,
              date: event.target.value,
            }))
          }
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add Employee" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cencel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
