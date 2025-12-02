import Link from 'next/link';
import { X } from 'lucide-react';
import { mainMenu } from './navData';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
            <div className="bg-white w-80 h-full overflow-y-auto">
                <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Menu</h3>
                    <button onClick={onClose}>
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        {mainMenu.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="block py-2 hover:text-orange-500"
                                    onClick={onClose}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
