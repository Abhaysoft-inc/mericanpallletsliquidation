import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { shopCategories } from './navData';

interface CategoriesSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CategoriesSidebar({ isOpen, onClose }: CategoriesSidebarProps) {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 z-[9998]"
                onClick={onClose}
            />
            <div className="fixed top-0 left-0 bg-white w-80 h-screen overflow-y-auto shadow-2xl z-[9999]">
                <div className="bg-black text-white px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Menu className="w-5 h-5" />
                        <h3 className="font-semibold text-sm uppercase">Shop by Categories</h3>
                    </div>
                    <button onClick={onClose} className="hover:text-gray-300">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <nav>
                    {shopCategories.map((cat) => (
                        <Link
                            key={cat.href}
                            href={cat.href}
                            className="block px-4 py-3.5 text-sm border-b border-gray-200 hover:bg-gray-50 transition-colors"
                            onClick={onClose}
                        >
                            {cat.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
