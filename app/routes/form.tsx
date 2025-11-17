import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function MarksheetForm() {
  const navigate = useNavigate();

  return (
    <div className="p-5 text-black space-y-5">
      <div className="flex gap-5 items-center h-full">
        <button onClick={() => navigate("/")} >
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold  truncate">
          Central Board of Secondary Education
        </h1>
      </div>
      <p className="text-gray-600 mb-6">Class XII Marksheet</p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-1" htmlFor="name">
            Name (as per Aadhaar)
          </label>
          <input
            id="name"
            type="text"
            defaultValue="Anandhan"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black px-1 py-2"
          />
        </div>
        <div>
          <input
            id="rollNo"
            type="text"
            placeholder="Roll No *"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black px-1 py-2"
            required
          />
          <p className="text-gray-400">Example:1100040</p>
        </div>

        {/* Year */}
        <div>

          <input
            id="year"
            type="text"
            placeholder="Year *"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black px-1 py-2"
            required
          />
          <p className="text-gray-400">Example:20XX</p>

        </div>

        {/* Consent */}
        <div className="flex items-start space-x-2">
          <input
            id="consent"
            type="checkbox"
            defaultChecked
            className="w-4 h-4 mt-1 accent-green-600"
            required
          />

          <label htmlFor="consent" className="text-gray-700 text-sm flex-1">
            I provide my consent to DigiLocker to share my details with the
            Issuers for the purpose of fetching my documents.
          </label>

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className=" fixed bottom-5 left-0 right-0 mx-5 bg-blue-700 text-white rounded-full py-3 text-lg shadow-lg "
        >
          Get Document
        </button>


      </form>
    </div>
  );
}
