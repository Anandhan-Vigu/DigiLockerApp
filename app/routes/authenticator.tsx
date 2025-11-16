import React, { useEffect, useState, useRef } from "react";
import { FiCopy, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { useNavigate } from "react-router";

const DigiLockerAuthenticator: React.FC = () => {
    const navigate = useNavigate();

    const [timeLeft, setTimeLeft] = useState(60);
    const [otp, setOtp] = useState(generateOtp());
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [progress, setProgress] = useState(0);

    const requestRef = useRef<number | null>(null);
    const startTimeRef = useRef<number>(Date.now());

    function generateOtp() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    useEffect(() => {
        const animate = () => {
            const elapsed = (Date.now() - startTimeRef.current) / 1000;
            const remaining = Math.max(60 - elapsed, 0);
            setTimeLeft(remaining);
            setProgress((elapsed / 60) * 100);

            if (remaining <= 0) {
                startTimeRef.current = Date.now();
                setOtp(generateOtp());
                setProgress(0);
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const circleRadius = 90;
    const circumference = 2 * Math.PI * circleRadius;
    const dashOffset = circumference - (progress / 100) * circumference;

    const handleCopy = () => {
        navigator.clipboard.writeText(otp.toString());
    };

    const faqs = [
        {
            q: "What is DigiLocker Authenticator",
            a: (
                <p className="font-bold">
                    It is a two-factor authentication tool that enhances the security of
                    your login to integrated government services. It generates a unique
                    6-digit Time-based One-Time Password (TOTP) every 60 seconds, offering
                    a secure alternative to SMS-based OTPs.
                </p>
            ),
        },
        {
            q: "How It Works",
            a: (
                <div className="relative">
                    {[
                        { title: "Sign in", text: "Access a supported government platform" },
                        { title: "Choose TOTP", text: "Select TOTP as your login method" },
                        { title: "Open DigiLocker Authenticator", text: "Navigate to DigiLocker Authenticator in your DigiLocker App" },
                        { title: "Enter TOTP", text: "Use the 6-digit TOTP that refreshes every 60 seconds to complete login" },
                    ].map((item, idx, arr) => (
                        <div className="flex gap-4 " key={idx}>
                            {/* Circle with number */}
                            <div className="flex flex-col items-center">
                                <div className="w-7 h-7 rounded-lg bg-pink-200  flex items-center justify-center text-black font-bold text-sm">
                                    {idx + 1}
                                </div>

                                {/* dotted line */}
                                {idx !== arr.length - 1 && (
                                    <div className="h-16 border-dotted border-l-2 border-gray-400"></div>
                                )}
                            </div>

                            {/* Text content */}
                            <div>
                                <p className="font-bold">{item.title}</p>
                                <p className="text-gray-600 text-sm mt-2 ">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ),
        },

        {
            q: "Currently Supported Services",
            a: (
                <div className="relative ">
                    {[
                        { name: "MeriPehchaan (NSSO)", link: "https://meripehchaan.gov.in/" },
                        { name: "ABC (Academic Bank of Credits)", link: "https://www.abc.gov.in/" },
                    ].map((item, idx, arr) => (
                        <div key={idx} className="flex gap-4 items-start">

                            {/* Step Number + dotted line */}
                            <div className="flex flex-col items-center">
                                <div className="rounded-lg w-7 h-7 flex items-center justify-center font-semibold bg-pink-200 text-black">
                                    {idx + 1}
                                </div>

                                {idx !== arr.length - 1 && (
                                    <div className="h-8 border-dotted border-l-2 border-gray-400"></div>
                                )}
                            </div>

                            {/* Text + link icon */}
                            <div className="flex justify-between flex-1 items-center h-7">
                                <span>{item.name}</span>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer"
                                >
                                    <HiExternalLink className="text-blue-800 mt-1" size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            ),
        }

    ];

    return (
        <div className="relative min-h-screen bg-white text-black p-5">

            {/* Back Icon */}
            <button onClick={() => navigate("/")} >
                <FaArrowLeft size={20} />
            </button>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mt-5">
                DigiLocker Authenticator
            </h1>
            <p className=" text-gray-600 mt-2">
                Use this TOTP (time-based one-time passwords) for logging into integrated government services.
            </p>

            {/* OTP Circle Section */}
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="relative w-56 h-56">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="112" cy="112" r={circleRadius} stroke="#E5E7EB" strokeWidth="12" fill="none" />
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
                        />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-base font-semibold">
                            00:{Math.floor(timeLeft).toString().padStart(2, "0")}
                        </span>
                        <h2 className="text-4xl font-bold">{otp}</h2>

                        <button
                            onClick={handleCopy}
                            className="text-gray-500 text-xs mt-2 flex items-center gap-1"
                        >
                            Tap to copy <FiCopy />
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-10 ">
                <h3 className="text-xl font-bold mb-3">FAQ'S</h3>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-l-2 border-blue-800 rounded-lg shadow-sm shadow-gray-300">
                            <button
                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                className="w-full px-4 py-3 flex justify-between items-center text-sm font-bold"
                            >
                                {faq.q}
                                {activeFaq === index ? <FiChevronUp /> : <FiChevronDown />}
                            </button>

                            {activeFaq === index && <div className="px-4 py-4 text-sm">{faq.a}</div>}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default DigiLockerAuthenticator;
