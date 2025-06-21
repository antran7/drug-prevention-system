import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllCourse } from "../../services/courseService";
import {
  FaUser,
  FaUsers,
  FaVideo,
  FaFileAlt,
  FaGlobe,
  FaCertificate,
  FaSignal,
  FaArrowLeft,
  FaCheck,
  FaUserGraduate,
} from "react-icons/fa";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await getAllCourse();
      if (res && res.length > 0) {
        const found = res.find((c) => c.id === id);
        setCourse(found);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) {
    return <div className="p-6 text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-4xl font-bold">{course.courseName}</h1>

      {/* Course Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <div className="bg-white rounded-xl shadow-2xl p-6 space-y-4 hover:shadow-2xl transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center text-sm gap-2">
                  <span className="font-medium">Instructor:</span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded">
                    <FaUser /> N/A
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: <strong>November 2024</strong>
                </div>

                <div className="flex items-center text-sm gap-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    ★★★★☆
                  </div>
                  <div className="text-gray-600">(4.6)</div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <FaUsers /> 0
                  </div>
                </div>

                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Description:</strong> No description available.
                  </p>
                  <p>
                    <strong>Prerequisites:</strong>
                    <span className="ml-2 bg-gray-100 px-2 py-1 rounded text-xs">
                      No prerequisites required.
                    </span>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mt-2">
                  <div className="font-semibold mb-2 flex items-center gap-2 text-base">
                    <FaUserGraduate className="inline" /> Detail
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FaVideo /> 0 videos lecture
                      </div>
                      <div className="flex items-center gap-2">
                        <FaFileAlt /> 0 files lecture
                      </div>
                      <div className="flex items-center gap-2">
                        <FaGlobe /> English
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FaCertificate /> Certificate of completion
                      </div>
                      <div className="flex items-center gap-2">
                        <FaSignal /> Beginner
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-100 flex-shrink-0">
                <div className="shadow-2xl bg-white ">
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-t-xl">
                    <span className="text-6xl font-bold text-gray-400">Course</span>
                  </div>
                  <div className="p-6 flex flex-col items-center rounded-b-none">
                    <button className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full text-base font-semibold flex items-center justify-center gap-2">
                      <FaCheck /> Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition">
        <h2 className="text-xl font-semibold mb-4">Course Content</h2>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs px-2 py-1 bg-cyan-400 text-white rounded-full font-semibold">
            0 sections
          </span>
          <span className="text-xs px-2 py-1 bg-cyan-400 text-white rounded-full font-semibold">
            0 lectures
          </span>
          <span className="text-xs px-2 py-1 bg-cyan-400 text-white rounded-full font-semibold">
            0min
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition">
        <h2 className="text-xl font-semibold mb-2">Latest Feedback</h2>
        <p className="text-sm text-gray-600">Chưa có code :)</p>
        <p className="text-sm text-gray-400 mt-1">November 25, 2024</p>
      </div>

      {/* Back Button */}
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/course")}
          className="border px-4 py-2 text-sm rounded hover:bg-gray-100 flex items-center gap-1"
        >
          <FaArrowLeft /> Back to Course List
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;