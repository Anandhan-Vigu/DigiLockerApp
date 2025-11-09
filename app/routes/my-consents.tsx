export default function MyConsents() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-8">
        <h1 className="text-2xl font-bold mb-3">My Consents</h1>
        <p className="mb-6 text-gray-700">You gave these sites and apps consents to some of your DigiLocker documents. Remove consent from those you no longer trust or use</p>
        <div className="space-y-4">
          {[
            { name: 'UMANG', date: '08 Nov 2025 20:25:32', status: 'Active' },
            { name: 'Digio', date: '20 Feb 2025 18:22:26', status: 'Expired' },
            { name: 'Digiotech Solutions Private Limited', date: '03 Oct 2024 14:26:15', status: 'Expired' }
          ].map(({ name, date, status }) => (
            <div key={name} className="bg-white shadow rounded p-4 flex flex-col">
              <div className="font-semibold">{name}</div>
              <div className="text-xs">{date}</div>
              <div className={`mt-1 text-sm ${status === 'Active' ? 'text-green-600' : 'text-orange-500'}`}>{status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
