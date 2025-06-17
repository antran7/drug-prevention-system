export default function StatCard({ icon, label, value, color }) {
    return (
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div className={`text-3xl rounded-full p-2`} style={{ backgroundColor: color }}>{icon}</div>
            <div>
                <div className="text-sm">{label}</div>
                <div className="font-bold text-lg">{value}</div>
            </div>
        </div>
    );
}