import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setmsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setmsg("Successfully signed up");
      setTimeout(() => navigate("/Profile"), 2000);
    } catch (error) {
      setmsg(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[400px] p-6 bg-gray- rounded-xl shadow-md text-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm bg-gray-300 shadow-xl transform transition hover:shadow-2xl duration-300 hover:scale-105 active:scale-105"
        >
          <h1 className="text-2xl mb-4 font-semibold text-center mt-3">
            Signup
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
            className="w-full text-white bg-red-900 py-2 rounded-2xl hover:shadow-md hover:bg-red-800"
          >
            Submit
          </button>

          <p className="text-xs text-center text-red-600 font-normal">{msg}</p>

          <p className="text-center mt-2 text-gray-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/Login")}
              className="hover:text-blue-800 hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
