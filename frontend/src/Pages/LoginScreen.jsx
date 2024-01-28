// src/components/LoginPage.js

import { useState } from 'react';
import NavigationButton from '../Components/NavButton';
import logo from '../assets/logomain.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Login data:', {username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('src/assets/wave-haikei-og.svg')] bg-cover">
      <form onSubmit={handleSubmit} className="p-6 bg-neutral-100 rounded shadow-md w-96">
      <img src={logo} alt="Logo" className="mx-auto h-40" />
        <h2 className="text-lg font-semibold mb-4 text-black text-center">Artisan Log In</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">
           <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
            Username
            </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
            <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
            Password
            </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded w-full"
          />
        </div>
        <NavigationButton label="Login" to="/homepage" className="px-4 py-2 my-2 text-white bg-[#617a4f] rounded hover:bg-emerald w-full"/>
        <div className="mt-4 text-sm text-black-400 hover:underline focus:outline-none">
            <NavigationButton label="Forgot Password?" to="/forgotpassword" />
        </div>
        <div className="mt-2 text-sm text-black-400 hover:underline focus:outline-none">
            <NavigationButton label="Create a new Account" to="/signup" />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;