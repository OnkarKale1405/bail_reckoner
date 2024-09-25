import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaFingerprint } from 'react-icons/fa';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  // Multilingual roles array
  const roles = [
    { value: 'legal advisor', label: 'Legal Advisor' },
    { value: 'judicial authority', label: 'Judicial Authority' },
    { value: 'undertrial prisoner', label: 'undertrial prisoner' },
    { value: 'undertrial prisoner', label: 'विचाराधीन कैदी (Hindi)' },
    { value: 'undertrial prisoner', label: 'विचाराधीन कैदी (Marathi)' },
    { value: 'undertrial prisoner', label: 'અન્ડરટ્રાયલ કેદી (Gujarati)' },
    { value: 'undertrial prisoner', label: 'అండర్ ట్రయల్ ఖైదీ (Telugu)' },
    { value: 'undertrial prisoner', label: 'விசாரணைக் கைதி (Tamil)' },
    // Add more languages as needed
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDF2F7]">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-8">
          {/* Register Card */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mt-2">Sign Up</h2>
          </div>
          <form id="formAuthentication" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-1 text-sm font-medium text-gray-700">Role</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                id="role"
                name="role"
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                <option value="">Select role</option>
                {roles.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the
                  <Link to="#" className="text-blue-500 mx-1">privacy policy & terms</Link>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#3182ce] hover:bg-[#2B6CB0] text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign up
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            <span>Already have an account?</span>
            <Link to="/login" className="text-blue-500 hover:underline mx-1">Sign in instead</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;