import React from "react";

const learningStages = [
  {
    title: "Foundation Skills",
    description: "Core competencies for your career path",
    keySkills: ["Problem Solving", "Communication", "Technical Basics"],
    duration: "3 months",
    status: "completed",
  },
  {
    title: "Specialization",
    description: "Focused learning in your field",
    keySkills: ["Advanced Skills", "Domain Knowledge", "Projects"],
    duration: "4 months",
    status: "completed",
  },
  {
    title: "Industry Project",
    description: "Apply skills in real-world projects",
    keySkills: ["Project Mgmt", "Teamwork", "Problem Solving"],
    duration: "3 months",
    status: "in-progress",
    progress: 65,
    estCompletion: "3 weeks",
  },
  {
    title: "Leadership Development",
    description: "Grow leadership & decision making",
    keySkills: ["Team Lead", "Strategic Thinking", "Decision Making"],
    duration: "2 months",
    status: "pending",
  },
];

const Pathway = () => {
  return (
    <div className="p-3 bg-gray-50 rounded-md shadow-sm h-[470px]">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-1">
        <span className="text-base">🔗</span> <span>Learning Pathway</span>
      </h2>

      <div className="space-y-2">
        {learningStages.map((stage, index) => (
          <div
            key={index}
            className={`relative p-2 rounded-md border text-xs leading-tight ${
              stage.status === "completed"
                ? "bg-green-50 border-green-300"
                : stage.status === "in-progress"
                ? "bg-blue-50 border-blue-300"
                : "bg-white border-gray-300"
            }`}
          >
            {/* Status Icon */}
            <div className="absolute left-[-18px] top-4 p-1">
              {stage.status === "completed" ? (
                <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-white text-[8px]">✔</div>
              ) : stage.status === "in-progress" ? (
                <div className="w-3 h-3 border-2 border-blue-500 rounded-full"></div>
              ) : (
                <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
              )}
            </div>

            {/* Stage Details */}
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-2">
                <h3 className="font-bold text-[13px]">{stage.title}</h3>
                <p className="text-gray-600 text-[11px]">{stage.description}</p>

                <div className="flex flex-wrap gap-1 mt-1">
                  {stage.keySkills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-0.5 rounded-full text-[10px] ${
                        stage.status === "in-progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {stage.status === "in-progress" && (
                  <div className="mt-2">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${stage.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-[9px] text-gray-500 mt-0.5">
                      Est. completion: {stage.estCompletion}
                    </div>
                  </div>
                )}
              </div>

              <div className="text-[10px] text-gray-500 whitespace-nowrap">{stage.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pathway;
