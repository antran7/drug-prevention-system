import React, { useState, useEffect } from "react";
import { getAllCourse } from "../../services/courseService";
import { Link } from "react-router-dom";

const recentlyLearned = [
  {
    id: 1,
    title: "Java Spring Framework",
    author: "test test",
    image: "",
  },
  {
    id: 2,
    title: "Spring Boots & Spring JPA (freeCodeCamp.org)",
    author: "test test",
    image: "",
  },
  {
    id: 3,
    title:
      "The ULTIMATE Guide to Spring Boot: Spring Boot for Beginners (Devtíro)",
    author: "test test",
    image: "https://i3.ytimg.com/vi/9SGDpanrc8U/maxresdefault.jpg",
  },
];

const GoToLearnPage = () => {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [expanded, setExpanded] = useState(false);

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = () => {
    if (expanded) {
      setVisibleCount(8);
    } else {
      setVisibleCount(filteredCourses.length);
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllCourse();
      setCourses(res || []);
    };
    fetchData();
  }, []);

  return (
    <div className="pt-6 pb-6 px-0 w-full">
      {/* Banner */}
      <div className="bg-gradient-to-br from-[#eceff1] to-[#f6fbff] rounded-b-3xl rounded-t-2xl text-center mb-8 px-2 py-10 w-full shadow-sm">
        <h1 className="text-5xl font-bold mb-4">Discover Your Next Course</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Expand your knowledge with our carefully curated courses
        </p>
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full shadow-lg px-2 py-2 w-[500px] max-w-full border-2 border-white focus-within:ring-2 focus-within:ring-blue-400 transition">
              <input
                type="text"
                placeholder="What do you want to learn today?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent px-4 py-2 rounded-full focus:outline-none text-base h-10 border-none "
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl transition shadow-lg">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Available Courses */}
      <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.slice(0, visibleCount).map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl overflow-hidden relative transition-all duration-300 hover:scale-105 group max-w-[550px]"
          >
            <div className="h-36 bg-gray-200 flex items-center justify-center">
              <span className="text-5xl text-gray-400 font-bold transition-transform duration-300 group-hover:scale-110">
                Course
              </span>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-lg">{course.courseName}</h3>
              <p className="text-xs text-gray-500">No Instructor</p>
              <div className="flex items-center space-x-1 text-base mb-2">
                <span className="text-yellow-500 text-lg">★★★★★</span>
                <span className="text-gray-600 text-sm">(4.8)</span>
                <button className="cursor-pointer ml-2 text-xs border border-blue-500 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-50 transition">
                  Feedback
                </button>
              </div>
              <div className="flex justify-center gap-3 mt-2 w-full ">
                <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-md font-semibold text-xs hover:bg-blue-700 transition h-7 max-w-[160px]">
                  <i className="fa-solid fa-play text-sm"></i>
                  Learning
                </button>
                <Link
                  to={`/courses/${course.id}`}
                  className="flex-1 flex items-center justify-center gap-2 border border-blue-500 text-blue-600 px-3 py-1.5 rounded-md font-semibold text-xs hover:bg-blue-50 transition h-7 max-w-[160px]"
                >
                  <i className="fa-regular fa-circle-info text-sm"></i>
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {filteredCourses.length > 8 && (
        <div className="mt-6 text-center">
          <button
            onClick={handleToggle}
            className="mx-auto text-sm border border-blue-500 text-blue-600 bg-white text-base px-6 py-2 rounded cursor-pointer flex items-center justify-center gap-2 transition hover:bg-blue-600 hover:text-white hover:border-blue-700 "
            style={{ minWidth: 120 }}
          >
            {expanded ? "Show Less" : "Load More Courses"}
            <span className="text-lg">{expanded ? "▲" : "▼"}</span>
          </button>
        </div>
      )}

      {/* Recently Learned Courses */}
      <h2 className="text-2xl font-semibold my-8 border-b border-gray-300 pb-2 text-center">
        Recently Learned Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentlyLearned.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {course.image ? (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-3xl text-gray-500 font-semibold">
                Course
              </div>
            )}
            <div className="p-4">
              <h3 className="font-semibold text-base leading-tight mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{course.author}</p>
              <button className="text-blue-600 font-medium text-sm hover:underline">
                Start Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoToLearnPage;
