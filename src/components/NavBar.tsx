'use client'

import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="border-b">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="font-bold text-xl">
                    Main
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/">Strona główna</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex gap-2">
                    <Button variant="ghost" asChild>
                        <Link href="/login">Logowanie</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/register">Rejestracja</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}