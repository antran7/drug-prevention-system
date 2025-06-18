import {
  FaUserCog, FaUser, FaMapMarkerAlt, FaLayerGroup, FaHistory, FaBell,
  FaComments, FaThLarge, FaDiceFive, FaUserCircle, FaTrophy, FaRoute, FaBook,
  FaCertificate, FaFolderOpen, FaStar, FaListAlt, FaGlobe, FaParking, FaRobot,
  FaTools, FaCheckCircle, FaCode, FaSpinner, FaCommentDots, FaEye, FaChartBar,
  FaFileAlt, FaPaperPlane, FaUsers, FaFolder, FaQuestionCircle
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ state }) {
  const location = useLocation();

  const groups = [
    {
      title: "Users",
      items: [
        { icon: <FaUserCog />, label: "Role", to: "/roles" },
        { icon: <FaUser />, label: "User", to: "/users" },
        { icon: <FaMapMarkerAlt />, label: "Location", to: "/locations" },
        { icon: <FaLayerGroup />, label: "Department", to: "/departments" },
        { icon: <FaHistory />, label: "Activity", to: "/activities" },
        { icon: <FaBell />, label: "Notification", to: "/notifications" },
        { icon: <FaComments />, label: "Forum", to: "/forums" },
        { icon: <FaUsers />, label: "Collaboration Group", to: "/collab-groups" },
        { icon: <FaThLarge />, label: "Module Group", to: "/module-groups" },
        { icon: <FaThLarge />, label: "Module", to: "/modules" },
        { icon: <FaDiceFive />, label: "Competency Category", to: "/competency-categories" },
        { icon: <FaLayerGroup />, label: "Competencie", to: "/competencies" },
        { icon: <FaUserCircle />, label: "Instructor", to: "/instructors" },
      ],
    },
    {
      title: "Courses",
      items: [
        { icon: <FaTrophy />, label: "Achievement", to: "/achievements" },
        { icon: <FaRoute />, label: "Learning Path", to: "/paths" },
        { icon: <FaBook />, label: "Course", to: "/course" },
        { icon: <FaCertificate />, label: "Certification", to: "/certifications" },
        { icon: <FaFolderOpen />, label: "Resource", to: "/resources" },
        { icon: <FaFolder />, label: "Syllabus", to: "/syllabus" },
        { icon: <FaStar />, label: "Rating", to: "/ratings" },
        { icon: <FaListAlt />, label: "Enrollment", to: "/enrollments" },
        { icon: <FaGlobe />, label: "Global Resource", to: "/global-resources" },
        { icon: <FaParking />, label: "Training Program", to: "/programs" },
        { icon: <FaRobot />, label: "Chat bot", to: "/chatbot" },
      ],
    },
    {
      title: "Assessments",
      items: [
        { icon: <FaFolder />, label: "Assessment Type", to: "/assessment-types" },
        { icon: <FaTools />, label: "Tools", to: "/tools" },
        { icon: <FaCheckCircle />, label: "Assessment", to: "/assessments" },
        { icon: <FaCode />, label: "Exercise", to: "/exercises" },
        { icon: <FaSpinner />, label: "Programming Language", to: "/languages" },
        { icon: <FaCommentDots />, label: "Input Score", to: "/input-scores" },
        { icon: <FaEye />, label: "Grade Config", to: "/grade-config" },
      ],
    },
    {
      title: "System",
      items: [
        { icon: <FaChartBar />, label: "Report", to: "/reports" },
        { icon: <FaFileAlt />, label: "Swagger - Documents", to: "/docs" },
        { icon: <FaPaperPlane />, label: "Chat", to: "/chat" },
      ],
    },
    {
      title: "Students",
      items: [
        { icon: <FaCommentDots />, label: "Attendance", to: "/attendance" },
        { icon: <FaUsers />, label: "Group", to: "/groups" },
        { icon: <FaUser />, label: "Student", to: "/students" },
        { icon: <FaFolder />, label: "Team", to: "/teams" },
        { icon: <FaQuestionCircle />, label: "Quiz", to: "/quizzes" },
        { icon: <FaThLarge />, label: "Student Course", to: "/student-courses" },
      ],
    },
    {
      title: "Feedbacks",
      items: [
        { icon: <FaFileAlt />, label: "Progress management", to: "/progress" },
        { icon: <FaComments />, label: "Feedback", to: "/feedbacks" },
      ],
    },
  ];

  const width = state === 1 ? "w-28" : "w-76";

  return (
    <aside className={`bg-[#052c45] text-white ${width} transition-all duration-300 h-full overflow-y-auto`}>
      <div className="py-4 space-y-2">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {state === 2 && (
              <div className="text-sm font-semibold uppercase px-4 py-1 text-gray-300">{group.title}</div>
            )}
            <div className={`space-y-1 ${state === 1 ? 'flex flex-col items-center gap-2' : ''}`}>
              {group.items.map((item, itemIndex) => {
                const isActive = location.pathname.startsWith(item.to || '');
                const baseClass = `rounded ${state === 2 ? "flex items-center gap-3 px-4 py-2" : "flex flex-col items-center text-center w-full px-2"}`;
                const activeClass = isActive ? 'bg-[#0e3b57]' : 'hover:bg-[#0e3b57]';

                return item.to ? (
                  <Link
                    key={itemIndex}
                    to={item.to}
                    className={`${baseClass} ${activeClass} text-white no-underline`}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className={`${state === 2 ? 'text-md' : 'text-xs text-center leading-tight break-words'}`}>
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <div
                    key={itemIndex}
                    className={`${baseClass} hover:bg-[#0e3b57] cursor-pointer`}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className={`${state === 2 ? 'text-md' : 'text-xs text-center leading-tight break-words'}`}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <hr className="border-gray-700 my-2 mx-4" />
          </div>
        ))}
      </div>
    </aside>
  );
}
