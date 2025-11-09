export default function DigiLockerABHA() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">DigiLocker ABHA</h1>
        <p className="mb-8">
          DigiLocker ABHA is a part of Ayushman Bharat Health Account (ABHA). It is the first step towards creating safer and efficient digital health records for you and your family...
        </p>
        <div className="bg-white rounded-xl flex flex-col items-center p-8 mb-8 shadow">
          <div className="w-28 h-28 bg-gray-200 rounded-full mb-3"></div>
          <div className="text-gray-700 mb-3">My ABHA Address's</div>
          <button className="bg-indigo-700 text-white px-8 py-2 rounded-full font-semibold">FETCH ABHA CARD</button>
        </div>
        <div className="text-center text-sm">
          Don't have ABHA NUMBER? <a className="text-indigo-700 underline" href="#">Register Now!</a>
        </div>
      </div>
    </div>
  );
}
