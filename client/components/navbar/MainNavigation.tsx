import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { mainMenu, shopCategories } from './navData';

interface MainNavigationProps {
    showShopSubmenu: boolean;
    setShowShopSubmenu: (value: boolean) => void;
    onCategoriesClick: () => void;
}

export default function MainNavigation({
    showShopSubmenu,
    setShowShopSubmenu,
    onCategoriesClick,
}: MainNavigationProps) {
    return (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex items-center">
                    {/* Shop by Categories Button */}
                    <div className="relative">
                        <button
                            onClick={onCategoriesClick}
                            className="flex items-center gap-2 px-6 py-4 bg-white border-r border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <Menu className="w-5 h-5" />
                            <span className="font-semibold text-sm">SHOP BY CATEGORIES</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Main Navigation */}
                    <nav className="flex-1">
                        <ul className="flex items-center">
                            {mainMenu.map((item) => (
                                <li
                                    key={item.href}
                                    className="relative group"
                                    onMouseEnter={() => item.hasSubmenu && setShowShopSubmenu(true)}
                                    onMouseLeave={() => item.hasSubmenu && setShowShopSubmenu(false)}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 px-5 py-4 text-sm font-medium hover:text-orange-500 transition-colors"
                                    >
                                        {item.name}
                                        {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                                    </Link>

                                    {/* Shop Submenu */}
                                    {item.hasSubmenu && showShopSubmenu && (
                                        <div
                                            onMouseEnter={() => setShowShopSubmenu(true)}
                                            onMouseLeave={() => setShowShopSubmenu(false)}
                                            className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg w-64 z-50 max-h-96 overflow-y-auto"
                                        >
                                            {shopCategories.map((cat) => (
                                                <Link
                                                    key={cat.href}
                                                    href={cat.href}
                                                    className="block px-4 py-2.5 text-sm hover:bg-orange-50 hover:text-orange-500 border-b border-gray-100 transition-colors"
                                                >
                                                    {cat.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
