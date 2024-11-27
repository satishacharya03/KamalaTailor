"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-lg">
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <div className="container mx-auto h-full px-4">
          <div className="flex h-full max-w-xl flex-col justify-center space-y-6 text-white">
            <h1 className="text-5xl font-bold leading-tight">
              Discover Your Perfect Style
            </h1>
            <p className="text-lg">
              Explore our curated collection of premium fashion items designed to make you stand out.
            </p>
            <Button size="lg" className="w-fit">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}