import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <>
      <div className="drop-shadow-lg h-16 flex justify-around items-center ">
        <span className=" bg-purple-500 rounded-full w-12 h-12 text-white text-3xl font-bold flex justify-center items-center">
          <IoIosArrowBack />
        </span>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold"> My Wallet</span>
        </div>
        {user?<span className="bg-purple-500 rounded-full h-10 p-2 text-white text-3xl font-bold flex justify-center items-center">
          <button onClick={handleLogout}>Logout</button>
        </span>:''}
      </div>
    </>
  );
};

export default Header;
