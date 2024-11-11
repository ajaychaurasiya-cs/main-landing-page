// components/Header.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AddCredits from "./AddCredits";
import Layout from "../styleComponents/Layout";
import { HiMiniCheckBadge } from "react-icons/hi2";
import AvailableCredits from "./AvailableCredits";

const LandingPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { firstName, lastName, gender } = user || "";

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <Layout>
      <div className=" flex justify-between border-gray-400 p-3 rounded-xl border-2">
        <div className="flex">
          <div className="w-20 h-20 rounded-full m-3">
            {gender === "female" ? (
              <img
                className="rounded-full"
                src="https://th.bing.com/th/id/OIP.3dCaxs7dL2vi1FTLTOuevQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.9&pid=1.7"
                alt="img"
              />
            ) : (
              <img
                className="rounded-full"
                src="https://th.bing.com/th/id/OIP.iOJ3d7QnoKo7X0GrBQf97gHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt="img"
              />
            )}
          </div>

          <span className="grid sm:text-sm">
            <span className="text-xl font-bold ">
              {firstName} {lastName}
            </span>
            <span className="">+91 89878476</span>
          </span>
        </div>
        <span className="flex justify-center items-center bg-purple-300 p-2 h-10 rounded-full text-md">
          {" "}
          <HiMiniCheckBadge /> verified
        </span>
        </div>
        <div className="mb-5 mt-5">
      <AvailableCredits /></div>
      <div className="mb-5 mt-5">
      <AddCredits /></div>
      <span className="bg-purple-900 cursor-pointer text-white font-bold text-lg rounded-full p-2 m-3 " onClick={()=> navigate('/refer')}>Refer Page</span>
    </Layout>
  );
};

export default LandingPage;
