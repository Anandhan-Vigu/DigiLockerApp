import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import UmangModal from "~/components/UmangModel";

const services = [
    {
        name: "Book Appointment",
        subtitle: "ORS Patient Portal",
        icon: "/icons/umang/book.png",
    },
    {
        name: "Generate Life Certificate",
        subtitle: "Jeevan Pramaan",
        icon: "/icons/umang/jeevan.png",
    },
    {
        name: "Current Holding",
        subtitle: "NPS",
        icon: "/icons/umang/nps.jpg",
    },
    {
        name: "Raise Claim",
        subtitle: "EPFO",
        icon: "/icons/umang/epfo.jpg",
    },
    {
        name: "View Passbook",
        subtitle: "EPFO",
        icon: "/icons/umang/epfo.jpg",
    },
    {
        name: "Nearby Store",
        subtitle: "Jan Aushadhi Sugam",
        icon: "/icons/umang/jan.jpg",
    },
    {
        name: "Current Holding",
        subtitle: "NPS",
        icon: "/icons/umang/nps.jpg",
    },
    {
        name: "PNR Status",
        subtitle: "Indian Railways",
        icon: "/icons/umang/railways.png",
    },
    {
        name: "Spot Your Train",
        subtitle: "Indian Railways",
        icon: "/icons/umang/railways.png",
    },
      {
        name: "Know your CIBIL Score",
        subtitle: "CIBIL",
        icon: "/icons/umang/cibil.jpg",
    },
    {
        name: "Plan Your Journey",
        subtitle: "Delhi Metro",
        icon: "/icons/umang/delhi.png",
    },
    {
        name: "Toll Enroute",
        subtitle: "NHAI",
        icon: "/icons/umang/nhai.jpg",
    },
    
];

export default function UMANGServices() {
    const navigate = useNavigate(); // <-- add this
  const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div className="space-y-5 min-h-screen text-black p-5 bg-white mb-7">
            <button className="text-2xl font-bold " onClick={() => navigate("/")} >
                <FaArrowLeft size={20} />
            </button>         
            {/* Title */}
            <div className="flex items-center  gap-2 border-b border-gray-200 pb-2 ">
                <img src="/icons/umang/umang.png"  alt="UMANG" className="w-8 h-10" />
                <h1 className="text-blue-900 font-bold text-base">UMANG Services</h1>
            </div>
            <div >
                {services.map((service, idx) => (
                    <div key={idx} className="flex items-center py-2 gap-4">
                        <img
                            src={service.icon}
                            alt={service.name}
                            className="w-12 h-12 rounded-lg border border-gray-300 p-1 bg-white object-contain"
                        />
                        <div>
                            <div className="font-medium text-base text-gray-800">{service.name}</div>
                            <div className="text-gray-500 text-sm">{service.subtitle}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Bottom Section */}
            <div className="fixed bottom-0 left-0 w-full py-3 flex gap-2 items-center justify-center bg-white border-gray-200 border-t" onClick={() => setShowModal(true)}>
                <span className="text-gray-500 font-bold">Explore more services on</span>
                <div className="flex items-center gap-1 bg-[#eaf6ff] px-2 py-1 rounded-full">
                    <img src="/icons/umang/umang.png" alt="UMANG" className="w-7 h-10" />
                    <span className="text-blue-900 py-2 font-bold text-sm">UMANG</span>
                </div>
            </div>
            <UmangModal open={showModal} onClose={() => setShowModal(false)} />

        </div>
    );
}