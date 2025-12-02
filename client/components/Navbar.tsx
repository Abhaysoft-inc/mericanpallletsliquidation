'use client';

import { useState } from 'react';
import TopBar from './navbar/TopBar';
import Logo from './navbar/Logo';
import SearchBar from './navbar/SearchBar';
import NavIcons from './navbar/NavIcons';
import MainNavigation from './navbar/MainNavigation';
import CategoriesSidebar from './navbar/CategoriesSidebar';
import MobileMenu from './navbar/MobileMenu';

export default function Navbar() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showShopSubmenu, setShowShopSubmenu] = useState(false);
    const [showCategoriesSidebar, setShowCategoriesSidebar] = useState(false);
    const [cartCount] = useState(2);
    const [wishlistCount] = useState(0);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery, 'in category:', selectedCategory);
    };

    return (
        <>
            <header className="w-full bg-white shadow-sm">
                <TopBar />

                {/* Main Header */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-[1400px] mx-auto px-[50px] h-[104px] flex items-center">
                        <div className="flex items-center justify-between gap-6 w-full">
                            <Logo />
                            <SearchBar
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                onSubmit={handleSearch}
                            />
                            <NavIcons wishlistCount={wishlistCount} cartCount={cartCount} />
                        </div>
                    </div>
                </div>

                <MainNavigation
                    showShopSubmenu={showShopSubmenu}
                    setShowShopSubmenu={setShowShopSubmenu}
                    onCategoriesClick={() => setShowCategoriesSidebar(true)}
                />
            </header>

            <CategoriesSidebar
                isOpen={showCategoriesSidebar}
                onClose={() => setShowCategoriesSidebar(false)}
            />

            <MobileMenu
                isOpen={showMobileMenu}
                onClose={() => setShowMobileMenu(false)}
            />
        </>
    );
}
