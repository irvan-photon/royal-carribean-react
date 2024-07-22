

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // Simulate a login process
    // After login is successful, navigate to MyProfile
    navigate('/myprofile');
  };

  return (
    <div className="flex flex-col items-center pb-2 mx-auto w-full" style={{ backgroundColor: '#336296', maxWidth: '480px' }}>
      <div className="flex flex-col pb-6 mt-40 w-full text-black bg-white border border-solid border-neutral-200" style={{ fontFamily: '510', maxWidth: '357px' }}>
        <div className="justify-center items-start px-6 py-6 text-lg leading-5 bg-neutral-200">
          Enter Your Account Information
        </div>
        <div className="flex flex-col px-3 mt-7 text-xs leading-5">
          <div>Email address or username</div>
          <input
            type="text"
            className="justify-center items-start p-3 mt-3.5 text-sm leading-5 border border-solid border-zinc-300"
            placeholder="Email address or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-5">Password</div>
          <input
            type="password"
            className="justify-center items-start px-3 py-3.5 mt-3.5 text-sm leading-5 whitespace-nowrap border border-solid border-zinc-300"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className="flex gap-2 self-start mt-3.5">
            <input
              type="checkbox"
              className="shrink-0 border border-solid border-zinc-300 h-[21px] w-[21px]"
            />
            <div className="my-auto">Stay logged in</div>
          </div>
          <div className="mt-5">Forgot Username or Password?</div>
          <button
            className="justify-center items-center px-16 py-5 mt-5 text-base leading-6 text-center uppercase"
            style={{ backgroundColor: '#dff2ff' }} // Slightly darker than the theme color
            onClick={handleLogin}
          >
            Log In
          </button>
          <div className="mt-7 leading-6 uppercase">
            Need a Brand Name Account? <span className="font-bold uppercase">Register</span>
          </div>
        </div>
      </div>
    </div>
  );
}