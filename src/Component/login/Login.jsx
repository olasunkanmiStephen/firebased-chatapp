import React, { useState } from 'react';
import '../login/login.css';
import { toast } from 'react-toastify';  // Make sure you have react-toastify installed and imported

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.warn("Hello");
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Handle create account logic here
  };

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name='email' placeholder='Email...' />
          <input type="password" name='password' placeholder='Password...' />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleCreateAccount}>
          <label htmlFor="file">
            <img src={avatar.url || "avatar.png"} alt="" />
            <p>Upload an image</p>
          </label>
          <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
          <input type="text" name='username' placeholder='Username' />
          <input type="email" name='email' placeholder='Email' />
          <input type="password" name='password' placeholder='Password...' />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
