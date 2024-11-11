import { GiMoneyStack } from "react-icons/gi";
import Cards from "../styleComponents/Cards";
import Layout from "../styleComponents/Layout";
import { TbMoneybag } from "react-icons/tb";
import { LuCopy } from "react-icons/lu";
import { useNavigate } from "react-router";

const Refer = () => {
    const naviget = useNavigate()
  return (
    <>
      <Layout>
        <span className="bg-purple-900 cursor-pointer text-white font-bold text-lg rounded-full p-2 m-3 " onClick={()=> naviget('/landing')}>Back to Landing Page</span>
      <div className="bg-purple-500 rounded-2xl grid justify-center p-5  text-white">
        <span className="text-white text-2xl font-bold">
          Invite a friend and get credit for your next booking!
        </span>
        <div className="grid justify-center ">
          <span className="text-white text-9xl font-bold">
            <TbMoneybag />{" "}
          </span>
          <span className="text-white text-2xl font-bold flex items-center ">
            <GiMoneyStack />
            <span className="">2322 </span>
          </span>

          <p className="mb-10">credits earned</p>
        </div>

        <div className="grid justify-center ">
          <p className="">
            Each time a friend joins, you earn{" "}
            <span className="text-lg font-bold">300 credits!</span>{" "}
          </p>
        </div>

        <div className="flex justify-around items-center p-3 bg-purple-800  rounded-3xl border-dashed border-2 border-purple-50 mb-3">
          <div className="grid justify-center">
            <span>Your referral code</span>

            <span className="text-lg font-bold mt-5">HX/TRH#563344/CFXH</span>
          </div>
          <span className="text-3xl font-bold">
            <LuCopy />
          </span>
        </div>
        <div className="grid justify-center">
          <span>Share your referral code via</span>
          <div className="flex justify-around items-center mt-3">
            <img
              className="w-10 h10 rounded-3xl cursor-pointer"
              src="https://th.bing.com/th/id/OIP.XLR5b123Km1O24np1HU7_gHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7"
              alt="img"
            />
            <img
              className="w-10 h10 rounded-3xl cursor-pointer"
              src="https://th.bing.com/th/id/OIP.bGPD-oClhpU4utiky9MnxgHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7"
              alt="img"
            />
            <img
              className="w-10 h10 rounded-3xl cursor-pointer"
              src="https://th.bing.com/th?q=Twitter+Logo+Free+Download&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.9&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
              alt="img"
            />
          </div>
        </div>
      </div>

      <span className="text-lg font-bold">How to get referral bonus</span>
      <Cards>
        <div className="flex justify-start ">
          <span className="text-2xl font-bold m-5">1.</span>
          <div className="grid">
            <span className="text-lg font-bold">Invite a friend</span>
            <span>using your invite link</span>
          </div>
        </div>
        <div className="flex justify-start  ">
          <span className="text-2xl font-bold m-5">2.</span>
          <div className="grid">
            <span className="text-lg font-bold">They singn up and </span>
            <span>earn your referral bonus</span>
          </div>
        </div>
        <div className="flex justify-start  ">
          <span className="text-2xl font-bold m-5">3.</span>
          <div className="grid">
            <span className="text-lg font-bold">Get bonus credits</span>
            <span>earn your referral bonus</span>
          </div>
        </div>
      </Cards>
      </Layout>
    </>
  );
};

export default Refer;
