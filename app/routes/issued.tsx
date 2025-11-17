import emblem from '/icons/home-logo/emblem.jpg';
import logo from '/icons/home-logo/logo.jpg';

const issuedDocs = [
  {
    id: 1,
    title: "Aadhaar Card",
    agency: "Unique Identification Authority of India (UIDAI)",
    image: "/icons/issued-document/aadhar.jpeg",
  },
  {
    id: 2,
    title: "PAN Verification Record",
    agency: "Income Tax Department",
    image: "/icons/issued-document/pan.png",
  },
];

export default function IssuedDocuments() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="w-full space-y-5 h-full text-black">

        {/* Blue Section */}
        <div className="relative bg-blue-800 h-56 rounded-br-[200px] rounded-bl-[10px] px-5 py-5">
          <div className="flex items-center">
            <img src={emblem} alt="Emblem" className="h-14 w-10" />
            <img src={logo} alt="Logo" className="h-9 w-8 ml-2" />
            <p className="text-white text-2xl font-bold ml-1">DigiLocker</p>
          </div>

          <h2 className="text-white text-2xl font-bold mt-2">Issued Documents</h2>

          <p className="text-white mt-3 text-sm font-semibold">
            DigiLocker 'Issued Documents' are at par with original documents as per IT ACT, 2000
          </p>
        </div>

        {/* Body */}
        <div className="px-5 mt-6 flex-1">
          <h3 className="text-gray-800 font-semibold text-lg mb-4">
            My Issued Document ({issuedDocs.length})
          </h3>

          <div className="space-y-5">
            {issuedDocs.map((doc) => (
              <div key={doc.id}>
                  <div className="flex gap-3">
                    <img src={doc.image} className="w-16 h-12 bg-white p-1 rounded-lg shadow-2xl " />
                    <div className="border-b border-gray-400 w-full flex flex-col pb-3">
                      <p className="font-semibold text-gray-800 text-base">
                        {doc.title}
                      </p>
                      <p className="text-gray-500 text-sm">{doc.agency}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
