import React, { useState } from "react";
import { Bot } from "lucide-react"; // Ensure lucide-react is installed

const steps = ["Personal", "Strengths", "Weaknesses", "Opportunities", "Threats"];

const SwotForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    alert("Form submitted!");
  };

  const inputStyle =
    "w-full border border-gray-300 rounded-md px-4 py-2 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <label className="block font-medium mb-1">Present Address</label>
            <input type="text" placeholder="Enter your current address" className={inputStyle} />

            <label className="block font-medium mt-6 mb-1">Permanent Address</label>
            <input type="text" placeholder="Enter your permanent address" className={inputStyle} />
          </>
        );
      case 1:
        return (
          <>
            <label className="block font-medium mb-1">Your Key Strengths</label>
            <textarea placeholder="List your strengths..." className={inputStyle} rows={5} />
          </>
        );
      case 2:
        return (
          <>
            <label className="block font-medium mb-1">Your Weaknesses</label>
            <textarea placeholder="List your weaknesses..." className={inputStyle} rows={5} />
          </>
        );
      case 3:
        return (
          <>
            <label className="block font-medium mb-1">Opportunities You See</label>
            <textarea placeholder="List opportunities..." className={inputStyle} rows={5} />
          </>
        );
      case 4:
        return (
          <>
            <label className="block font-medium mb-1">Potential Threats</label>
            <textarea placeholder="List threats..." className={inputStyle} rows={5} />
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-16 relative">
      <div className="bg-white rounded-xl shadow p-8 w-full">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex items-center justify-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                  index === currentStep ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Title */}
        <h2 className="text-xl font-bold mb-6">{steps[currentStep]} Information</h2>

        {/* Step Content */}
        <div>{renderStepContent()}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          {currentStep < steps.length - 1 && (
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center gap-1"
            >
              Next <span>&rarr;</span>
            </button>
          )}
        </div>
      </div>

      {/* Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-yellow-400 w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <Bot className="text-blue-800 w-6 h-6" />
      </button>

      {/* Chatbot Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-lg border overflow-hidden flex flex-col z-50">
          <div className="bg-yellow-400 text-white p-3 flex justify-between items-center">
            <span className="font-bold">Support Assistant</span>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2 max-h-60">
            <div className="bg-gray-100 p-2 rounded">
              Hello! How can I assist you today with the Mentee Tracker?
            </div>
            <div className="text-right text-white bg-blue-500 p-2 rounded">
              I need help with finding my activities.
            </div>
            <div className="bg-gray-100 p-2 rounded">
              You can use the search bar or filters above to find your activities by status, type, or keywords!
            </div>
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded px-3 py-1 text-sm focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-3 rounded text-sm">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwotForm;
