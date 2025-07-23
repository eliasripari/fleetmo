"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { megaMenu } from "@/menu.config";
import Logo from "@/public/logo-fleetmo.svg";
import { MobileNav } from "./mobile-nav";
import { useWaitlist } from "@/components/WaitlistProvider";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

const Nav = ({ className, children, id }: NavProps) => {
  const t = useTranslations("Menu");
  const { openWaitlistModal } = useWaitlist();

  return (
    <nav className={cn("sticky z-50 top-0 pt-4", className)} id={id}>
      <div
        id="nav-container"
        className="w-[calc(100%-2rem)] grid grid-cols-[1fr_auto_1fr] mx-auto py-4 px-4 sm:px-6 flex justify-between items-center bg-foreground rounded-xl"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-4 items-center relative"
          href="/"
        >
          <div className="relative">
            <Image
              src={Logo}
              alt="Logo"
              loading="eager"
              className="dark:invert"
              width={200}
              height={26.44}
            />
            <h2 className="text-[10px] text-white border-[1px] rounded-full px-1 py-0.2 absolute -top-2 -right-10">
              Beta
            </h2>
          </div>
        </Link>

        {children}

        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex text-white">
            <NavigationMenu className="relative z-10 flex max-w-max flex-1 items-center justify-center">
              <NavigationMenuList>
                {/* Home with submenu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white bg-transparent hover:bg-brand data-[state=open]:bg-brand hover:!text-white data-[state=open]:!text-white">
                    {t(megaMenu.home.label.toLowerCase())}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-[1fr_1fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md text-white relative"
                            href="/"
                            style={{
                              backgroundImage: `url(/bg-megamenu.jpg)`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 rounded"></div>
                            <div className="mb-2 mt-4 text-lg font-medium z-20">
                              {t("brand.name")}
                            </div>
                            <p className="text-sm leading-tight z-20">
                              {t("brand.description")}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {Object.values(megaMenu.home.submenu).map(
                        (item, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand hover:text-white focus:bg-brand focus:text-white group"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {t(item.label.toLowerCase())}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-white group-focus:text-white transition-colors">
                                  {t(
                                    `descriptions.${item.label.toLowerCase()}`
                                  )}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Other menu items */}
                {Object.entries(megaMenu)
                  .filter(([key]) => key !== "home")
                  .map(([key, item]) => {
                    if ("href" in item && typeof item.href === "string") {
                      return (
                        <NavigationMenuItem key={key}>
                          <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "text-white hover:text-white bg-transparent hover:bg-brand"
                              )}
                            >
                              {t(item.label.toLowerCase())}
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      );
                    }
                    return null;
                  })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <Button variant="green-accent" size="lg" onClick={openWaitlistModal}>
            {t("joinWaitlist")}
          </Button>
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export { Nav };
