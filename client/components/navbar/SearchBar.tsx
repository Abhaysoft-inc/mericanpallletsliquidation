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
        <div className="flex-1 max-w-3xl">
            <form onSubmit={onSubmit} className="flex">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white border border-r-0 border-gray-300 rounded-l text-sm focus:outline-none focus:border-gray-400 min-w-40"
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
                    className="flex-1 px-4 py-3 border-t border-b border-gray-300 text-sm focus:outline-none focus:border-gray-400"
                />
                <button
                    type="submit"
                    className="px-6 bg-black text-white rounded-r hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                    <Search className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
}
