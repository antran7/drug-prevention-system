import React from 'react';

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to perform this action?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  danger = false
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
       {/* Background overlay nhẹ */}
      <div 
        className="fixed inset-0 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-[0.5px]"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Modal content */}
        <div className="p-6">
          <div className="flex items-start">
            {/* Icon */}
            <div className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${danger ? 'bg-red-100' : 'bg-blue-100'} mr-4`}>
              <svg 
                className={`h-6 w-6 ${danger ? 'text-red-600' : 'text-blue-600'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            {/* Text content */}
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">
                {title}
              </h3>
              <div className="mt-2">
                <p className="text-gray-600">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="bg-gray-50 px-6 py-4 flex flex-row-reverse rounded-b-lg">
          <button
            type="button"
            className={`px-4 py-2 rounded-md text-sm font-medium text-white ${danger ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} ml-3`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300"
            onClick={onClose}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;