import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser({
      email,
      password,
    });

    localStorage.setItem(
      "token",
      data.token
    );

    alert("Login Successful 🎉");

    navigate("/dashboard");
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Login Failed"
    );
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          CampusOne
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Smart Student Life Management Platform
        </p>

        <form
           onSubmit={handleSubmit}
           className="space-y-5"
        >

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
               type="password"
               placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;