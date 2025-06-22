import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Bot } from "lucide-react";

const SwotReport = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center px-4 relative">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full">
        <FileText className="w-12 h-12 text-gray-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">No SWOT Report Available</h2>
        <p className="text-gray-600 mb-6">
          You haven't created a SWOT analysis yet. Please complete the SWOT
          form to generate your report.
        </p>
        <button
          onClick={() => navigate("/swot-form")}
          className="bg-blue-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-blue-500 transition"
        >
          Create SWOT Analysis
        </button>
      </div>

      {/* Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-yellow-400 w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <Bot className="text-blue-800 w-6 h-6" />
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-lg border overflow-hidden flex flex-col z-50">
          <div className="bg-yellow-400 text-white p-3 flex justify-between items-center">
            <span className="font-bold">Support Assistant</span>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2 max-h-60">
            <div className="bg-gray-100 p-2 rounded">
              Hello! How can I help you today with the Mentee Tracker?
            </div>
            <div className="text-right text-white bg-blue-500 p-2 rounded">
              I need help with submitting my activity proof.
            </div>
            <div className="bg-gray-100 p-2 rounded">
              To submit proof for an activity, please go to the Activities page,
              find your activity, and click on "View Details". Then you'll see
              an option to "Submit Proof" where you can upload files or add links.
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

export default SwotReport;
