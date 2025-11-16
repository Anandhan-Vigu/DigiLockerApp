import { ArrowLeft } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export default function Abha() {
  const navigate = useNavigate(); // <-- add this

  return (
    <div className="min-h-screen space-y-5 p-5 w-full text-black">
      {/* Top Bar */}
      <div className="">
        <button className="text-2xl font-bold " onClick={() => navigate("/")} >
          <FaArrowLeft size={20} />
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold">
        DigiLocker ABHA
      </h1>

      {/* Description */}
      <p className=" text-sm">
        DigiLocker ABHA is a part of Ayushman Bharat Health Account (ABHA). It
        is the first step towards creating safer and efficient digital health
        records for you and your family. It allows you to access and share your
        health data with your consent, with participating healthcare providers.
      </p>

      <p className="font-medium mb-6">My ABHA Address's</p>

          <img src="/others/abha.jpg" alt="government-employee" className="mx-auto h-52 mt-18"></img>


   
      <div className="fixed bottom-5 left-0 w-full px-5 z-10">
        <button className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-full text-center text-base">
          FETCH ABHA CARD
        </button>

        <p className="text-gray-700 mt-4 text-center">
          Don't have ABHA NUMBER?{" "}
          <span className="text-indigo-600 font-bold">Register Now!</span>
        </p>
      </div>


    </div>
  );
}
