import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../frontend/src/Components/Sidebar";
import AddEvent from "./pages/AddEvent";
import ListMenu from "./pages/ListMenu";
import AdminTable from "./pages/AdminTable";
import { ToastContainer } from "react-toastify";
const App = () => {
  const [token, settoken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
 
      <div className="flex">
        <ToastContainer/>
<Sidebar  settoken={settoken}/>
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          <Routes>
            {/* <Route path="/admin" element={<Sidebar   settoken={settoken}/> }/> */}
            <Route path="/add" element={<AddEvent token={token} />} />
            <Route path="/list" element={<ListMenu token={token} />} />
            <Route path="/table" element={<AdminTable token={token} />} />
          </Routes>
        </div>
      </div>
      
   
  );
};

export default App;
