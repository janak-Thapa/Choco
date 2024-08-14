import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {  Blocks,  HomeIcon, Layers,  Menu,  ShoppingCart, Users, Warehouse } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MobileSidebar = () => {
    const navItems = [
        { label: 'Dashboard', href: '/admin', icon: HomeIcon },
        { label: 'Products', href: '/admin/products', icon: Layers },
        { label: 'Warehouses', href: '/admin/warehouses', icon: Warehouse },
        { label: 'Deliver Persons', href: '/admin/delivery-persons', icon: Users },
        { label: 'Orders', href: '/admin/orders', icon: ShoppingCart },
        { label: 'Inventories', href: '/admin/inventories', icon: Blocks },
    ];
  return (
    <div>
         <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">

              {navItems.map((item)=>{
                return(
                    <Link key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <item.icon className="h-4 w-4"/>
                   {item.label}
                  </Link>

                )
            })}

                
              </nav>
              <div className="mt-auto">
               
              </div>
            </SheetContent>
          </Sheet>
    </div>
  )
}

export default MobileSidebar