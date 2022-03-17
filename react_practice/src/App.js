import './App.css';
import React, { createContext, useState } from 'react';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ParrentButton from "./Components/ParrentButton";
import Navbar from './Components/Navbar';
import Login from "./Components/Login";
import UseMemo from "./Components/UseMemo"


export const UserContext = createContext(null)

function App() {
  const [userName, setUserName] = useState("")

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="App">
        <h1>On boarding practice</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/useImperativeHandle" element={<ParrentButton/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/useMemo" element={<UseMemo/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
