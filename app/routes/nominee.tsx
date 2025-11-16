import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Nominee() {
  const navigate = useNavigate();

  return (
    <div className="p-5 space-y-5 text-black relative">
      <button className="text-2xl font-bold " onClick={() => navigate("/")} >
        <FaArrowLeft size={20} />
      </button>
      <h1 className="text-2xl font-bold ">Nomination Service</h1>
      <p className="text-gray-600 text-sm">
        A Nominee is a person that you may name in your DigiLocker application as the person who may be allowed to access your DigiLocker account in future.
      </p>


      <img src="/others/nominee.jpg" alt="nominee" className="mx-auto h-72 mt-18"></img>


      <button className="bg-indigo-700 fixed bottom-5  left-0 right-0 mx-5  text-white py-3 rounded-full font-medium">
        Add Nominee
      </button>

    </div>
  );
}
