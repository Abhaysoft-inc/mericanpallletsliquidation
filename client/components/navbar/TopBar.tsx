import Link from 'next/link';

export default function TopBar() {
    return (
        <div className="bg-white border-b border-gray-200 h-9">
            <div className="max-w-[1400px] mx-auto py-2">
                <div className="flex justify-between items-center text-[12px] px-[50px]">
                    <div className="text-gray-700 font-medium hover:text-yellow-500 cursor-pointer">
                        FREE SHIPPING ON ALL ORDERS
                    </div>
                    <div className="text-gray-700 font-semibold">
                        Contact us 24/7 <span className="font-bold ml-2">+1(650)658-3660</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
