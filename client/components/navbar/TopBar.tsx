import Link from 'next/link';

export default function TopBar() {
    return (
        <div className="bg-gray-100 border-b border-gray-200">
            <div className="max-w-[1400px] mx-auto px-4 py-2">
                <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-700 font-medium">
                        FREE SHIPPING ON ALL ORDERS
                    </div>
                    <div className="text-gray-700">
                        Contact us 24/7 <span className="font-semibold ml-2">+1(650)658-3660</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
