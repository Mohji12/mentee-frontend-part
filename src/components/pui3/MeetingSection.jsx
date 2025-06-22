import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser,
  FaVideo, FaTimes, FaRegCalendarPlus
} from 'react-icons/fa';
import { Bot } from 'lucide-react';

export default function MeetingSection() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('upcoming');
  const [chatOpen, setChatOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: new Date(),
    time: '',
    location: '',
    mentor: ''
  });

  const meetings = [
    {
      title: "Monthly Progress Review",
      date: "2025-05-01",
      time: "14:00 (45 mins)",
      location: "Room 302",
      mentor: "Dr. Sarah Johnson",
      joinable: true,
      status: "upcoming",
      link: "https://meet.google.com/xyz123"
    },
    {
      title: "Career Guidance Session",
      date: "2025-04-15",
      time: "15:00 (30 mins)",
      location: "Room 205",
      mentor: "Prof. Michael Roberts",
      joinable: false,
      status: "completed",
      link: ""
    },
    {
      title: "Resume Workshop",
      date: "2025-05-05",
      time: "10:00 (60 mins)",
      location: "Room 108",
      mentor: "Ms. Anita Desai",
      joinable: true,
      status: "upcoming",
      link: "https://meet.google.com/abc456"
    }
  ];

  const filteredMeetings = meetings.filter(m => m.status === activeTab);

  const addToCalendar = (meeting) => {
    const eventDetails = {
      title: meeting.title,
      location: meeting.location,
      startTime: meeting.date + "T" + meeting.time.split(" ")[0],
      endTime: meeting.date + "T" + meeting.time.split(" ")[0],
    };
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventDetails.title}&dates=${eventDetails.startTime}/${eventDetails.endTime}&details=${eventDetails.title}&location=${eventDetails.location}`;
    window.open(calendarUrl, "_blank");
  };

  const cancelMeeting = (meetingTitle) => {
    alert(`Meeting "${meetingTitle}" has been canceled.`);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Appointment request submitted!");
    setShowForm(false);
    setFormData({ title: '', date: new Date(), time: '', location: '', mentor: '' });
  };

  return (
    <div className="flex gap-4">
      {/* LEFT COLUMN */}
      <div className="w-2/3 space-y-4">
        <h2 className="text-xl font-bold">Scheduled Meetings</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-4">
          <button
            className={`py-2 px-4 rounded ${activeTab === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Meetings
          </button>
          <button
            className={`py-2 px-4 rounded ${activeTab === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Meetings
          </button>
        </div>

        {filteredMeetings.length === 0 ? (
          <p className="text-gray-500">No {activeTab} meetings available.</p>
        ) : (
          filteredMeetings.map((m, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 flex justify-between items-start border">
              <div>
                <h3 className="text-lg font-bold">{m.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <FaCalendarAlt className="text-blue-500" /> {new Date(m.date).toDateString()}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaClock className="text-blue-500" /> {m.time}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaMapMarkerAlt className="text-blue-500" /> {m.location}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUser className="text-blue-500" /> {m.mentor}
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end w-1/2">
                {m.status === "upcoming" && m.joinable && (
                  <button
                    className="bg-blue-600 text-white flex items-center justify-center gap-2 w-full py-2 rounded"
                    onClick={() => window.location.href = m.link}
                  >
                    <FaVideo /> Join Meeting
                  </button>
                )}
                <button
                  className="border border-blue-500 text-blue-600 flex items-center justify-center gap-2 w-full py-2 rounded"
                  onClick={() => addToCalendar(m)}
                >
                  <FaRegCalendarPlus /> Add to Calendar
                </button>
                <button
                  className="border border-red-500 text-red-600 flex items-center justify-center gap-2 w-full py-2 rounded"
                  onClick={() => cancelMeeting(m.title)}
                >
                  <FaTimes /> Cancel Meeting
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-1/3 space-y-6">
        {/* Appointment Request */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Request Appointment</h3>
          <p className="text-sm text-gray-600 mt-1">Schedule a meeting with a mentor based on your availability.</p>
          <button
            className="bg-blue-600 text-white w-full py-2 rounded mt-3"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "New Appointment Request"}
          </button>

          {showForm && (
            <form className="mt-4 space-y-3" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Meeting Title"
                className="w-full border px-3 py-2 rounded text-sm"
                value={formData.title}
                onChange={handleFormChange}
                required
              />
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData(prev => ({ ...prev, date }))}
                dateFormat="yyyy-MM-dd"
                className="w-full border px-3 py-2 rounded text-sm"
              />
              <input
                type="time"
                name="time"
                placeholder="Time"
                className="w-full border px-3 py-2 rounded text-sm"
                value={formData.time}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full border px-3 py-2 rounded text-sm"
                value={formData.location}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                name="mentor"
                placeholder="Mentor Name"
                className="w-full border px-3 py-2 rounded text-sm"
                value={formData.mentor}
                onChange={handleFormChange}
                required
              />
              <button type="submit" className="bg-green-600 text-white w-full py-2 rounded">
                Submit Request
              </button>
            </form>
          )}
        </div>

        {/* Calendar */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <FaCalendarAlt /> Meetings Calendar
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-gray-500" />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="text-sm text-gray-500 mt-2">Selected: {selectedDate.toDateString()}</div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span> Upcoming
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span> Completed
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span> Cancelled
            </div>
          </div>
        </div>

        {/* Meeting Stats */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <FaUser /> Meeting Statistics
          </h3>
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm">Upcoming</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm">Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Toggle Button */}
      <div
        className="fixed bottom-6 right-6 bg-yellow-400 text-black p-3 rounded-full cursor-pointer"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <Bot size={24} />
      </div>

      {/* Chatbot UI */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-lg border overflow-hidden flex flex-col">
          <div className="bg-yellow-400 text-white p-3 flex justify-between items-center">
            <span className="font-bold">Support Assistant</span>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2">
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
}
