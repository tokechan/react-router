import { Link } from "@lazarv/react-server/navigation";
import { PenTool } from "lucide-react";

export default function Header() {
    
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="px-8 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <Link to="/">
                        <div className="text-2xl font-bold text-gray-800">Tech Share</div>
                    </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <Link to="/editor">
                        <div className="bg-teal-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-teal-700 transition duration-300 ease-in-out">
                            <PenTool size={24} className="mr-2" />
                             Write Article
                        </div>
                    </Link>
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold hover:bg-gray-300 transition-colors duration-300">
                        U
                    </div>
                </div>
            </div>
        </header>
    );
}