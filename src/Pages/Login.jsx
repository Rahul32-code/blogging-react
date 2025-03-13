import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Importing Lucide icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-black">
          Sign In
        </h2>
        <p className="text-gray-600 text-center mb-6 text-[12px]">Sign In your account</p>
        <form onSubmit={handleRegister} className="space-y-6">

          {/* Email */}
          <div className="relative w-full">
            <label
              className={`absolute left-4 transition-all duration-300 ${
                isFocusedEmail || email
                  ? "top-1 text-xs text-slate-800"
                  : "top-4 text-gray-500"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-4 pt-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 text-base sm:text-lg text-slate-600"
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          {/* Password */}
          <div className="relative w-full">
            <label
              className={`absolute left-4 transition-all duration-300 ${
                isFocusedPassword || password
                  ? "top-1 text-xs text-slate-800"
                  : "top-4 text-gray-500"
              }`}
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} 
              className="w-full p-4 pt-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 text-base sm:text-lg pr-10 text-slate-600"
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Eye Icon for Password Visibility Toggle */}
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} 
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Create Free Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
