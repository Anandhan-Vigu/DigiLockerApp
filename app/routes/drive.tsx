import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

// ✅ Move JSON data outside
const folders = [
  { name: "Documents", color: "bg-blue-100", text: "text-blue-600" },
  { name: "Education", color: "bg-yellow-100", text: "text-yellow-600" },
  { name: "Health", color: "bg-green-100", text: "text-green-600" },
];

export default function DigiLockerDrive() {
  const navigate = useNavigate();

  return (
    <div className="bg-indigo-700 text-black min-h-screen flex flex-col h-full ">
      {/* Header */}
      <header className="px-4 py-6 text-white">
        <button className="text-2xl font-bold" onClick={() => navigate("/")}>
          <FaArrowLeft size={20} />
        </button>

        <div className="flex flex-col gap-1 mt-5">
          <h1 className="text-xl font-semibold">DigiLocker Drive</h1>
          <p className="text-sm mt-3">
            *Documents in DigiLocker Drive are NOT treated as authentic original
            documents.
          </p>
        </div>

        {/* Storage bar */}
        <div>
          <div className="mt-5 font-semibold">Used 0.0 byte/1.00 GB</div>
          <div className="w-full bg-blue-950 rounded-full h-1 mt-3">
            {/* Uncomment to show progress */}
            {/* <div className="bg-green-500 h-1 rounded-full" style={{ width: "30%" }}></div> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-white flex flex-col grow justify-between h-full mt-4 rounded-t-2xl px-5 py-6">
        {/* Folder List */}
        <div>
          {folders.map(({ name, color, text }) => (
            <div
              key={name}
              className="flex items-center justify-between py-2 "
            >
              <div
                className={`flex items-center justify-center`}
              >
                <div className="">
                  <div className="text-lg ">{name}</div>
                  <div className="text-sm text-gray-400">0.0 byte</div>
                </div>
              </div>

              <button >⋮</button>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-700 text-white rounded-full px-6 py-3 font-semibold text-base">
            ＋ New
          </button>
        </div>
      </div>
    </div>
  );
}
