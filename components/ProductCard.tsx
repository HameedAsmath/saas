"use client";

import Link from "next/link";
import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  heat: number;
  color: string;
  uses: string[];
}

export default function ProductCard({
  title,
  description,
  image,
  heat,
  color,
  uses,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold cursor-pointer">
            <Link href={`/products/`}>View Details</Link>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Heat & Color Meters */}
        <div className="space-y-3 mb-4">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-muted-foreground">Pungency</span>
              <span className="text-primary">{heat}/10</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${heat * 10}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-muted-foreground">Color Grade</span>
              <span className="text-primary">{color}</span>
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full ${
                    i < 4 ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Uses */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-secondary mb-2">
            Common Uses:
          </p>
          <div className="flex flex-wrap gap-2">
            {uses.map((use) => (
              <span
                key={use}
                className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/contact"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold text-center block"
        >
          Inquire Now
        </Link>
      </div>
    </div>
  );
}
