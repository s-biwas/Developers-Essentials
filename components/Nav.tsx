"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";
import { GithubIcon, XIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Nav() {
  return (
    <div className="flex justify-between p-3 flex-col md:flex-row">
      <NavigationMenu className="border rounded-lg mb-4 md:mb-0 overflow-x-auto no-scrollbar flex">
        <NavigationMenuList className="flex">
          <NavigationMenuItem>
            <Link href="/html" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                HTML
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/css" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                CSS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/javascript" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                JAVASCRIPT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/react" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                REACT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/nodejs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                NODEJS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/mongodb" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                MONGODB
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/nextjs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                NEXT.JS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/dsa" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                JAVASCRIPT/DSA
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/libraries" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                OTHERS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-4 items-center justify-center border p-2 rounded-lg">
        <Link href="https://github.com/s-biwas" target="_blank">
          <GithubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/biwas-bhandari-261a15255/"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
        <Link href="https://x.com/biwas2059" target="_blank">
          <XIcon />
        </Link>
        <Link href="https://www.instagram.com/_acesh___/?hl=en" target="_blank">
          <InstagramIcon />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
