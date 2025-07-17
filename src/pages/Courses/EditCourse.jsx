import React, { useEffect, useState } from 'react'
import { FaAward, FaDownload, FaEdit, FaRegClock, FaRegCopy, FaRegFileAlt, FaRocketchat, FaTrashAlt, FaUserPlus } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import { Input } from '../../components/ui/Input'
import ImageDrop from '../../components/ui/ImageDrop'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCourseById, updateCourseById } from '../../services/courseService'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const EditCourse = () => {
    const params = useParams();
    const courseId = params.id;
    const navigate = useNavigate();
    const [oldCourseData, setOldCourseData] = useState({});
    const [imageFile, setImageFile] = useState(null);

    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await updateCourseById(courseId, data);
            toast("Updated successfully", {
                icon: "✅",
            });
            navigate("/course");
        } catch (error) {
            toast(error.toString(), {
                icon: "❌",
            });
        }
    }

    useEffect(() => {
        if (imageFile) {
            setValue("image", imageFile);
            trigger("image");
        }
    }, [imageFile, setValue, trigger]);

    useEffect(() => {
        const fetchCourseById = async () => {
            const response = await getCourseById(courseId);
            setOldCourseData(response);
        }
        fetchCourseById();
    }, []);

    return (
        <div className='flex gap-3'>
            <div className='w-full flex flex-col items-center justify-center border border-gray-300 rounded-md bg-gray-100 p-4'>
                <h1 className='flex w-full items-center gap-1 text-2xl font-semibold mb-5'>
                    <FaEdit />
                    Edit course
                </h1>
                <div className='bg-gray-300 w-full h-0.25 mb-5'></div>
                <div className='w-full'>
                    <form id="editCourseForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='flex-1'>
                                <label htmlFor="name" className='block font-medium text-gray-700 mb-1'>Course Name:</label>
                                <Input
                                    id="name"
                                    type="text"
                                    {...register("courseName", {
                                        required: "Course name is required",
                                        minLength: { value: 3, message: "At least 3 characters" }
                                    })}
                                    defaultValue={oldCourseData?.courseName || ''}
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.courseName && <p className='text-red-500 text-sm mt-1'>{errors.courseName.message}</p>}
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="code" className='block font-medium text-gray-700 mb-1'>Course Code:</label>
                                <Input
                                    id="code"
                                    type="text"
                                    {...register("courseCode", {
                                        required: "Course code is required",
                                        minLength: { value: 3, message: "At least 3 characters" }
                                    })}
                                    defaultValue={oldCourseData.courseCode}
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.courseCode && <p className='text-red-500 text-sm mt-1'>{errors.courseCode.message}</p>}
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="description" className='block font-medium text-gray-700 mb-1'>Course Description:</label>
                            <textarea
                                id="description"
                                {...register("description")}
                                defaultValue={oldCourseData.description}
                                className='h-30 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                            ></textarea>
                        </div>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='flex-1'>
                                <label htmlFor="duration" className='block font-medium text-gray-700 mb-1'>Course Duration (Weeks):</label>
                                <Input
                                    type="number"
                                    {...register("duration", {
                                        required: "Duration is required",
                                        valueAsNumber: true,
                                        min: {
                                            value: 1,
                                            message: "Duration must be greater than 0"
                                        }
                                    })}
                                    defaultValue={oldCourseData.duration}
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.duration && <p className='text-red-500 text-sm mt-1'>{errors.duration.message}</p>}
                            </div>
                            <div className='flex-2'>
                                <label htmlFor="language" className='block font-medium text-gray-700 mb-1'>Course Language:</label>
                                <Input
                                    type="text"
                                    {...register("language", { required: "Language is required" })}
                                    defaultValue={oldCourseData.language}
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.language && <p className='text-red-500 text-sm mt-1'>{errors.language.message}</p>}
                            </div>
                            <div className='flex-2'>
                                <label htmlFor="level" className='block font-medium text-gray-700 mb-1'>Course Level:</label>
                                <Input
                                    type="text"
                                    {...register("level", { required: "Level is required" })}
                                    defaultValue={oldCourseData.level}
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.level && <p className='text-red-500 text-sm mt-1'>{errors.level.message}</p>}
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='flex-1'>
                                <label htmlFor="price" className='block font-medium text-gray-700 mb-1'>Course Price:</label>
                                <Input
                                    type="number"
                                    {...register("price", {
                                        required: "Price is required",
                                        valueAsNumber: true,
                                        min: {
                                            value: 1,
                                            message: "Price must be greater than 0"
                                        }
                                    })}
                                    defaultValue={oldCourseData.price}
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.price && <p className='text-red-500 text-sm mt-1'>{errors.price.message}</p>}
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="discount" className='block font-medium text-gray-700 mb-1'>Course Discount (%):</label>
                                <Input
                                    type="number"
                                    {...register("discount", {
                                        valueAsNumber: true,
                                        min: {
                                            value: 1,
                                            message: "Discount must be greater than 0"
                                        }
                                    })}
                                    defaultValue={oldCourseData.discount}
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.discount && <p className='text-red-500 text-sm mt-1'>{errors.discount.message}</p>}
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='flex-1'>
                                <label htmlFor="instructor" className='block font-medium text-gray-700 mb-1'>Course Instructor:</label>
                                <select
                                    id="instructor"
                                    {...register("instructor", {
                                        required: "Please choose an instructor"
                                    })}
                                    defaultValue={oldCourseData.instructor}
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                >
                                    <option>Select Instructor</option>
                                    <option value="person1">1</option>
                                    <option value="person2">2</option>
                                    <option value="person3">3</option>
                                </select>
                                {errors.instructor && <p className='text-red-500 text-sm mt-1'>{errors.instructor.message}</p>}
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="syllabus" className='block font-medium text-gray-700 mb-1'>Course Syllabus Template:</label>
                                <select
                                    id='syllabus'
                                    {...register("syllabus")}
                                    defaultValue={oldCourseData.syllabus || ''}
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                >
                                    <option>Select Syllabus (Optional)</option>
                                    <option value="person1">1</option>
                                    <option value="person2">2</option>
                                    <option value="person3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="image" className='block font-medium text-gray-700 mb-1'>Course Image:</label>
                            <ImageDrop
                                id="image"
                                onImageSelect={setImageFile}
                                {...register("image", {
                                    required: "Please upload a course image",
                                })}
                            />
                            <img
                                src={imageFile || oldCourseData.image}
                                alt='Preview'
                                className='max-h-40 object-contain border rounded'
                            />
                            {errors.image && <p className='text-red-500 text-sm mt-1'>{errors.image.message}</p>}
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 px-3 py-2 bg-gray-100'>
                <button
                    type='submit'
                    form='editCourseForm'
                    className='h-10 w-full flex items-center justify-center gap-1 border-1 border-blue-500 text-blue-500 px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors'
                >
                    <FaDownload />
                    Save
                </button>
                <Link
                    to={'/course'}
                    className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'
                >
                    <MdOutlineCancel />
                    Cancel
                </Link>
                <button className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    Publish
                </button>
                <button className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    UnPublish
                </button>
                <button className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    <FaUserPlus />
                    Back Edit
                </button>
                <button className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    <FaUserPlus />
                    Assign Materials
                </button>
                <button className='min-h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    <FaAward />
                    Assign Course PreRequisites
                </button>
                <button className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    <FaRocketchat />
                    Section
                </button>
                <button className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    <FaRegFileAlt />
                    Topic
                </button>
                <button className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    <FaRegClock />
                    Assessment
                </button>
                <button className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    <FaRegCopy />
                    Duplicate
                </button>
                <button className='h-10 w-full flex items-center justify-center gap-1 border-1 border-gray-500 text-gray-500 px-3 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors'>
                    <FaTrashAlt />
                    Delete
                </button>
            </div>
        </div>
    )
}

export default EditCourse
