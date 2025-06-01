// src/components/Sidebar.jsx
import {
    FaUserCog, FaUser, FaMapMarkerAlt, FaLayerGroup, FaHistory, FaBell,
    FaComments, FaThLarge, FaDiceFive, FaUserCircle, FaTrophy, FaRoute, FaBook,
    FaCertificate, FaFolderOpen, FaStar, FaListAlt, FaGlobe, FaParking, FaRobot,
    FaTools, FaCheckCircle, FaCode, FaSpinner, FaCommentDots, FaEye, FaChartBar,
    FaFileAlt, FaPaperPlane, FaUsers, FaFolder, FaQuestionCircle
} from 'react-icons/fa';

export default function Sidebar({ state }) {
    const groups = [
        {
            title: "Users",
            items: [
                { icon: <FaUserCog />, label: "Role" },
                { icon: <FaUser />, label: "User" },
                { icon: <FaMapMarkerAlt />, label: "Location" },
                { icon: <FaLayerGroup />, label: "Department" },
                { icon: <FaHistory />, label: "Activity" },
                { icon: <FaBell />, label: "Notification" },
                { icon: <FaComments />, label: "Forum" },
                { icon: <FaUsers />, label: "Collaboration Group" },
                { icon: <FaThLarge />, label: "Module Group" },
                { icon: <FaThLarge />, label: "Module" },
                { icon: <FaDiceFive />, label: "Competency Category" },
                { icon: <FaLayerGroup />, label: "Competencie" },
                { icon: <FaUserCircle />, label: "Instructor" },
            ],
        },
        {
            title: "Courses",
            items: [
                { icon: <FaTrophy />, label: "Achievement" },
                { icon: <FaRoute />, label: "Learning Path" },
                { icon: <FaBook />, label: "Course" },
                { icon: <FaCertificate />, label: "Certification" },
                { icon: <FaFolderOpen />, label: "Resource" },
                { icon: <FaFolder />, label: "Syllabus" },
                { icon: <FaStar />, label: "Rating" },
                { icon: <FaListAlt />, label: "Enrollment" },
                { icon: <FaGlobe />, label: "Global Resource" },
                { icon: <FaParking />, label: "Training Program" },
                { icon: <FaRobot />, label: "Chat bot" },
            ],
        },
        {
            title: "Assessments",
            items: [
                { icon: <FaFolder />, label: "Assessment Type" },
                { icon: <FaTools />, label: "Tools" },
                { icon: <FaCheckCircle />, label: "Assessment" },
                { icon: <FaCode />, label: "Exercise" },
                { icon: <FaSpinner />, label: "Programing Language" },
                { icon: <FaCommentDots />, label: "Input Score" },
                { icon: <FaEye />, label: "Grade Config" },
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
                { icon: <FaCommentDots />, label: "Attendance" },
                { icon: <FaUsers />, label: "Group" },
                { icon: <FaUser />, label: "Student" },
                { icon: <FaFolder />, label: "Team" },
                { icon: <FaQuestionCircle />, label: "Quiz" },
                { icon: <FaThLarge />, label: "Student Course" },
            ],
        },
        {
            title: "Feedbacks",
            items: [
                { icon: <FaFileAlt />, label: "Progress management" },
                { icon: <FaComments />, label: "Feedback" },
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
                                <div
                                    key={itemIndex}
                                    className={`hover:bg-[#0e3b57] rounded cursor-pointer ${state === 2 ? "flex items-center gap-3 px-4 py-2" : "flex flex-col items-center text-center w-full px-2"}`}
                                >
                                    <div className="text-3xl">{item.icon}</div>
                                    <span className={`${state === 2 ? 'text-lg' : 'text-sm text-center leading-tight break-words'}`}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <hr className="border-gray-700 my-2 mx-4" />
                    </div>
                ))}
            </div>
        </aside>
    );
}
