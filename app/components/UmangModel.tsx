import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface UmangModalProps {
    open: boolean;
    onClose: () => void;
}

const UmangModal: React.FC<UmangModalProps> = ({ open, onClose }) => {

    // 🔥 Disable background scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 text-white z-50 bg-black/60 backdrop-blur-sm pointer-events-auto">
            
            {/* CLOSE BUTTON — just above the orange modal */}
            <button
                onClick={onClose}
                className="absolute bottom-[610px] left-1/2 -translate-x-1/2 bg-black text-white p-2 rounded-full z-60"
            >
                <IoClose size={28} />
            </button>

            {/* ORANGE MODAL (fixed bottom) */}
            <div className="fixed bottom-0 left-0 w-full bg-[#ff8000] p-10 rounded-t-2xl z-50 h-[600px] pointer-events-auto">
                <p className="text-xl">One App. One Platform,</p>
                <p className="text-xl">Many Government Services</p>

                <img
                    src="/icons/others/umang-model.jpg"
                    alt="UMANG Promo"
                    className="mx-auto w-96 h-96"
                />

                {/* WHITE CARD */}
                <div className="bg-white p-5 rounded-2xl absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] shadow-lg">
                    <img
                        src="/icons/others/umang-model-button.png"
                        alt="UMANG Logo"
                        className="h-20 mx-auto"
                    />
                    <a
                        href="https://play.google.com/store/apps/details?id=in.gov.umang.negd.g2c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-900 block w-full py-5 text-center rounded-2xl font-bold text-lg text-white"
                    >
                        Install UMANG now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UmangModal;
