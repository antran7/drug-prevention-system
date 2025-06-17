import { FaComments } from 'react-icons/fa';

export default function ChatBubble() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
                <FaComments className="text-2xl" />
            </button>
        </div>
    );
}