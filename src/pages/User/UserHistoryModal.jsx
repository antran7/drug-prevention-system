import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTimes,
  FaSun,
} from "react-icons/fa";
import ModalPortal from "../../components/common/ModalPortal";

const UserHistoryModal = ({ show, onClose, history }) => {
  if (!show) return null;

  return (
      <ModalPortal>
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white/80 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-xl p-6 relative border border-white/30">
        {/* Close button top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition"
          title="Close"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-center mb-4">User History</h2>

        {/* Content */}
        <div className="space-y-3 text-sm text-gray-800 overflow-y-auto max-h-[70vh]">
          {/* Created */}
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            <span className="font-semibold">Date Created:</span>
            <span>{history.createdDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-yellow-500" />
            <span className="font-semibold">Time Created:</span>
            <span className="bg-yellow-100 text-yellow-800 font-mono px-2 py-0.5 rounded">
              {history.createdTime}
            </span>
            <FaSun className="text-yellow-400" />
          </div>

          <div className="flex items-center gap-2">
            <FaUser className="text-gray-600" />
            <span className="font-semibold">Created By:</span>
            <span>{history.createdBy}</span>
          </div>

          <hr className="my-2" />

          {/* Updated */}
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            <span className="font-semibold">Date Updated:</span>
            <span>{history.updatedDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-yellow-500" />
            <span className="font-semibold">Time Updated:</span>
            <span className="bg-yellow-100 text-yellow-800 font-mono px-2 py-0.5 rounded">
              {history.updatedTime}
            </span>
            <FaSun className="text-yellow-400" />
          </div>

          <div className="flex items-center gap-2">
            <FaUser className="text-gray-600" />
            <span className="font-semibold">Updated By:</span>
            <span>{history.updatedBy}</span>
          </div>
        </div>

        {/* Footer close button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition"
            title="Close"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
    </ModalPortal>
  );
};

export default UserHistoryModal;
