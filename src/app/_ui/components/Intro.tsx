import Image from "next/image";
import { CheckCircle } from "@/ui/icons/CheckCircle";
import { importantToKnow } from "@/ui/content/content";
import { Button } from "./Button";
import { useState } from "react";

// Define the test codes structure
const testCodes = {
  // Mathematics codes
  "MATH1000": { subject: "Mathematics", topic: "Arithematic", chapter: "Basic Operations" },
  "MATH1001": { subject: "Mathematics", topic: "Arithematic", chapter: "Fractions" },
  "MATH1002": { subject: "Mathematics", topic: "Arithematic", chapter: "Decimals" },
  "MATH1003": { subject: "Mathematics", topic: "Arithematic", chapter: "Percentages" },
  "MATH1004": { subject: "Mathematics", topic: "Geometry", chapter: "Lines & Angles" },
  // Add more codes as needed for other subjects...
};

interface IntroProps {
  onGetStartedClick: () => void;
  onTestCodeApplied?: (subject: string, topic: string, chapter: string, code: string) => void;
}

export const Intro = ({ onGetStartedClick, onTestCodeApplied }: IntroProps) => {
  const [testCode, setTestCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showTestCodeInput, setShowTestCodeInput] = useState(false);

  const handleTestCodeSubmit = () => {
    if (testCode && testCodes[testCode]) {
      const { subject, topic, chapter } = testCodes[testCode];
      // Call the callback to handle the test code application
      if (onTestCodeApplied) {
        onTestCodeApplied(subject, topic, chapter, testCode);
      }
      // Go directly to the next screen
      onGetStartedClick();
    } else {
      setErrorMessage("Invalid test code. Please try again.");
    }
  };

  return (
    <div className="px-5 py-8 flex-1 w-full lg:max-w-4xl mx-auto flex flex-col overflow-hidden">
      <Image
        src="/doodles.svg"
        width={343}
        height={413}
        className="absolute -bottom-10 right-0 z-0 object-cover pointer-events-none w-[343px] h-[413px] lg:w-[500px] lg:h-[600px]"
        alt="Doodles Illustration"
      />
      <div className="w-full flex flex-col flex-1 items-center z-10">
        <h1 className="text-brand-cerulean-blue font-bold text-[32px] sm:text-4xl">
          Daily Practice Paper (DPP)
        </h1>

        {!showTestCodeInput ? (
          <>
            <h3 className="text-black font-bold text-2xl mt-[51.55px] sm:text-3xl">
              Things to know before you start:
            </h3>
            <div className="flex flex-col items-start mt-5 sm:mt-10 space-y-5">
              {importantToKnow.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle />
                  <p className="text-sm text-brand-storm-dust font-normal sm:text-xl">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-center w-full">
              <button
                onClick={() => setShowTestCodeInput(true)}
                className="text-brand-cerulean-blue underline text-sm sm:text-base mb-4"
              >
                Have a test code? Click here
              </button>
            </div>
          </>
        ) : (
          <div className="w-full max-w-md mt-10 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-black font-bold text-xl mb-4">
              Enter Your Test Code
            </h3>
            <input
              type="text"
              placeholder="Enter test code (e.g. MATH1000)"
              className="w-full p-3 rounded-xl border border-brand-light-gray mb-2"
              value={testCode}
              onChange={(e) => {
                setTestCode(e.target.value.toUpperCase());
                setErrorMessage("");
              }}
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}
            <div className="flex gap-2 mt-4">
              <Button
                size="small"
                onClick={handleTestCodeSubmit}
                className="flex-1"
              >
                Apply Code
              </Button>
              <Button
                size="small"
                variant="outline"
                onClick={() => setShowTestCodeInput(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      {!showTestCodeInput && (
        <Button
          className="w-full z-10"
          block
          size={"small"}
          onClick={onGetStartedClick}
        >{`Let's Get Started`}</Button>
      )}
    </div>
  );
};
