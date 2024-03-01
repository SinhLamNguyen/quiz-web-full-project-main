import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, loginRequest, signUpRequest } from '../../services/api';
import { AuthContext } from '../../AuthProvider';

function SignupForm() {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
    console.log("email:", email);
    console.log("phone:", phone);

    const result = await loginRequest(username, password, email, phone);
    if (result.success === 200) {
      const token = result.data.message;
      const user = result.data;
      login(token, user);
      // signup(user);
      navigate('/login');
    }
    // navigate('/admin');
    setUsername('');
    setPassword('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="flex justify-center items-center h-auto">
      <form onSubmit={handleSubmit} className="bg-white px-4 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className=" text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;