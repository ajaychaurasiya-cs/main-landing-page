import { useSelector } from "react-redux";
import Cards from "../styleComponents/Cards";
import { GiMoneyStack } from "react-icons/gi";


const AvailableCredits = () => {
    const items = useSelector((state) => state.items.payAmount);

    return ( <>
    <Cards>
        <span className="text-lg font-bold">Available Credits </span>
        <div className="grid">
        <span className="text-2xl font-bold flex items-center"> <span className="text-purple-500"><GiMoneyStack/></span> ₹{items}</span>
        <p>Credits can be used for all bookings, food orders, events.</p>
        <span className="bg-gray-400 h-1 rounded-full mt-5 mb-5"></span>
        <div className="flex justify-start"><spna className="flex justify-center items-center bg-purple-400 p-2 h-10 rounded-full text-md">What are Credits?</spna></div>
        
        </div>

    </Cards>
    </> );
}
 
export default AvailableCredits;