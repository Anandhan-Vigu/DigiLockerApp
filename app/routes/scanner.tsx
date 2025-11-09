// DigiLockerQRScanner.tsx
import React from "react";

const DigiLockerScanner: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-between bg-white text-gray-700">
      <div className="p-6 space-y-6">
        <h1 className="text-xl font-semibold">DigiLocker QR Code Scanner</h1>
        <p className="text-sm text-gray-500">
          Using this QR Code Scanner, you can scan the QR Code on the certificates available through DigiLocker.
          The scanner helps verify the authenticity of these documents.
        </p>
        <p className="text-sm text-gray-500">
          Note: Now, this scanner scans all the QR Codes.
        </p>
        <div className="flex justify-center">
          <div className="bg-gray-100 p-6 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 4h5v2H6v3H4V4ZM20 4v5h-2V6h-3V4h5ZM4 20v-5h2v3h3v2H4ZM20 20h-5v-2h3v-3h2v5ZM9 9h6v6H9V9Z"/>
            </svg>
          </div>
        </div>
      </div>
      <button className="bg-indigo-600 text-white text-lg font-semibold py-3 rounded-t-3xl">
        SCAN NOW
      </button>
    </div>
  );
};

export default DigiLockerScanner;
