import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

import {
  IoChevronDown,
  IoChevronUp,
  IoShieldCheckmarkOutline,
  IoShareSocialOutline,
  IoAddOutline,
} from "react-icons/io5";

type Section = "why" | "how" | null;

interface Step {
  number: string;
  title: string;
  subtitle: string;
}

interface WhyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}


const VerifiableCredential: React.FC = () => {
  const [open, setOpen] = useState<Section>(null);
  const navigate = useNavigate(); // <-- add this

  const toggle = (section: Section) => {
    setOpen(open === section ? null : section);
  };

  // ✅ Why use Verifiable Credentials
  const whyItems: WhyItem[] = [
    {
      icon: <IoShieldCheckmarkOutline className="text-green-600 text-lg" />,
      title: "Your Privacy, Your Power",
      description:
        "Protected by cryptographic signatures, Verifiable Credentials are tamper-proof and trustworthy. You can generate a QR code linked to your credential, allowing the verifier to validate its authenticity quickly. The system also ensures your data stays secure and under your control.",
    },
    {
      icon: <IoShareSocialOutline className="text-purple-600 text-lg" />,
      title: "Effortless Credential Sharing",
      description:
        "VCs can be shared easily across sectors like banking, insurance, education, and healthcare — simplifying how you share verified information securely.",
    },
  ];

  // ✅ How it Works Steps
  const steps: Step[] = [
    {
      number: "1",
      title: "Select Document",
      subtitle: "Choose from DigiLocker-issued documents",
    },
    {
      number: "2",
      title: "Create your Verifiable Credential",
      subtitle: "Generate your Verifiable Credential",
    },
    {
      number: "3",
      title: "Share with Confidence",
      subtitle: "Your verified credential is ready to share!",
    },
  ];

  return (
    <div className="min-h-screen relative p-5 w-full text-black">
      {/* Header */}
      <button className="text-2xl font-bold " onClick={() => navigate("/")} >
        <FaArrowLeft size={20} />
      </button>
      <div className="mt-5 space-y-5">
        <h1 className="text-2xl font-bold text-blue-800">
          Verifiable Credential
        </h1>
        <p className="text-gray-600 text-sm">A Verifiable Credential (VC) is a secure digital document that verifies specific information about a person or entity, such as identity, qualifications, or permissions. In DigiLocker, the VC feature allows you to store, manage, and share these credentials with full control over your data. As the credential holder, you can easily share a QR code or secure link with a verifier to confirm authenticity.</p>
        <img src="/icons/others/verifiable-credential-logo.jpg" alt="verifiable-credential-logo" className="mt-5"></img>

      </div>
      {/* Accordions */}
      <div className="mt-6 space-y-4 mb-20">
        {/* Why use Verifiable Credentials */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-800 overflow-hidden">
          <button
            onClick={() => toggle("why")}
            className="w-full flex justify-between items-center px-5 py-4 text-left text-blue-800 font-bold"
          >
            Why use Verifiable Credentials?
            {open === "why" ? (
              <IoChevronUp size={20} />
            ) : (
              <IoChevronDown size={20} />
            )}
          </button>

          {open === "why" && (
            <div className="px-5 pb-5 text-gray-700 text-sm space-y-6">
              {whyItems.map((item, index) => (
                <div key={index} className={`${index<whyItems.length-1?'border-b pb-5 border-gray-300':''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {item.icon}
                    <h4 className="font-bold">{item.title}</h4>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-2xl shadow-md border-l-4 border-blue-800 overflow-hidden">
          <button
            onClick={() => toggle("how")}
            className="w-full flex justify-between items-center px-5 py-4 text-left text-blue-800 font-bold"
          >
            How it Works
            {open === "how" ? (
              <IoChevronUp size={20} />
            ) : (
              <IoChevronDown size={20} />
            )}
          </button>

          {open === "how" && (
            <div className="px-5 pb-6">
              <div className="relative space-y-6">
                <div className="absolute left-3 top-0 bottom-0 border-l-2 border-dashed border-gray-300"></div>
                {steps.map((step) => (
                  <div key={step.number} className="flex items-start gap-3 relative">
                    <div className="relative z-10 w-7 h-7 bg-purple-200 text-black font-semibold rounded-lg flex items-center justify-center shadow-sm">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{step.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <button className="fixed bottom-5 left-0 right-0 mx-5 z-10 flex justify-center items-center gap-2 bg-blue-700 text-white font-semibold py-3 rounded-full">
        <IoAddOutline size={22} /> Add Credential
      </button>

    </div>
  );
};

export default VerifiableCredential;
