import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Cpmponent/Dashboard";
import Add from "./Cpmponent/Add";
import Edit from "./Cpmponent/Edit";

function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="add-employee" element={<Add />} />
        <Route path="edit-employee" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
