"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import ModeToggle from "./ThemeToggle";
import Link from "next/link";

const routeList = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "https://web.payrentng.com",
    label: "Marketplace",
  },
  {
    href: "/roadmap",
    label: "Roadmap",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <Image
                src="/payrent-logo.png"
                alt="payrent logo"
                width={50}
                height={50}
              />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                />
                <span className="sr-only">Menu Icon</span>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/payrent-logo.png"
                      alt="PayRent logo"
                      width={50}
                      height={50}
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <Button
                    className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-500 dark:text-gray-900 dark:hover:bg-orange-600"
                    variant="outline"
                  >
                    <Link href="mailto:sales@payrentng.com">Contact Us</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex gap-2">
            <Button
              className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-500 dark:text-gray-900 dark:hover:bg-orange-600"
              variant="outline"
            >
              <Link href="mailto:sales@payrentng.com">Contact Us</Link>
            </Button>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
