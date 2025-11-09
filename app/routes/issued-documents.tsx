export default function IssuedDocuments() {
  return (
    <div className="min-h-screen bg-indigo-700 text-white">
      <div className="px-6 pt-6 pb-4">
        <h1 className="text-2xl font-bold">Issued Documents</h1>
        <p className="text-sm">DigiLocker 'Issued Documents' are at par with original documents as per IT ACT, 2000</p>
      </div>
      <div className="bg-white rounded-t-3xl p-8 min-h-[60vh] mt-4">
        <div className="text-lg font-medium mb-3 text-gray-800">My Issued Document(2)</div>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center border-b pb-2">
            <span className="text-2xl mr-4">🪪</span>
            <div>
              <div className="font-semibold text-gray-900">Aadhaar Card</div>
              <div className="text-xs text-gray-600">Unique Identification Authority of India (UIDAI)</div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-4">📄</span>
            <div>
              <div className="font-semibold text-gray-900">PAN Verification Record</div>
              <div className="text-xs text-gray-600">Income Tax Department</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
