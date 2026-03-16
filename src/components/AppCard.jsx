import { Link } from "react-router-dom";
import { formatNumber } from "../utils/format";

export default function AppCard({ app }) {
    return (
        <Link
            to={`/apps/${app.id}`}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow block"
        >
            <div className="aspect-square bg-gray-100">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm mb-2 leading-snug line-clamp-2">
                    {app.title}
                </h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                        <img src="/icon-downloads.png" alt="" className="w-4 h-4" />
                        <span>{formatNumber(app.downloads)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-orange-500 font-medium">
                        <img src="/icon-ratings.png" alt="" className="w-4 h-4" />
                        <span>{app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}