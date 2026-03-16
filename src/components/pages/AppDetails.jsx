import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import toast from "react-hot-toast";
import apps from "../../data/apps";
import { formatNumber } from "../../utils/format";

const LS_KEY = "hero_installed_apps";

export default function AppDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const app = apps.find((a) => a.id === parseInt(id));
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const ids = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
        if (app) setInstalled(ids.includes(app.id));
    }, [app]);

    // App not found in data
    if (!app) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-gray-50">
                <img
                    src="/app-error.png"
                    alt="App Not Found"
                    className="w-64 mb-6 object-contain"
                />
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2 uppercase tracking-wide">
                    OPPS!! APP NOT FOUND
                </h2>
                <p className="text-gray-500 mb-6 max-w-md">
                    The App you are requesting is not found on our system. please try
                    another apps
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
                >
                    Go Back!
                </button>
            </div>
        );
    }

    const handleInstall = () => {
        const ids = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
        if (!ids.includes(app.id)) {
            ids.push(app.id);
            localStorage.setItem(LS_KEY, JSON.stringify(ids));
            setInstalled(true);
            toast.success(`${app.title} installed successfully!`);
        }
    };

    // Chart data: 5 star first (top of chart)
    const chartData = [...app.ratings].reverse();

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-5xl mx-auto px-4 space-y-6">
                {/* ── App Info Card ── */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Icon */}
                        <div className="w-44 h-44 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-gray-900 mb-1">
                                {app.title}
                            </h1>
                            <p className="text-gray-400 text-sm mb-4">
                                Developed by{" "}
                                <span className="text-blue-500">{app.companyName}</span>
                            </p>
                            <hr className="mb-4" />

                            {/* Stats */}
                            <div className="flex flex-wrap gap-8 mb-6">
                                <div className="flex items-center gap-2">
                                    <img src="/icon-downloads.png" alt="" className="w-9 h-9" />
                                    <div>
                                        <p className="text-xs text-gray-400">Downloads</p>
                                        <p className="text-xl font-bold text-gray-900">
                                            {formatNumber(app.downloads)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/icon-ratings.png" alt="" className="w-9 h-9" />
                                    <div>
                                        <p className="text-xs text-gray-400">Average Ratings</p>
                                        <p className="text-xl font-bold text-gray-900">
                                            {app.ratingAvg}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/icon-review.png" alt="" className="w-9 h-9" />
                                    <div>
                                        <p className="text-xs text-gray-400">Total Reviews</p>
                                        <p className="text-xl font-bold text-gray-900">
                                            {formatNumber(app.reviews)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Install Button */}
                            <button
                                onClick={handleInstall}
                                disabled={installed}
                                className={`px-6 py-2 rounded-lg text-white font-medium transition-colors ${installed
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-green-500 hover:bg-green-600"
                                    }`}
                            >
                                {installed ? "Installed" : `Install Now (${app.size} MB)`}
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Ratings Chart ── */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h2 className="font-bold text-lg text-gray-900 mb-4">Ratings</h2>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart
                            layout="vertical"
                            data={chartData}
                            margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                            <XAxis
                                type="number"
                                domain={[0, 12000]}
                                tickCount={5}
                                tick={{ fontSize: 12 }}
                            />
                            <YAxis
                                type="category"
                                dataKey="name"
                                width={55}
                                tick={{ fontSize: 12 }}
                            />
                            <Tooltip />
                            <Bar dataKey="count" fill="#F97316" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* ── Description ── */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h2 className="font-bold text-lg text-gray-900 mb-4">Description</h2>
                    {app.description.split("\n\n").map((para, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}