import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Header from "./components/Other/Header";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
 
 const [user, setUser] = useState('')
  
 const handlelogin = (email,password)=>{
  if(email=='admin@me.com' && password=='123'){
     setUser('admin')
     console.log(user)
  }
    else if(email=='user@me.com'&& password=='123'){
     setUser('employees')
     console.log(user)
  }
  else{
    alert('invlaid crediantials')
  }
 }


  return ( 
  <>
 {!user ? (<Login handlelogin={handlelogin}/>) : (
user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>)}
</>
 );
}
export default App;
