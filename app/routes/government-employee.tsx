import { FolderOpen } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function GovernmentEmployee() {
  const navigate = useNavigate();

  return (
    <div className="p-5 text-black space-y-5">
      <button onClick={() => navigate("/")} >
        <FaArrowLeft size={20} />
      </button>
      <h1 className="text-2xl font-bold mb-2 ">Government Employee</h1>
      <p className="text-gray-600 text-sm mb-5">
        Introducing Documents for Government employees. Easily fetch your service records, pay slips, NPS statements, and more from authorized issuers.
      </p>
      <p className="font-bold">My issued Government Documents</p>
      <img src="/others/government-employee.jpg" alt="government-employee" className="mx-auto h-52 mt-18"></img>

      <p className="text-gray-500 text-center">You haven’t fetched any documents yet...</p>
      <button className="bg-indigo-600 text-xl fixed bottom-10 right-10 text-white px-5 py-3 rounded-full font-bold">
        + 
      </button>
    </div>
  );
}
