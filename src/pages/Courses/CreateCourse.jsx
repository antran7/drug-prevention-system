import React, { useEffect, useState } from 'react'
import { Input } from '../../components/ui/Input'
import ImageDrop from '../../components/ui/ImageDrop'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createCourse } from '../../services/courseService';
import toast from 'react-hot-toast';

const CreateCourse = () => {
    const navigate = useNavigate();
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
            await createCourse(data);
            toast("New course added successfully", {
                icon: "✅",
            });
            navigate('/course');
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

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-5/6 border border-gray-400 rounded-md shadow-2xl'>
                <div className='rounded-t-md bg-blue-500 text-white'>
                    <h1 className='font-medium text-3xl px-2 py-3'>Create Course</h1>
                </div>
                <div className='p-5'>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='grow-1'>
                                <label htmlFor="name" className='block font-medium text-gray-700 mb-1'>Course Name:</label>
                                <Input
                                    id='name'
                                    type="text"
                                    {...register("courseName", { required: "Course name is required", minLength: { value: 3, message: "At least 3 characters" } })}
                                    placeholder='Enter course name'
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.courseName && <p className='text-red-500 text-sm mt-1'>{errors.courseName.message}</p>}
                            </div>
                            <div className='grow-1'>
                                <label htmlFor="code" className='block font-medium text-gray-700 mb-1'>Course Code:</label>
                                <Input
                                    id='code'
                                    type="text"
                                    {...register("courseCode", { required: "Course code is required", minLength: { value: 3, message: "At least 3 characters" } })}
                                    placeholder='Enter course code'
                                    className='h-10 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.courseCode && <p className='text-red-500 text-sm mt-1'>{errors.courseCode.message}</p>}
                            </div>
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label htmlFor="description" className='block font-medium text-gray-700 mb-1'>Course Description:</label>
                            <textarea
                                id="description"
                                {...register("description")}
                                placeholder='Enter course description'
                                className='h-30 min-w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                            ></textarea>
                        </div>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='grow-0'>
                                <label htmlFor="duration" className='block font-medium text-gray-700 mb-1'>Course Duration (Weeks):</label>
                                <Input
                                    type="number"
                                    {...register("duration", { required: "Duration is required" })}
                                    defaultValue={0}
                                    className='h-10 w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.duration && <p className='text-red-500 text-sm mt-1'>{errors.duration.message}</p>}
                            </div>
                            <div className='grow-2'>
                                <label htmlFor="language" className='block font-medium text-gray-700 mb-1'>Course Language:</label>
                                <Input
                                    type="text"
                                    {...register("language", { required: "Language is required" })}
                                    placeholder='Enter course language'
                                    className='h-10 w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.language && <p className='text-red-500 text-sm mt-1'>{errors.language.message}</p>}
                            </div>
                            <div className='grow-3'>
                                <label htmlFor="level" className='block font-medium text-gray-700 mb-1'>Course Level:</label>
                                <Input
                                    type="text"
                                    {...register("level", { required: "Level is required" })}
                                    placeholder='Enter course level (e.g., Beginner, Intermediate, Advanced)'
                                    className='h-10 w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.level && <p className='text-red-500 text-sm mt-1'>{errors.level.message}</p>}
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='grow-1'>
                                <label htmlFor="price" className='block font-medium text-gray-700 mb-1'>Course Price:</label>
                                <Input
                                    type='number'
                                    defaultValue={0}
                                    {...register("price", {
                                        required: "Price is required",
                                        valueAsNumber: true,
                                        min: {
                                            value: 1,
                                            message: "Price must be greater than 0"
                                        }
                                    })}
                                    className='h-10 w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                                {errors.price && <p className='text-red-500 text-sm mt-1'>{errors.price.message}</p>}
                            </div>
                            <div className='grow-1'>
                                <label htmlFor="discount" className='block font-medium text-gray-700 mb-1'>Course Discount (%):</label>
                                <Input
                                    type='number'
                                    defaultValue={0}
                                    className='h-10 w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mb-5'>
                            <div className='grow-1'>
                                <label htmlFor="instructor" className='block font-medium text-gray-700 mb-1'>Course Instructor:</label>
                                <select
                                    id="instructor"
                                    {...register("instructor", {
                                        required: "Please choose an instructor",
                                    })}
                                    className='h-10 w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
                                >
                                    <option>Select Instructor</option>
                                    <option value="person1">1</option>
                                    <option value="person2">2</option>
                                    <option value="person3">3</option>
                                </select>
                                {errors.instructor && <p className='text-red-500 text-sm mt-1'>{errors.instructor.message}</p>}
                            </div>
                            <div className='grow-1'>
                                <label htmlFor="syllabus" className='block font-medium text-gray-700 mb-1'>Course Syllabus Template:</label>
                                <select
                                    name=""
                                    id="syllabus"
                                    className='h-10 w-full border-gray-300 border border-input rounded-md p-2 focus:outline-none focus:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200'
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
                                onImageSelect={setImageFile}
                                {...register("image", {
                                    required: "Please select an image",
                                })}
                            />
                            {imageFile && (
                                <img
                                    src={URL.createObjectURL(imageFile)}
                                    alt="Preview"
                                    className='mt-2 max-h-40 object-contain border rounded'
                                />
                            )}
                            {errors.image && <p className='text-red-500 text-sm mt-1'>{errors.image.message}</p>}
                        </div>
                        <div className='flex justify-end gap-2'>
                            <Link
                                to='/course'
                                className='h-10 flex justify-center items-center gap-1 bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors'
                            >
                                Back to List
                            </Link>
                            <button
                                type='submit'
                                className='h-10 flex justify-center items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors'
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCourse
