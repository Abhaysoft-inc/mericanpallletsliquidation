import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center shrink-0">
            <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center mr-3">
                <div className="text-white text-2xl font-bold">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="8" width="24" height="3" fill="white" />
                        <rect x="6" y="12" width="20" height="2" fill="white" />
                        <rect x="6" y="15" width="20" height="2" fill="white" />
                        <rect x="6" y="18" width="20" height="2" fill="white" />
                        <rect x="4" y="21" width="24" height="3" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 leading-none">American</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">PALLET LIQUIDATION</span>
            </div>
        </Link>
    );
}
