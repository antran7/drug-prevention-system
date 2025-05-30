import {
    FaUserCog, FaUser, FaMapMarkerAlt, FaLayerGroup, FaHistory, FaBell,
    FaComments, FaThLarge, FaDiceFive, FaUserCircle, FaTrophy, FaRoute,
    FaBook, FaCertificate, FaFileAlt, FaFolder,
    FaTools, FaCheckCircle, FaCode, FaDotCircle,
    FaWeibo, FaChartBar, FaPaperPlane, FaUsers, FaUserGraduate,
    FaQuestionCircle
} from 'react-icons/fa';

export const moduleSections = [
    {
        title: 'Users',
        icon: FaUsers,
        items: [
            { icon: FaUserCog, label: 'Role', description: 'Access and manage your module features' },
            { icon: FaUser, label: 'User', description: 'Access and manage your module features' },
            { icon: FaMapMarkerAlt, label: 'Location', description: 'Access and manage your module features' },
            { icon: FaLayerGroup, label: 'Department', description: 'Access and manage your module features' },
            { icon: FaHistory, label: 'Activity', description: 'Access and manage your module features' },
            { icon: FaBell, label: 'Notification', description: 'Access and manage your module features' },
            { icon: FaComments, label: 'Forum', description: 'Access and manage your module features' },
            { icon: FaThLarge, label: 'Module Group', description: 'Access and manage your module features' },
            { icon: FaThLarge, label: 'Module', description: 'Access and manage your module features' },
            { icon: FaDiceFive, label: 'Competency Category', description: 'Access and manage your module features' },
            { icon: FaLayerGroup, label: 'Competencie', description: 'Access and manage your module features' },
            { icon: FaUserCircle, label: 'Instructor', description: 'Access and manage your module features' }
        ]
    },
    {
        title: 'Courses',
        icon: FaBook,
        items: [
            { icon: FaTrophy, label: 'Achievement', description: 'Access and manage your module features' },
            { icon: FaRoute, label: 'Learning Path', description: 'Access and manage your module features' },
            { icon: FaBook, label: 'Course', description: 'Access and manage your module features' },
            { icon: FaCertificate, label: 'Certification', description: 'Access and manage your module features' },
            { icon: FaFileAlt, label: 'Resource', description: 'Access and manage your module features' },
            { icon: FaFolder, label: 'Syllabus', description: 'Access and manage your module features' },
        ]
    },
    {
        title: 'Assessments',
        icon: FaCheckCircle,
        items: [
            { icon: FaFolder, label: 'Assessment Type', description: 'Access and manage your module features' },
            { icon: FaTools, label: 'Tools', description: 'Access and manage your module features' },
            { icon: FaCheckCircle, label: 'Assessment', description: 'Access and manage your module features' },
            { icon: FaCode, label: 'Exercise', description: 'Access and manage your module features' },
            { icon: FaDotCircle, label: 'Programing Language', description: 'Access and manage your module features' },
            { icon: FaComments, label: 'Input Score', description: 'Access and manage your module features' },
            { icon: FaWeibo, label: 'Grade Config', description: 'Access and manage your module features' },
        ]
    },
    {
        title: 'System',
        icon: FaChartBar,
        items: [
            { icon: FaChartBar, label: 'Report', description: 'Access and manage your module features' },
            { icon: FaBook, label: 'Swagger - Documents', description: 'Access and manage your module features' },
            { icon: FaPaperPlane, label: 'Chat', description: 'Access and manage your module features' },
        ]
    },
    {
        title: 'Students',
        icon: FaUserGraduate,
        items: [
            { icon: FaComments, label: 'Attendance', description: 'Access and manage your module features' },
            { icon: FaUsers, label: 'Group', description: 'Access and manage your module features' },
            { icon: FaUser, label: 'Student', description: 'Access and manage your module features' },
            { icon: FaFolder, label: 'Team', description: 'Access and manage your module features' },
            { icon: FaQuestionCircle, label: 'Quiz', description: 'Access and manage your module features' },
            { icon: FaThLarge, label: 'Student Course', description: 'Access and manage your module features' },
        ]
    },
    {
        title: 'Feedbacks',
        icon: FaComments,
        items: [
            { icon: FaBook, label: 'Progress management', description: 'Access and manage your module features' },
            { icon: FaComments, label: 'Feedback', description: 'Access and manage your module features' },
        ]
    }
];
