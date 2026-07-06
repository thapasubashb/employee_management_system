import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Header from "./components/Other/Header";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/Authprovider";








const App = () => {
 
 const [user, setUser] = useState('')
  const authData =  useContext(AuthContext)
  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem('loggedInUser')
      setUser(loggedInUser.role)
    }
  }, [authData])
  





  
 const handlelogin = (email,password)=>{
  if(email=='admin@me.com' && password=='123'){
     setUser("admin")
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
    else if(authData && authData.employees.find((e)=>email==e.email && e.password == password)){
     setUser('employees')
     localStorage.setItem('loggedInUser',JSON.stringify({role:'employees'}))
  }
  else{
    alert('invlaid crediantials')
  }
 }




 
  return ( 
  <>
  {!user ? <Login handlelogin={handlelogin}/>:""}
  {user  == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
 {/* {!user ? (<Login handlelogin={handlelogin}/>) : (
user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>)} */}
</>
 );
}
export default App;

