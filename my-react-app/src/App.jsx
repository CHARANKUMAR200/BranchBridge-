import React, { useState } from "react";
import "./App.css";
import Home from "./Home";

 


function App() {
  const [isLogin, setIsLogin] = useState(false);
  
; 
 
 
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  
  
  const[email,setEmail]=useState("");
  const[showHome,setShowHome]=useState(false);
  if(showHome){
  return <Home/>;
}
   
  const handleLogin=()=>{
    console.log("username="+username);
    console.log("password="+password);
    let firstcar=username[0];
    
    
      if(username === ""){
      alert("username not be null");
      
    }
   else if(!isNaN(username.charAt(0))){
  
      alert("username must start with letters ");
    }
    else if(password===""){
      alert("the password not be null");

    }
       
    
    else {
      
      setShowHome(true);
    }
    

    
    
  }
  const handleCreate=()=>{
    const emailRegex=/^[^\s@]+\.[^\s@]+$/;
    console.log("username=",+username);
    console.log("password=",+password);
    console.log("email="+email);
    
    if(username==="" ){
      alert("username and password not be null");

    }
    else if (password===""){
      alert("password not be null");
      }
    else if(!emailRegex.test(email)){
      alert("enter the valid email");
    }
    else if(!password ===[0-9,A-z,a-z]) {
      alert("password is not strong")

    }
    else{
      alert("Account created.");
    }

  }
  

  return (
    <div className="container">
      <div className="form-box">
        <h1>TeamVerse</h1>
        

        <div className="buttons">
          <button onClick={() => setIsLogin(true)}>Login</button>
          <button onClick={() => setIsLogin(false)}>Create Account</button>
        </div>

        {isLogin ? (
          <form>
            <h2>Login</h2>

            <input
            type="text"
              placeholder="username"
             onChange={(e)=> setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button className="submit-btn" type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        ) : (
          <form>
            <h2>Create Account</h2>

            <input
              type="text"
              placeholder="username"
              onChange={(e)=>setUsername(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />

            <select>
              <option>Select Branch</option>
              <option>BCA</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>ISE</option>
              <option>Mechanical</option>
            </select>

            <input
              type="text"
              placeholder="Skills"
            />

            <button className="submit-btn" onClick={handleCreate}>
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );

}
export default App;