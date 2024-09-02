"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Header (){
    const pathname = usePathname();

    const navItems = [
        {label:'Home',href:'/'},
        {label:'Best Selling',href:'/best-selling'},
        {label:'Offers',href:'/offers'},
        {label:'Orders',href:'/account.orders'},
    ];
    return(
        <header>
            <div className="flex h-10 items-center justify-center bg-slate-900 text-center text-white">
                <span className="text-sm ">
                    Order 2 Delight Dairy Choco bars today and save $100 instantly!
                </span>

            </div>
            <nav className="flex h-14 items-center justify-center
            ">
                <ul className="flex items-center justify-center gap-6">
                    {navItems.map((item)=>(
                        <li key={item.href}
                        className={cn('text-brown-300 underline-offset-4 transition-all hover:cursor-pointer hover:text-brown-900 hover:underline',
                                pathname === item.href && 'font-semibold text-brown-900 underline')}
                        
                        >
                            <Link href={item.href}>{item.label}</Link>

                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}