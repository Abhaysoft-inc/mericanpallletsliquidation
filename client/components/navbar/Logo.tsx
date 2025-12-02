import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center shrink-0">
            <Image
                src="/liquidation-300x75.webp"
                alt="American Pallet Liquidation"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
            />
        </Link>
    );
}
