import React, { useEffect, useState, useRef } from "react";
import { FiCopy, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const DigiLockerAuthenticator: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(30);
    const [otp, setOtp] = useState(generateOtp());
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [progress, setProgress] = useState(0);
    const requestRef = useRef<number | null>(null);
    const startTimeRef = useRef<number>(Date.now());
    const navigate = useNavigate(); // <-- add this

    function generateOtp() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    useEffect(() => {
        // Smooth timer animation using requestAnimationFrame
        const animate = () => {
            const elapsed = (Date.now() - startTimeRef.current) / 1000;
            const remaining = Math.max(30 - elapsed, 0);
            setTimeLeft(remaining);
            setProgress((elapsed / 30) * 100);

            if (remaining <= 0) {
                startTimeRef.current = Date.now(); // restart timer
                setOtp(generateOtp()); // new OTP
                setProgress(0);
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(otp.toString());
        alert("OTP copied!");
    };

    // Circle setup
    const circleRadius = 90; // increased size
    const circumference = 2 * Math.PI * circleRadius;
    const dashOffset = circumference - (progress / 100) * circumference;

    const faqs = [
        {
            q: "What is DigiLocker Authenticator",
            a: "It’s a TOTP (time-based one-time password) generator used for secure logins to government platforms.",
        },
        {
            q: "How It Works",
            a: "It generates a 6-digit code every 30 seconds using your registered credentials.",
        },
        {
            q: "Currently Supported Services",
            a: "Used in DigiLocker-integrated government platforms like UIDAI, Passport Seva, etc.",
        }
    ];

    return (
        <div className="text-black bg-white p-5 ">
            <button className="text-2xl font-bold " onClick={() => navigate("/")} >
                <FaArrowLeft size={20} />
            </button>
            <div className="flex flex-col gap-1 mt-5">
                <h1 className="text-xl font-semibold">DigiLocker Authenticator</h1>
                {/* Subheading */}
                <p className="text-gray-600 text-sm mt-3">
                    Use this TOTP (time-based one-time passwords) for logging into integrated government platforms.
                </p>
            </div>
            {/* OTP Section */}
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="relative w-56 h-56"> {/* Increased size */}
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="112"
                            cy="112"
                            r={circleRadius}
                            stroke="#E5E7EB"
                            strokeWidth="12"
                            fill="none"
                        />
                        <circle
                            cx="112"
                            cy="112"
                            r={circleRadius}
                            stroke="#4F46E5"
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={dashOffset}
                            strokeLinecap="round"
                            className="transition-none"
                        />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-base  font-semibold">
                            00:{Math.floor(timeLeft).toString().padStart(2, "0")}
                        </span>
                        <h2 className="text-4xl font-bold">{otp}</h2>
                        <button
                            onClick={handleCopy}
                            className="text-gray-500 text-sm mt-2 flex items-center gap-1"
                        >
                            Tap to copy
                            <FiCopy className="text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
                <h3 className="text-lg font-semibold mb-3">FAQ'S</h3>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border-l-blue-800 border-l-2 rounded-lg  shadow-sm shadow-gray-400"
                        >
                            <button
                                onClick={() =>
                                    setActiveFaq(activeFaq === i ? null : i)
                                }
                                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
                            >
                                {faq.q}
                                {activeFaq === i ? (
                                    <FiChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </button>
                            {activeFaq === i && (
                                <div className="px-4 pb-4  text-sm">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigiLockerAuthenticator;
