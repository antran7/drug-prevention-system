import React, { useEffect, useState } from 'react'
import { SearchBar } from '../../components/ui/SearchBar'
import { IoAppsOutline, IoSearchOutline } from 'react-icons/io5'
import { FaBookOpen, FaChartLine, FaEye, FaPrint } from 'react-icons/fa6'
import { TfiExport, TfiImport } from 'react-icons/tfi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { getAllCourse } from '../../services/courseService'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { MdChecklist } from 'react-icons/md'


const PER_PAGE = 10;

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [currentCourses, setCurrentCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const startIdx = (currentPage - 1) * PER_PAGE;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
        console.log(currentPage);
    }

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await getAllCourse();
            if (response) {
                setCourses(response);
                setTotalPages(Math.ceil(response.length / PER_PAGE));
            }
        }
        fetchCourse();
    }, [])

    useEffect(() => {
        setCurrentCourses(courses.slice(startIdx, startIdx + PER_PAGE));
    }, [currentPage, courses]);

    return (
        <div className='h-full text-center'>
            <h1 className='text-4xl font-semibold antialiased py-2'>Courses</h1>
            <div className='flex justify-between'>
                <div className='flex justify-center items-center gap-2'>
                    <SearchBar
                        type="text"
                        className='h-10 min-w-[400px] border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                        placeholder="Search by course name"
                    />
                    <div className='h-10 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                        <IoSearchOutline size={20} />
                    </div>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <div className='h-10 flex items-center border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                        <IoAppsOutline />
                    </div>
                    <div className='h-10 flex justify-center items-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                        <FaChartLine />
                        Reports
                    </div>
                    <div className='h-10 border-1 flex justify-center items-center gap-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                        <TfiExport />
                        Import
                    </div>
                    <div className='h-10 border-1 flex justify-center items-center gap-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                        <TfiImport />
                        Export
                    </div>
                    <div className='h-10 border-1 flex justify-center items-center gap-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                        <FaPrint />
                        Print Courses
                    </div>
                    <div className='h-10 flex justify-center items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                        <IoIosAddCircleOutline />
                        Add New Course
                    </div>
                </div>
            </div>
            <div className='py-6'>
                <div className='overflow-x-auto border border-gray-200'>
                    <table className='table-fixed min-w-full text-left text-gray-700'>
                        <thead className='text-lg'>
                            <tr>
                                <th className='w-1/16 px-3 py-2 border-b border-r border-gray-300 text-center'>#</th>
                                <th className='w-6/16 px-3 py-2 border-b border-r border-gray-300'>Course Name</th>
                                <th className='w-3/16 px-3 py-2 border-b border-r border-gray-300'>Course Code</th>
                                <th className='w-6/16 px-3 py-2 border-b border-r border-gray-300'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCourses.map((course, index) => (
                                <tr key={course.id} className='hover:bg-gray-50'>
                                    <td className='px-2 pt-2 pb-5 border-b border-r border-gray-300 text-center'>{startIdx + index + 1}</td>
                                    <td className='px-2 pt-2 pb-5 border-b border-r border-gray-300'>{course.courseName}</td>
                                    <td className='px-2 pt-2 pb-5 border-b border-r border-gray-300'>{course.courseCode}</td>
                                    <td className='px-2 pt-2 pb-2 border-b border-r border-gray-300 flex gap-1'>
                                        <button className='h-10 flex items-center border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                                            <FaEye />
                                        </button>
                                        <button className='h-10 flex items-center border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                                            <FaBookOpen />
                                        </button>
                                        <button className='h-10 flex items-center border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                                            <FaRegEdit />
                                        </button>
                                        <button className='h-10 flex items-center border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                                            <MdChecklist />
                                        </button>
                                        <button className='h-10 flex items-center border-1 border-red-500 text-red-500 px-3 py-2 rounded-md hover:bg-red-500 hover:text-white transition-colors'>
                                            <FaRegTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center mt-4 text-md text-gray-600">
                    <div className="flex items-center">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-3 py-1 rounded border ${currentPage === i + 1
                                    ? 'border-blue-500 bg-blue-500 text-white'
                                    : 'border-gray-300 hover:bg-gray-100'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100">
                            Next
                        </button>
                        <button onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100">
                            Last
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course