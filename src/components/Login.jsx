import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Signup from "./Signup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setmsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setmsg("Logged in");
      navigate("/profile");
    } catch (error) {
      setmsg("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[400px] p-6 bg-white rounded-xl shadow-md text-center">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm bg-gray-300 shadow-xl tranform-transition hover:shadow-2xl transform-transition duration-300 hover:scale-105 active:scale-105  "
        >
          <h1 className="text-2xl mb-4 font-semibold text-center mt-3">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-3 mb-3 p-2 border border-red-900 rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-3 mb-5 p-2 border border-red-900 rounded-xl"
          />

          <button
            type="submit"
            className="w-full text-white bg-red-900 py-2 rounded-2xl hover:shadow-xl bg-gray-400 "
          >
            Login
          </button>

          {msg && (
            <p className="text-sm mt-2 text-center text-red-600 font-normal">
              {msg}
            </p>
          )}

          <p className="text-center mt-1  text-gray-400">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/Signup")}
              type="button"
              className="hover:text-blue-800 hover:underline"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
