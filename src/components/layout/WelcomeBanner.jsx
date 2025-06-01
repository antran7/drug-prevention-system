export default function WelcomeBanner() {
    return (
        <div className="bg-blue-500 text-white rounded-xl p-6 text-2xl font-bold flex justify-between items-center">
            <div>
                <div>Welcome to superadmin Dashboard (SuperAdmin)</div>
                <p className="text-base font-normal mt-2">Access all your modules and tools in one place</p>
            </div>
            <div className="text-6xl">📊</div>
        </div>
    );
}