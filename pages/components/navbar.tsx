import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"


import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-300 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">EXCLUSIVE</h1>
        <div className="hidden md:flex gap-4 ">
          <Link href={"#"} className="text-sm font-semibold">
            Home
          </Link>
          <Link href={"#"} className="text-sm font-semibold">
            Contact
          </Link>
          <Link href={"#"} className="text-sm font-semibold">
            About
          </Link>
          <Link href={"#"} className="text-sm font-semibold">
            Sign Up
          </Link>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="relative">
            <Input
              placeholder="Search Products"
              className="bg-[#F5F5F5] rounded"
            />
            <Search className="absolute right-2 top-2 text-black" />
          </div>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <Heart />
          </Button>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <ShoppingCart />
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant={"outline"} size={"icon"}>
              <Menu className="size-4 text-gray-400" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader className="flex items-start">
              <SheetTitle>EXCLUSIVE</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              <Link href={"#"} className="text-sm font-semibold">
                Home
              </Link>
              <Link href={"#"} className="text-sm font-semibold">
                Contact
              </Link>
              <Link href={"#"} className="text-sm font-semibold">
                About
              </Link>
              <Link href={"#"} className="text-sm font-semibold">
                Sign Up
              </Link>
              <div className="mt-4">
                <div className="relative">
                  <Input
                    placeholder="Search Products"
                    className="bg-[#F5F5F5] rounded"
                  />
                  <Search className="absolute right-2 top-2 text-black" />
                </div>
                <div className="flex gap-4 mt-6">
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className="rounded-full"
                  >
                    <Heart />
                  </Button>
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className="rounded-full"
                  >
                    <ShoppingCart />
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
