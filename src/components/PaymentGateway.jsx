import { useNavigate } from "react-router";
import Cards from "../styleComponents/Cards";
import Layout from "../styleComponents/Layout";
import { GiCheckMark } from "react-icons/gi";
import { useSelector } from "react-redux";

const PaymentGateway = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.items.payAmount);

  // dummy data
  const cdt = items === 14500 ? 15000 : 0 || items === 58800 ? 60000 : 0;

  return (
    <>
      <Layout>
        <div className="grid ">
          <div className="grid justify-center items-center m-3">
            {" "}
            <span className="bg-purple-500 w-20 h-20 rounded-full flex justify-center items-center text-white font-bold text-5xl">
              <GiCheckMark />
            </span>{" "}
          </div>

          <span className="m-3 flex justify-center items-center text-black font-bold text-xl">
            Credits Added to Wallet
          </span>
          <span className="font-bold text-lg">Details</span>
          <Cards>
            <div>
              <div className="flex justify-between items-center mb-3">
                <span>Order ID</span>
                <span>#HJDVUY2387JHWE</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span>Credits</span>
                <span>₹{cdt}</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span>Paid Via</span>
                <span>PhonePe UPI</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span>Amount</span>
                <span>₹{items}</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span>Convenience Fees</span>
                <span>0</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-3 bg-purple-300 h-10 p-5 rounded-2xl text-black font-bold text-xl">
              <span>Paid Amount</span>
              <span>₹{items}</span>
            </div>
          </Cards>

          <span
            onClick={() => navigate("/landing")}
            className=" cursor-pointer m-10 bg-purple-500 h-20 rounded-full flex justify-center items-center text-white font-bold text-lg"
          >
            View Updated Balance
          </span>
        </div>

      </Layout>
    </>
  );
};

export default PaymentGateway;
