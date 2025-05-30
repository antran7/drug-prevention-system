import React from 'react'
import Sidebar from '../../components/layout/Sidebar';
import Navbar from '../../components/layout/Navbar';
import WelcomeBanner from '../../components/layout/WelcomeBanner';
import StatCard from '../../components/common/StatCard';
import ChartSection from '../../components/layout/ChartSection';
import { FaUsers, FaBook, FaPuzzlePiece, FaUserCheck } from 'react-icons/fa';
import ModuleGrid from '../../components/layout/ModuleGrid';
import RecentActivity from '../../components/layout/RecentActivity';

const Home = () => {
  return (
    <>
      <main className="p-6 space-y-6">
        <WelcomeBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={<FaUsers />} label="Users" value="519" color="#99f6e4" />
          <StatCard icon={<FaBook />} label="Courses" value="39" color="#bfdbfe" />
          <StatCard icon={<FaPuzzlePiece />} label="Modules" value="42" color="#bbf7d0" />
          <StatCard icon={<FaUserCheck />} label="Enrollments" value="18" color="#fde68a" />
        </div>

        <ChartSection />
        <ModuleGrid />
        <RecentActivity />
      </main>
    </>
  )
}

export default Home
