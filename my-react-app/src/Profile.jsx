import React, { useState } from "react";
import "./Profile.css";

function Profile(
    {
        username,
        setUsername,
        email,
        setEmail,
        profilePhoto,
        setProfilePhoto
    })
 {
  
  const [password, setPassword] = useState("");

  const handleUpdate = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="profile-container">
      <h2>Update Profile</h2>

      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>New Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>Profile Photo</label>
      <input type="file" />

      <button onChange={(e)=>{
        const file =e.target.files[0];
        if(file){
            setProfilePhoto(URL.createObjectURL(file));
        }
      }}>
        updateProfile
      </button>
      
    </div>
  );
}

export default Profile;