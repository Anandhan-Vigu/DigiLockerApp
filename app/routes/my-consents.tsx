import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function MyConsents() {
  const navigate = useNavigate(); // <-- add this

  return (
    <div className="min-h-screen space-y-5 text-black p-5">
      <button className="text-2xl font-bold " onClick={() => navigate("/")} >
        <FaArrowLeft size={20} />
      </button>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold ">My Consents</h1>
        <p className="text-sm text-gray-700">You gave these sites and apps consents to some of your DigiLocker documents. Remove consent from those you no longer trust or use</p>
        <div className="space-y-4 ">
          {[
            { name: 'UMANG', date: '08 Nov 2025 20:25:32', status: 'Active', image: '/icons/my-consents/umang.png' },
            { name: 'Digio', date: '20 Feb 2025 18:22:26', status: 'Expired', image: '/icons/my-consents/digio.png' },
            { name: 'Digiotech Solutions Private Limited', date: '03 Oct 2024 14:26:15', status: 'Expired', image: '/icons/my-consents/digio.png' }
          ].map(({ name, date, status,image }) => (
            <div className="flex items-center border-b border-gray-300 pb-4 gap-3">
              <img src={image} alt={name} className="w-10 h-10"></img>
              <div key={name} className=" flex flex-col gap-1">
                <div className="font-semibold">{name}</div>
                <div className="text-xs flex items-center gap-5 ">
                  <p className="text-sm text-gray-400">{date}</p>
                  <p className={`text-sm ${status === 'Active' ? 'text-green-600' : 'text-orange-500'}`}>{status}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
