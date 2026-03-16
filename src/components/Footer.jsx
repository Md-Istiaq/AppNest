import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white mt-auto">
            <div className="max-w-6xl mx-auto px-4 pt-8 pb-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-gray-700">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="HERO.IO" className="h-8 w-8 object-contain brightness-200" />
                        <span className="font-bold text-lg">AppNest</span>
                    </Link>

                    {/* Social Links */}
                    <div className="text-right">
                        <p className="font-medium mb-3">Social Links</p>
                        <div className="flex items-center gap-3">
                            {/* X */}
                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition">
                                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 5.87zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition">
                                <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition">
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-sm pt-4">
                    Copyright © 2026 - All right reserved
                </p>
            </div>
        </footer>
    );
}