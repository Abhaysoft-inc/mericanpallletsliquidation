import Link from 'next/link';
import { User, ShoppingCart } from 'lucide-react';

interface NavIconsProps {
    wishlistCount: number;
    cartCount: number;
}

export default function NavIcons({ wishlistCount, cartCount }: NavIconsProps) {
    return (
        <div className="flex items-center gap-6 shrink-0">
            {/* Account */}
            <Link href="/my-account" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Account</span>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative hover:text-orange-500 transition-colors">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                </div>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative hover:text-orange-500 transition-colors">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <ShoppingCart className="w-6 h-6" />
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                            {cartCount}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
