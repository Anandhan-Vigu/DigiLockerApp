export default function VerifiableCredential() {
  return (
    <div className="min-h-screen flex flex-col bg-purple-100">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-3">Verifiable Credential</h1>
        <div className="bg-white rounded-xl mb-6 p-4 shadow">
          <div className="font-medium">Get a Verified Credential Now!</div>
          <div className="mt-2 p-4 rounded bg-purple-200 shadow-md">
            <div>DigiLocker Verified Credential 1</div>
            <div className="text-xs mt-1">Verified from Aadhaar</div>
            <div className="text-xs mt-1">Name: Aman Mittal</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-bold mb-1">Why use Verifiable Credentials?</div>
          <div className="font-semibold mb-1">Your Privacy, Your Power</div>
          <p className="text-sm mb-1 text-gray-700">Protected by cryptographic signatures, Verifiable Credentials are tamper-proof and trustworthy...</p>
          <div className="font-semibold mb-1">Effortless Credential Sharing</div>
          <p className="text-sm text-gray-700">VCs can be shared easily across various sectors...</p>
        </div>
        <button className="bg-indigo-700 text-white rounded-full px-6 py-3 font-semibold shadow-lg">
          + Add Credential
        </button>
      </div>
    </div>
  );
}
