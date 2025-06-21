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
    <div className="p-6">
      {/* Banner */}
      <div className="bg-gray-100 p-8 rounded-xl text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Discover Your Next Course</h1>
        <p className="text-gray-600 mb-6">
          Expand your knowledge with our carefully curated courses
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="What do you want to learn today?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-l-md border border-gray-300 w-96 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 rounded-r-md">
            🔍
          </button>
        </div>
      </div>

      {/* Available Courses */}
      <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.slice(0, visibleCount).map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden relative"
          >
            <div className="h-36 bg-gray-300 flex items-center justify-center text-3xl text-gray-500 font-semibold relative">
              Course
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-sm">{course.courseName}</h3>
              <p className="text-xs text-gray-500">No Instructor</p>
              <div className="flex items-center space-x-1 text-sm">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-500">(4.8)</span>
                <button className="ml-auto text-xs text-blue-600 border px-2 rounded hover:underline">
                  Feedback
                </button>
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/courses/${course.id}`}
                  className="border border-blue-600 text-blue-600 text-sm px-3 py-1 rounded w-full text-center"
                >
                  ℹ Details
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
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {expanded ? "Show Less" : "Load More Courses"}
          </button>
        </div>
      )}

      {/* Recently Learned Courses */}
      <h2 className="text-2xl font-semibold my-8 border-b border-gray-300 pb-2">
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
