import { FaFileAlt, FaUserPlus, FaExclamationTriangle } from 'react-icons/fa';

const activities = [
    {
        icon: <FaFileAlt />,
        title: 'Report Updated',
        description: 'Monthly report was updated',
        time: '2 hours ago',
        color: 'bg-blue-100 text-blue-500',
    },
    {
        icon: <FaUserPlus />,
        title: 'New User Added',
        description: 'A new user was added to the system',
        time: 'Yesterday',
        color: 'bg-green-100 text-green-600',
    },
    {
        icon: <FaExclamationTriangle />,
        title: 'System Alert',
        description: 'System maintenance scheduled',
        time: '2 days ago',
        color: 'bg-yellow-100 text-yellow-600',
    },
];

export default function RecentActivity() {
    return (
        <div className="bg-white p-6 rounded shadow space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Recent Activity</h2>
                <button className="text-blue-600 border border-blue-500 px-3 py-1 rounded text-sm hover:bg-blue-50">
                    View All
                </button>
            </div>

            <div className="divide-y">
                {activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.color}`}>
                                {activity.icon}
                            </div>
                            <div>
                                <div className="font-semibold">{activity.title}</div>
                                <div className="text-sm text-gray-500">{activity.description}</div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-400">{activity.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
