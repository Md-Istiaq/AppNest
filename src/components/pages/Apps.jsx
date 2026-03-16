import { useState, useEffect } from "react";
// AppCard is in components/, one level up from pages/
import AppCard from "../AppCard";
import Loader from "../Loader";
import apps from "../../data/apps";

export default function Apps() {
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState(apps);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const t = setTimeout(() => {
            const q = search.toLowerCase();
            setFiltered(apps.filter((a) => a.title.toLowerCase().includes(q)));
            setLoading(false);
        }, 350);
        return () => clearTimeout(t);
    }, [search]);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Title */}
            <div className="text-center py-12 px-4">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                    Our All Applications
                </h1>
                <p className="text-gray-500">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 pb-12">
                {/* Search + Count */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <p className="font-semibold text-gray-800">
                        ({filtered.length}) Apps Found
                    </p>
                    <div className="relative">
                        <svg
                            className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="search Apps"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border border-gray-300 rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-purple-500 w-64"
                        />
                    </div>
                </div>

                {/* Grid */}
                {loading ? (
                    <Loader />
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <p className="text-5xl mb-4">🔍</p>
                        <p className="text-xl font-medium">No App Found</p>
                        <p className="text-sm mt-1">Try searching with a different keyword</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {filtered.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}