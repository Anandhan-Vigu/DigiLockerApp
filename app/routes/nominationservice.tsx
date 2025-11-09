export default function NominationService() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-3">Nomination Service</h1>
        <p className="mb-10">
          A Nominee is a person that you may name in your DigiLocker application as the person who may be allowed to access your DigiLocker account in future.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for illustration */}
          <div className="h-64 w-64 bg-gray-200 rounded-xl" />
        </div>
      </div>
      <button className="bg-indigo-700 text-white w-full py-4 rounded-t-3xl font-bold text-lg">
        Add Nominee
      </button>
    </div>
  );
}
