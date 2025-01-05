"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={null} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Shop">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Wheat"
              description="Wheat is a group of wild and domesticated grasses of the genus Triticum."
            />
            <ProductItem
              title="Rice"
              description="Rice is a cereal grain and in its domesticated form is the staple food of over half of the world's population, particularly in Asia and Africa."
            />
            <ProductItem
              title="Bean"
              description="A bean is the seed of any plant in the legume family (Fabaceae) used as a vegetable for human consumption or animal feed."
            />
            <ProductItem
              title="Carrot"
              description="The carrot (Daucus carota subsp. sativus) is a root vegetable, typically orange in colour, though heirloom variants including purple, black, red, white. "
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/bigimage">Big Image</HoveredLink>
            <HoveredLink href="/rightsidebar">Right Sidebar</HoveredLink>
            <HoveredLink href="/leftsidebar">Left Sidebar</HoveredLink>
            <HoveredLink href="/singlepost">Single Post</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Pages">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/loc1">Shop Location One</HoveredLink>
            <HoveredLink href="/loc2">Shop Location Two</HoveredLink>
            <HoveredLink href="/faqs">FAQS</HoveredLink>
            <HoveredLink href="/checkout">Checkout</HoveredLink>
            <HoveredLink href="/cartpage">Cart Page</HoveredLink>
            <HoveredLink href="/wishlist">Wishlist</HoveredLink>
            <HoveredLink href="/signin">Sign In</HoveredLink>
            <HoveredLink href="/comingsoon">Coming Soon</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={null} item="About Us"></MenuItem>
        <MenuItem setActive={setActive} active={null} item="Contact Us"></MenuItem>
      </Menu>
    </div>
  );
}
