import React from "react";

interface UtilityItem {
    image: string;
    label: string;
    description?: string;
}

interface UtilityModalProps {
    item: UtilityItem;
    onClose: () => void;
}

const UtilityModal: React.FC<UtilityModalProps> = ({ item, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white w-full h-auto rounded-2xl p-6 shadow-lg animate-slideUp relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="flex w-full justify-end text-gray-500 hover:text-gray-700 text-xl"
                >
                    &times;
                </button>

                {/* Modal content */}
                <div>
                    <div className="flex flex-col items-center text-center">
                        <img src={item.image} alt={item.label} className="w-20 h-20 mb-4" />
                        <h1 className="text-lg font-semibold mb-2 text-black">Verify Yourself</h1>
                        <h2 className="text-lg font-semibold mb-2 text-black">Verify yourself for accessing {item.label}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked
                            readOnly
                            className="accent-green-600 w-5 h-5"
                        />
                        <p className="text-black" >
                            I hereby state that I have no objection in authenticating myself with Aadhaar based authentication system and consent to providing my Aadhaar number and One Time Pin (OTP) data for Aadhaar based authentication. I understand that the OTP I provide for authentication shall be used only for obtaining my e-KYC through Aadhaar e-KYC service to make my Aadhaar card available in DigiLocker
                        </p>
                    </div>
                </div>
                <button className="bg-blue-800 text-white mt-10 w-full py-5 rounded-4xl">
                    Verify
                </button>

            </div>
        </div>
    );
};

export default UtilityModal;
