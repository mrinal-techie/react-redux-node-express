
import './App.css';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import ShowUsers from './components/ShowUsers';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/all" element={<AllUsers/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/edit/:id" element={<EditUser/>}  />
        </Routes>
    </div>
);
}

export default App;
