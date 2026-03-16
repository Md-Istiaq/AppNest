import { Link } from "react-router-dom";
import AppCard from "../AppCard";
import apps from "../../data/apps";

export default function Home() {
    const trendingApps = apps.slice(0, 8);

    return (
        <div>
            {/* ── Hero Section ── */}
            <section className="bg-gray-50 py-12 text-center">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        We Build{" "}
                        <span className="text-purple-600">Productive</span> Apps
                    </h1>

                    <p className="text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
                        At AppNest , we craft innovative apps designed to make everyday life
                        simpler, smarter, and more exciting. Our goal is to turn your ideas
                        into digital experiences that truly make an impact.
                    </p>

                    {/* Store Buttons */}
                    <div className="flex justify-center gap-3 mb-10">
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-gray-300 bg-white rounded-lg px-4 py-2 hover:bg-gray-50 transition shadow-sm"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz60iSoG-QGXAaoudlr7OxaZgf54Bs9MqEpg&s"
                                alt="Google Play"
                                className="w-5 h-5"
                            />
                            <span className="text-sm font-medium text-gray-700">Google Play</span>
                        </a>

                        <a
                            href="https://apps.apple.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-gray-300 bg-white rounded-lg px-4 py-2 hover:bg-gray-50 transition shadow-sm"
                        >
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">
                                App Store
                            </span>
                        </a>
                    </div>

                    {/* Hero Image */}
                    <div className="flex justify-center">
                        <img
                            src="/hero.png"
                            alt="HERO.IO App Showcase"
                            className="max-w-xs md:max-w-sm lg:max-w-md w-full object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* ── Stats Section ── */}
            <section className="bg-purple-600 py-12 text-white text-center">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-sm text-purple-200 mb-1">Total Downloads</p>
                            <p className="text-4xl font-extrabold">29.6M</p>
                            <p className="text-sm text-purple-300 mt-1">
                                21% More Than Last Month
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-purple-200 mb-1">Total Reviews</p>
                            <p className="text-4xl font-extrabold">906K</p>
                            <p className="text-sm text-purple-300 mt-1">
                                46% More Than Last Month
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-purple-200 mb-1">Active Apps</p>
                            <p className="text-4xl font-extrabold">132+</p>
                            <p className="text-sm text-purple-300 mt-1">
                                31 More Will Launch
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Trending Apps ── */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                        Trending Apps
                    </h2>

                    <p className="text-gray-500 text-center mb-8">
                        Explore All Trending Apps on the Market developed by us
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                        {trendingApps.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/apps"
                            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
                        >
                            Show All
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}