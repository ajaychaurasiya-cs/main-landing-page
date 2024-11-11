// components/Login.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (user) {
      navigate("/landing");
    }
  }, [user]);

  return (
    <>
      

      <div className="grid justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="grid justify-center items-center bg-purple-500 p-10 rounded-3xl w-96">
            <span className="text-xl font-bold">Username</span>
            <input
              className="mb-5 outline-none p-3 rounded-full"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <span className="text-xl font-bold">Password</span>
            <input
              className="mb-5 outline-none p-3 rounded-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="bg-white rounded-full text-xl font-bold"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p>{error.message || "Login failed"}</p>}
          </div>
        </form>
      </div>
      {/* Login info */}
      <div className="grid justify-center items-center">
        <div className="grid justify-center items-center bg-purple-200 p-10 rounded-3xl w-96">
          <p className="mb-5">
            !You can use this Username and Password or visit dummyjson.com for
            more about username and password.
          </p>

          <p className="font-bold flex items-center">
            <FaUser /> female
          </p>
          <p>username: emilys</p>
          <p>password: emilyspass</p>

          <p className="font-bold flex items-center">
            <FaUser /> male
          </p>
          <p>username: michaelw</p>
          <p>password: michaelwpass</p>
        </div>
      </div>
    </>
  );
};

export default Login;
