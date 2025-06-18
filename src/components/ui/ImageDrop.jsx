import { forwardRef, useRef } from "react";

export const ImageDrop = forwardRef(({ onImageSelect }, ref) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && onImageSelect) {
            onImageSelect(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const file = e.dataTransfer.files[0];
        if (file && onImageSelect) {
            onImageSelect(file);
        }
    };

    return (
        <div className="space-y-2">
            <div
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="w-full h-40 border border-blue-400 rounded-md flex items-center justify-center bg-gray-50 text-gray-700 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
            >
                Drag & drop an image here or click to select
                <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>
        </div>
    )
});

export default ImageDrop;