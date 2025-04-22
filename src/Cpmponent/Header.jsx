import React from "react";
// import { useNavigate } from "react-router-dom";

function Header({ setIsAdding }) {
  // const naviGate = useNavigate();
  return (
    <div>
      <h1>Employee Management System</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Employees
        </button>
      </div>
    </div>
  );
}

export default Header;
