import { RefreshCcw, MoreVertical, Home, Search, Award, User } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineCloud, HiOutlineDocument } from "react-icons/hi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

export default function IssuedDocuments() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#4A00E0] pt-10 pb-6 px-5 rounded-b-3xl relative">
        
        <div className="flex justify-between items-center mb-6">
          <img
            src="/gov-emblem.png"
            alt="gov"
            className="w-8 h-8 opacity-90"
          />

          <RefreshCcw size={24} color="white" />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <img src="/digilocker-icon.png" className="w-8 h-8" />
          <span className="text-white font-semibold text-xl">DigiLocker</span>
        </div>

        <h2 className="text-white text-2xl font-bold">Issued Documents</h2>
        <p className="text-white mt-1 text-sm opacity-90">
          DigiLocker 'Issued Documents' are at par with original
          documents as per IT ACT, 2000
        </p>

        <img
          src="/header-bg-shape.png"
          className="absolute right-0 bottom-0 h-24 opacity-20"
        />
      </div>

      {/* Body */}
      <div className="px-5 mt-6 flex-1">
        <h3 className="text-gray-800 font-semibold text-lg mb-4">
          My Issued Document(2)
        </h3>

        {/* Document List */}
        <div className="space-y-5">
          {/* Aadhaar */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <img
                src="/aadhaar.png"
                className="w-14 h-14 rounded-lg"
              />
              <div>
                <p className="font-semibold text-gray-800 text-base">
                  Aadhaar Card
                </p>
                <p className="text-gray-500 text-sm">
                  Unique Identification Authority of India (UIDAI)
                </p>
              </div>
            </div>
            <MoreVertical className="text-gray-500" />
          </div>

          <hr />

          {/* PAN */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <img
                src="/pan.png"
                className="w-14 h-14 rounded-lg"
              />
              <div>
                <p className="font-semibold text-gray-800 text-base">
                  PAN Verification Record
                </p>
                <p className="text-gray-500 text-sm">
                  Income Tax Department
                </p>
              </div>
            </div>
            <MoreVertical className="text-gray-500" />
          </div>
        </div>
      </div>

   
    </div>
  );
}
