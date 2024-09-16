'use client'

import Link from 'next/link'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import MobileMenu from './MobileMenu'
import { ModeToggle } from './ModeToggle'

export const navigationItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Services & Products',
    href: '/service'
  },
  {
    name: 'Projects',
    href: '/project'
  },
]


export default function Navbar() {
  const pathname = usePathname()
  return (
    <div className='w-full mx-auto px-4 md:px-8 py-5 grid grid-cols-12'>
      <div className='col-span-6 md:col-span-3'>
        <Link href='/'>
          <h1 className='text-xl font-semibold tracking-tight'><span className='bg-gradient-to-r from-blue-900 to-blue-700 text-white py-1 px-2 items-center text-xl font-semibold rounded-xl'>Inko Jaya</span>&nbsp;Konstruksi</h1>
        </Link>
      </div>
      <div className='hidden sm:flex justify-center items-center col-span-6'>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink 
                    active={pathname === item.href} 
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className='flex items-center justify-end md:col-span-3 col-span-6 gap-4'>
        <ModeToggle />
        <Button className='hidden sm:block'>Contact Us</Button>
        <div className='sm:hidden'>
          <MobileMenu />
        </div>
      </div>      
    </div>
  )
}
