export default function QRCodeScanner() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="px-6 py-12 flex-1">
        <h1 className="text-2xl font-bold mb-3">DigiLocker QR Code Scanner</h1>
        <p className="mb-4">Using this QR Code Scanner, you can scan the QR Code on the certificates available through DigiLocker. The scanner helps verify the authenticity of these documents.</p>
        <div className="mb-2"><span className="font-bold">Note</span> : Now, this scanner scans all the QR Codes.</div>
        <div className="flex justify-center mt-8">
          <div className="h-48 w-48 bg-gray-200 rounded-full flex items-center justify-center text-6xl">🟫</div>
        </div>
      </div>
      <button className="bg-indigo-700 text-white w-full py-4 rounded-t-3xl font-bold text-lg">
        SCAN NOW
      </button>
    </div>
  );
}
