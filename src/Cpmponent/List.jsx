import React from "react";

function List({ employees, handleEdit, handleDelete }) {
  const formatter = new Intl.NumberFormat("en-in", {
    style: "currency",
    currency: "inr",
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date}</td>
                <td className="text-right">
                  <button
                    className="button muted-button"
                    onClick={() => handleEdit(employee.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    className="button muted-button"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center">
                No Employees
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
