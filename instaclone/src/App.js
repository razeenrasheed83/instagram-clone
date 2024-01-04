import Login from "./Pages/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";


function App() {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
