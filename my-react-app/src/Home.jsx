import React, { useState } from "react";
import "./Home.css";
import  Profile from"./Profile.jsx";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
const [page,setPage]=useState("dashboard");
const[username,setUsername]=useState("charan");
const [email,setEmail]=useState("appu200567@gmail.com");
const[profilePhoto,setprofilePhoto]=useState("https://via.placeholder.com/80");

  return (

    <div>
     
      {/* Navbar */}
      <nav className="navbar">
        <button
          className="menu-btn"
          onClick={() => 
            setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <h2>TeamVerse</h2>

        <ul>
          <li><button><a href="Home.html">home</a></button></li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="main-container">
        {/* Sidebar */}
         
        <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
          <div className="profile">
            <img
              src={profilePhoto}
              alt="profile"
            />
            {sidebarOpen && (
              <>
                <h3>{username}</h3>
                <p>{email}</p>
              </>
            )}
          </div>

          <ul className="menu">
            <li>🏠 Dashboard</li>
            <li onClick={()=>{setPage("Profile")}}>👤 Profile</li>
            <li>💬 Messages</li>
            <li>📂 Projects</li>
            <li>🤝 Connections</li>
            <li>📅 Events</li>
            <li>⚙️ Settings</li>
            <li>❓ Help</li>
            <li>🚪 Logout</li>
          </ul>
        </div>

        {/* Content */}
        <div className="content">
          {page === "dashboard" &&(
            <>
        
          <h1>Welcome to TeamVerse 👋</h1>

          <div className="cards">
            <div className="card">
              <h3>Find Teammates</h3>
              <p>Connect with students from other branches.</p>
              <button>join</button>
            </div>

            <div className="card">
              <h3>Events</h3>
              <p>View workshops and hackathons.</p>
            </div>

            <div className="card">
              <h3>Projects</h3>
              <p>Manage your projects.</p>
            </div>
          </div>
          </>
          )}
          {page ==="Profile" &&( <Profile username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          profilePhoto={profilePhoto}
          setprofilePhoto={setprofilePhoto}/>)}
        </div>
      </div>
    </div>
  );
}

export default Home;