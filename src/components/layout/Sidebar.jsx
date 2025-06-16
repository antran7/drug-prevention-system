// src/components/Sidebar.jsx
import {
    FaUserCog, FaUser, FaMapMarkerAlt, FaLayerGroup, FaHistory, FaBell,
    FaComments, FaThLarge, FaDiceFive, FaUserCircle, FaTrophy, FaRoute, FaBook,
    FaCertificate, FaFolderOpen, FaStar, FaListAlt, FaGlobe, FaParking, FaRobot,
    FaTools, FaCheckCircle, FaCode, FaSpinner, FaCommentDots, FaEye, FaChartBar,
    FaFileAlt, FaPaperPlane, FaUsers, FaFolder, FaQuestionCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar({ state }) {
    const groups = [
        {
            title: "Users",
            items: [
                { icon: <FaUserCog />, label: "Role", to: "/role" },
                { icon: <FaUser />, label: "User", to: "/user" },
                { icon: <FaMapMarkerAlt />, label: "Location", to: "/location" },
                { icon: <FaLayerGroup />, label: "Department", to: "/department" },
                { icon: <FaHistory />, label: "Activity", to: "/activity" },
                { icon: <FaBell />, label: "Notification", to: "/notification" },
                { icon: <FaComments />, label: "Forum", to: "/forum" },
                { icon: <FaUsers />, label: "Collaboration Group", to: "/collaboration-group" },
                { icon: <FaThLarge />, label: "Module Group", to: "/module-group" },
                { icon: <FaThLarge />, label: "Module", to: "/module" },
                { icon: <FaDiceFive />, label: "Competency Category", to: "/competency-category" },
                { icon: <FaLayerGroup />, label: "Competencie", to: "/competency" },
                { icon: <FaUserCircle />, label: "Instructor", to: "/instructor" },
            ],
        },
        {
            title: "Courses",
            items: [
                { icon: <FaTrophy />, label: "Achievement", to: "/achievement" },
                { icon: <FaRoute />, label: "Learning Path", to: "/learning-path" },
                { icon: <FaBook />, label: "Course", to: "/course" },
                { icon: <FaCertificate />, label: "Certification", to: "/certification" },
                { icon: <FaFolderOpen />, label: "Resource", to: "/resource" },
                { icon: <FaFolder />, label: "Syllabus", to: "/syllabus" },
                { icon: <FaStar />, label: "Rating" },
                { icon: <FaListAlt />, label: "Enrollment" },
                { icon: <FaGlobe />, label: "Global Resource", to: "/global-resource" },
                { icon: <FaParking />, label: "Training Program", to: "/training-program" },
                { icon: <FaRobot />, label: "Chat bot", to: "/chat-bot" },
            ],
        },
        {
            title: "Assessments",
            items: [
                { icon: <FaFolder />, label: "Assessment Type", to: "/assessment-type" },
                { icon: <FaTools />, label: "Tools", to: "/tools" },
                { icon: <FaCheckCircle />, label: "Assessment", to: "/assessment" },
                { icon: <FaCode />, label: "Exercise", to: "/exercise" },
                { icon: <FaSpinner />, label: "Programing Language", to: "/programming-language" },
                { icon: <FaCommentDots />, label: "Input Score", to: "/input-score" },
                { icon: <FaEye />, label: "Grade Config", to: "/grade-config" },
            ],
        },
        {
            title: "System",
            items: [
                { icon: <FaChartBar />, label: "Report" },
                { icon: <FaFileAlt />, label: "Swagger - Documents" },
                { icon: <FaPaperPlane />, label: "Chat" },
            ],
        },
        {
            title: "Students",
            items: [
                { icon: <FaCommentDots />, label: "Attendance", to: "/attendance" },
                { icon: <FaUsers />, label: "Group", to: "/group" },
                { icon: <FaUser />, label: "Student", to: "/student" },
                { icon: <FaFolder />, label: "Team", to: "/team" },
                { icon: <FaQuestionCircle />, label: "Quiz", to: "/quiz" },
                { icon: <FaThLarge />, label: "Student Course", to: "/student-course" },
            ],
        },
        {
            title: "Feedbacks",
            items: [
                { icon: <FaFileAlt />, label: "Progress management", to: "/progress-management" },
                { icon: <FaComments />, label: "Feedback", to: "/feedback" },
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
                            {group.items.map((item, itemIndex) => (
                                <Link
                                    to={item.to}
                                    key={itemIndex}
                                    className={`hover:bg-[#0e3b57] rounded cursor-pointer ${state === 2 ? "flex items-center gap-3 px-4 py-2" : "flex flex-col items-center text-center w-full px-2"}`}
                                >
                                    <div className="text-3xl">{item.icon}</div>
                                    <span className={`${state === 2 ? 'text-lg' : 'text-sm text-center leading-tight break-words'}`}>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                        <hr className="border-gray-700 my-2 mx-4" />
                    </div>
                ))}
            </div>
        </aside>
    );
}
