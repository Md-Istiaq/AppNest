import { Link, NavLink } from "react-router-dom";

const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/apps", label: "Apps" },
    { to: "/installation", label: "Installation" },
];

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="HERO.IO logo"
                        className="h-8 w-8 object-contain"
                    />
                    <span className="font-bold text-gray-900 text-lg tracking-wide">
                        AppNest
                    </span>
                </Link>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ to, label, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-600 font-medium border-b-2 border-purple-600 pb-0.5"
                                    : "text-gray-600 hover:text-purple-600 transition-colors"
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Contribute */}
                <a
                    href="https://github.com/Md-Istiaq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Contribute
                </a>

            </div>
        </header>
    );
}