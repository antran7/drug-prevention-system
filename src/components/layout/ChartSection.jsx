import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Users', value: 519 },
    { name: 'Courses', value: 39 },
    { name: 'Modules', value: 42 },
    { name: 'Enrollments', value: 18 },
];

export default function ChartSection() {
    return (
        <div className="bg-white p-4 rounded-lg shadow w-full">
            <h2 className="font-semibold mb-4">System Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#38bdf8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}