import React from 'react';
import AcademicProgressSection from './AcademicProgressSection';

const AcademicTabContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-4">
      {/* LEFT COLUMN */}
      <div className="space-y-6 w-full">
        {/* Academic Profile Section */}
        <div className="rounded-lg border-b-white p-4 shadow-sm bg-white">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            📖 Academic Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm">
            <div><strong>Department:</strong> Computer Science</div>
            <div><strong>Year:</strong> 3</div>
            <div><strong>Student ID:</strong> <span className="font-semibold">ST12345</span></div>
            <div><strong>GPA:</strong> <span className="font-bold">3.8/4.0</span></div>
            <div><strong>Academic Standing:</strong> <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">Good</span></div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Current Semester</h3>
            <div className="space-y-2">
              {[{
                course: "Advanced Algorithms",
                instructor: "Prof. Johnson",
                time: "Mon/Wed 10:00 AM",
                grade: "A",
              },
              {
                course: "Database Systems",
                instructor: "Dr. Miller",
                time: "Tue/Thu 1:30 PM",
                grade: "A-",
              },
              {
                course: "Machine Learning",
                instructor: "Prof. Zhang",
                time: "Wed/Fri 3:00 PM",
                grade: "B+",
              }].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md shadow-sm">
                  <div>
                    <div className="font-semibold">{item.course}</div>
                    <div className="text-xs text-gray-500">{item.instructor} • {item.time}</div>
                  </div>
                  <div className="px-2 py-1 border rounded text-sm font-semibold">{item.grade}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attendance History Section */}
        <div className="rounded-lg border-b-white p-4 shadow-sm bg-white h-fit">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            📅 Attendance History
          </h2>
          <div className="space-y-2 text-sm">
            {[{
              title: "Monthly Progress Review",
              date: "Nov 10, 2023 • 10:30 AM",
              status: "Present",
              color: "green",
            },
            {
              title: "Technical Skills Assessment",
              date: "Nov 5, 2023 • 11:00 AM",
              status: "Present",
              color: "green",
            },
            {
              title: "Group Mentoring Session",
              date: "Oct 28, 2023 • 2:00 PM",
              status: "Absent",
              color: "red",
            }].map((item, index) => (
              <div key={index} className={`flex justify-between items-center p-3 rounded-md shadow-sm ${item.color === "green" ? "bg-green-50" : "bg-red-50"}`}>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.date}</div>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded border ${item.color === "green" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full">
        <AcademicProgressSection />
      </div> 
    </div>
  );
};

export default AcademicTabContent;
