import { Search } from 'lucide-react';
import { categories } from './navData';

interface SearchBarProps {
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export default function SearchBar({
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    onSubmit,
}: SearchBarProps) {
    return (
        <div className="flex-1 max-w-3xl border rounded h-[52px] mx-20" >
            <form onSubmit={onSubmit} className="flex">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white  border-r-0 border-gray-300 rounded-l text-sm focus:outline-none focus:border-gray-400 min-w-40 font-semibold"
                >
                    {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                            {cat.name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products"
                    className="flex-1 px-4 py-3  border-gray-300 text-md focus:outline-none focus:border-gray-400"
                />
                <button
                    type="submit"
                    className="m-1 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors flex items-center justify-center h-auto"
                >
                    <Search className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
}
