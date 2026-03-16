import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import apps from "../../data/apps";
import { formatNumber } from "../../utils/format";

const LS_KEY = "hero_installed_apps";

export default function Installation() {
    const [installedApps, setInstalledApps] = useState([]);
    const [sort, setSort] = useState("");

    useEffect(() => {
        loadApps();
    }, []);

    const loadApps = () => {
        const ids = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
        setInstalledApps(apps.filter((a) => ids.includes(a.id)));
    };

    const handleUninstall = (id) => {
        const ids = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
        const updated = ids.filter((i) => i !== id);
        localStorage.setItem(LS_KEY, JSON.stringify(updated));
        setInstalledApps((prev) => prev.filter((a) => a.id !== id));
        toast("App uninstalled!", { icon: "🗑️" });
    };

    const sorted = [...installedApps].sort((a, b) => {
        if (sort === "high-low") return b.size - a.size;
        if (sort === "low-high") return a.size - b.size;
        return 0;
    });

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-2">
                    Your Installed Apps
                </h1>
                <p className="text-gray-500 text-center mb-10">
                    Explore All Trending Apps on the Market developed by us
                </p>

                {/* Count + Sort */}
                <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold text-gray-800">{sorted.length} Apps Found</p>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-purple-500"
                    >
                        <option value="">Sort By Size</option>
                        <option value="high-low">High - Low</option>
                        <option value="low-high">Low - High</option>
                    </select>
                </div>

                {/* List */}
                {sorted.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <p className="text-5xl mb-4">📦</p>
                        <p className="text-lg font-medium">No installed apps yet</p>
                        <Link
                            to="/apps"
                            className="text-purple-600 hover:underline text-sm mt-2 inline-block"
                        >
                            Browse Apps →
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {sorted.map((app) => (
                            <div
                                key={app.id}
                                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4"
                            >
                                <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 truncate">
                                        {app.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm mt-1">
                                        <span className="text-green-500 flex items-center gap-1">
                                            <img src="/icon-downloads.png" alt="" className="w-3 h-3" />
                                            {formatNumber(app.downloads)}
                                        </span>
                                        <span className="text-orange-400 flex items-center gap-1">
                                            <img src="/icon-ratings.png" alt="" className="w-3 h-3" />
                                            {app.ratingAvg}
                                        </span>
                                        <span className="text-gray-400">{app.size} MB</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="flex-shrink-0 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}