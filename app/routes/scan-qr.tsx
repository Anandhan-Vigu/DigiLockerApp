import { QrCode } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function ScanQr() {
  const navigate = useNavigate();

  return (
    <div className="p-5 space-y-5 text-black ">
      <button className="text-2xl font-bold " onClick={() => navigate("/")} >
        <FaArrowLeft size={20} />
      </button>
      <h1 className="text-2xl font-bold">DigiLocker QR Code Scanner</h1>
      <p className="text-gray-600 text-sm ">
        Using this QR Code Scanner, you can scan the QR Code on the certificates available through DigiLocker.
        The scanner helps verify the authenticity of these documents.
      </p>
      <p className="text-gray-500 font-semibold text-sm">
        <b>Note:</b> Now, this scanner scans all the QR Codes.
      </p>
      <img src="/others/scan.jpg" alt="government-employee" className="mx-auto h-64 mt-10"></img>

     

      <button className="fixed  z-5 bottom-5 left-0 right-0 mx-5  bg-indigo-600 text-white  py-3 rounded-full font-bold">
        SCAN NOW
      </button>
    </div>
  );
}
