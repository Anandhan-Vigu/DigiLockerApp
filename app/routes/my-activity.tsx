import { FileText } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";


export default function MyActivities() {
  const activities = [
    { text: "`UMANG` of `UMANG` accessed the list of your issued documents.", time: "2025-11-08 20:48:25" },
    { text: "You authorized access to `UMANG` of `UMANG`", time: "2025-11-08 20:48:22" },
    { text: "You have successfully signed in to DigiLocker.", time: "2025-11-08 20:45:25" },
  ];
  const navigate = useNavigate();


  return (
    <div className="p-5 space-y-5 text-black">
      <button className="text-2xl font-bold " onClick={() => navigate("/")} >
        <FaArrowLeft size={20} />
      </button>
      <h1 className="text-2xl font-semibold mb-2">My Activities</h1>
      <p className="text-gray-600 text-sm">
        Here you can find all the activities performed in your DigiLocker account.
      </p>

      <div className="space-y-4">
        {activities.map((item, i) => (
          <div key={i} className="flex gap-3 items-center">
            <img src="/icons/my-activities/myactivitypdf.png" className="w-14 h-14 bg-blue-100 rounded-2xl"></img>
            <div>
              <p className="text-sm text-gray-700">{item.text}</p>
              <p className="text-xs text-gray-500 mt-2">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
