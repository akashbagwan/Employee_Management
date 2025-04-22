import React, { useState } from "react";
import Swal from "sweetalert2";
import { employeesData } from "./../Data";
import Header from "./Header";
import Add from "./Add";
import List from "./List";
import Edit from "./Edit";

function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const emp = employees.find((e) => e.id === id);

    Swal.fire({
      icon: "warning",
      title: "Are You Sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: `You Want Delete ${emp.firstName}`,
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      didRender: () => {
        const $ = (s) => document.querySelector(s);
        $(".swal2-actions").style.gap = "10px";
        [".swal2-confirm", ".swal2-cancel"].forEach((sel) => {
          Object.assign($(sel).style, {
            background: sel.includes("confirm") ? "#e74c3c" : "#95a5a6",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px",
            cursor: "pointer",
          });
        });
      },
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: `${emp.firstName} ${emp.lastName}'s data has been deleted`,
          timer: 1500,
          showConfirmButton: false,
        });
        setEmployees(employees.filter((e) => e.id !== id));
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />

          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}

      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Dashboard;
