import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./user_components/Home";
import Findjobs from "./user_components/Findjobs";
import Dashboard from "./user_components/Dashboard";
import Jobdetails from "./user_components/Jobdetails";
import Register from "./user_components/Register";
import Login from "./user_components/Login";
import Contact from "./user_components/Contact";
import Registercompany from "./user_components/Registercompany";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/findjobs" element={<Findjobs/>} />
        <Route path="/dashboard/*" element={<Dashboard/>}/>
        <Route path="/findjobs/jobdetails/:id" element={<Jobdetails/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/signup" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/registercompany" element={<Registercompany/>} />
        <Route path="/jobdetails/:id" element={<Jobdetails/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
