import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-gray-50">
            <img
                src="/error-404.png"
                alt="404 Not Found"
                className="w-72 mb-6 object-contain"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Oops, page not found!
            </h2>
            <p className="text-gray-500 mb-6">
                The page you are looking for is not available.
            </p>
            <button
                onClick={() => navigate(-1)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
                Go Back!
            </button>
        </div>
    );
}