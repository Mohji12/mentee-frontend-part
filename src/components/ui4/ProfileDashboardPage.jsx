import React from "react";
import {
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
} from "lucide-react";
import RecentAchievements from "./RecentAchievements"; // Make sure the path is correct
import SkillsOverviewChart from "./SkillsOverviewChart"; // Make sure the path is correct

const UserProfileCard = ({
  user,
  externalLinks,
  onEditProfile,
  onUpdatePassword,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg w-full">
      {/* Header */}
      <div className="flex items-center p-6 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center text-xl font-semibold text-gray-700 mr-4">
          {user.initials}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-600">
            {user.program} • Year {user.year}
          </p>
          <div className="flex gap-2 mt-1">
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
              Top Performer
            </span>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Verified
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center text-sm py-4 border-b">
        <div>
          <div className="font-semibold">{user.activities}</div>
          <div className="text-gray-500">Activities</div>
        </div>
        <div>
          <div className="font-semibold">{user.meetings}</div>
          <div className="text-gray-500">Meetings</div>
        </div>
        <div>
          <div className="font-semibold">{user.tasks}</div>
          <div className="text-gray-500">Tasks</div>
        </div>
      </div>

      <div className="p-6 space-y-6 text-sm">
        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-600 font-semibold mb-2">Contact Information</h3>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> {user.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> {user.phone1}
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> {user.phone2}
          </div>
        </div>

        {/* Academic Info */}
        <div>
          <h3 className="text-yellow-600 font-semibold mb-2">Academic Information</h3>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" /> USN: {user.studentId}
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" /> {user.program}
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" /> Year {user.year}
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" /> Mentor: {user.mentor}
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-yellow-600 font-semibold mb-2">Location & Status</h3>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Location: {user.location}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Joined: {user.joined}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Last Login: {user.lastLogin}
          </div>
        </div>

        {/* External Links */}
        <div>
          <h3 className="text-yellow-600 font-semibold mb-2 flex items-center justify-between">
            External Links{" "}
            <button className="text-sm text-gray-500 hover:underline">Add Link</button>
          </h3>
          <div className="flex flex-wrap gap-2">
            {externalLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100">
                  {link.label}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 border-t p-4 justify-between">
        <button
          onClick={onEditProfile}
          className="bg-yellow-400 text-black px-4 py-2 rounded w-full hover:bg-yellow-500"
        >
          Edit Profile
        </button>
        <button
          onClick={onUpdatePassword}
          className="border border-gray-300 px-4 py-2 rounded w-full hover:bg-gray-100"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

const ProfileDashboardPage = () => {
  const user = {
    initials: "AJ",
    name: "Alex Johnson",
    program: "Computer Science",
    year: 3,
    activities: "8/15",
    meetings: "6/10",
    tasks: "23/25",
    email: "alex.johnson@university.edu",
    phone1: "+1 (555) 123-4567",
    phone2: "+1 (555) 987-6543",
    studentId: "ST12345",
    mentor: "Dr. Sarah Johnson",
    location: "International Campus",
    joined: "September 2022",
    lastLogin: "Today, 10:45 AM",
  };

  const externalLinks = [
    { label: "LinkedIn", url: "#" },
    { label: "Portfolio", url: "#" },
    { label: "GitHub", url: "#" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left: Profile Card */}
        <div className="lg:w-2/3 w-full">
          <UserProfileCard
            user={user}
            externalLinks={externalLinks}
            onEditProfile={() => alert("Edit Profile")}
            onUpdatePassword={() => alert("Update Password")}
          />
        </div>

        {/* Right: Achievements and Skills Overview */}
        <div className="lg:w-450 w-full">
            <div className="mt-4">
            <RecentAchievements />
            </div>
            <div className="mt-4">
            <SkillsOverviewChart /> {/* Add the SkillsOverviewChart here */}
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileDashboardPage;
