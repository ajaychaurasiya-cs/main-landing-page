import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAmount, addItem } from "../redux/dataSlice";
import { offerCredits } from "../dummydata/offerCredits";
import Cards from "../styleComponents/Cards";
import { RiRadioButtonFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const AddCredits = () => {
  const [enterAmount, setEnterAmount] = useState('');
  const [radioBtn, setRadioBtn] = useState(0);

  const navigate = useNavigate();

  //   radio btn click
  const radioHandle = (id) => {
    setRadioBtn(id);
    const ft = items.find((i) => id === i.id);
    setEnterAmount(ft.offCredit);
  };

  //   offer credits
  const items = useSelector((state) => state.items.list);

  const dispatch = useDispatch();

  //   enter amount credits
  const handleAddItem = () => {
    if (enterAmount) {
      dispatch(addAmount(enterAmount));
      setEnterAmount(''); // Clear input after adding
    }
    if (enterAmount > 0) {
      navigate("/payment-gateway");
    }
  };

  //  dummy offerCredit
  useEffect(() => {
    if (items) {
      dispatch(addItem(offerCredits));
    }
  }, [items.length < 0]);

  return (
    <>
      <Cards>
        <div className="grid">
          <div className="flex justify-between mb-3">
            <span className="">
              <span className="text-xl text-black font-bold mb-3">
                {" "}
                All credits to your wallet{" "}
              </span>
              <p className="">Choose from our most purchased options</p>
            </span>
            <span className="bg-purple-300 p-2 h-10 rounded-full grid justify-center items-center">
              1Credit=1
            </span>
          </div>

          <div className="flex overflow-x-auto mb-4">
            {items.map((elem) => {
              const { id, mainCredit, off, offCredit } = elem;
              return (
                <div className="m-3" key={id}>
                  <Cards>
                    <div className="flex justify-between items-center">
                      <span
                        className="cursor-pointer"
                        onClick={() => radioHandle(id)}
                      >
                        {radioBtn === id ? (
                          <span className="text-purple-500 text-2xl font-bold">
                            {" "}
                            <RiRadioButtonFill />
                          </span>
                        ) : (
                          <span className="text-purple-50 text-2xl font-bold">
                            {" "}
                            <RiRadioButtonFill />
                          </span>
                        )}
                      </span>
                      <span className="m-3">
                        <span className="text-xl text-black font-bold">
                          {mainCredit}
                        </span>
                        Credits
                      </span>

                      <span className="text-lg text-black font-bold text-nowrap">
                        {off}% off
                      </span>
                    </div>
                    <p>with</p>
                    <span className="flex justify-evenly mt-3">
                      <del className="text-xl text-gray-400 font-bold">
                        {mainCredit}
                      </del>
                      <span className="text-xl text-black font-bold">
                        {offCredit}
                      </span>
                      Credits
                    </span>
                  </Cards>
                </div>
              );
            })}
          </div>

          <p>or</p>

          <div className="mt-4 grid ">
            <span className="text-xl text-black font-bold ">
              Enter amount Manually
            </span>
            <input
              className="outline-none p-2 rounded-3xl text-start mt-3"
              type="number"
              value={enterAmount}
              onChange={(e) => setEnterAmount(e.target.value)}
              placeholder="Enter Amount"
            />

            <div
              className=" flex justify-center items-center bg-purple-500 text-white text-2xl rounded-2xl text-center mt-8 cursor-pointer"
              onClick={handleAddItem}
            >
              <span>Proceed to Pay</span>
            </div>
          </div>
        </div>
      </Cards>
    </>
  );
};

export default AddCredits;
