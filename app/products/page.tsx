"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"

export default function Products() {
  const allProducts = [
    {
      title: "Byadgi Whole",
      description: "Premium whole Byadgi chillies with stems. Deep red color, mild pungency, high aroma.",
      image: "/whole-red-chilli-byadgi-premium.jpg",
      heat: 4,
      color: "Deep Red",
      uses: ["Export", "Masala", "Grinding"],
    },
    {
      title: "Byadgi Stemless",
      description: "Whole Byadgi chillies without stems, processed for convenience.",
      image: "/stemless-red-chilli.jpg",
      heat: 4,
      color: "Deep Red",
      uses: ["Processing", "Export", "Food Ind."],
    },
    {
      title: "Byadgi Crushed",
      description: "Crushed Byadgi chilli in custom mesh sizes for various applications.",
      image: "/crushed-dried-chilli.jpg",
      heat: 4,
      color: "Deep Red",
      uses: ["Seasoning", "Blends", "Custom"],
    },
    {
      title: "Byadgi Powder",
      description: "Fine Byadgi chilli powder, ideal for culinary and industrial applications.",
      image: "/chilli-powder-red-spice.jpg",
      heat: 4,
      color: "Deep Red",
      uses: ["Cooking", "Food Ind.", "Export"],
    },
    {
      title: "Teja 171 Whole",
      description: "High pungency Teja 171 chillies, bright red, export-grade quality.",
      image: "/teja-171-whole-chilli-spice.jpg",
      heat: 9,
      color: "Bright Red",
      uses: ["Export", "Industrial", "Blends"],
    },
    {
      title: "Teja 171 Crushed",
      description: "Crushed Teja 171 in custom mesh sizes for industrial applications.",
      image: "/crushed-teja-chilli-industrial.jpg",
      heat: 9,
      color: "Bright Red",
      uses: ["Industrial", "Blends", "Export"],
    },
    {
      title: "Teja 171 Powder",
      description: "Fine Teja 171 powder with high SHU value for maximum heat.",
      image: "/red-chilli-powder-high-heat.jpg",
      heat: 9,
      color: "Bright Red",
      uses: ["Blending", "Industrial", "Export"],
    },
    {
      title: "Mixed Chilli Blend",
      description: "Custom blend of Byadgi and Teja chillies tailored to your specifications.",
      image: "/mixed-red-chilli-blend.jpg",
      heat: 6,
      color: "Mixed",
      uses: ["Custom", "Blending", "Export"],
    },
  ]

  const [filterHeat, setFilterHeat] = useState<string>("all")

  const filteredProducts = allProducts.filter((product) => {
    if (filterHeat === "all") return true
    if (filterHeat === "mild") return product.heat <= 5
    if (filterHeat === "medium") return product.heat > 5 && product.heat <= 7
    if (filterHeat === "hot") return product.heat > 7
    return true
  })

  return (
    <>
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-b from-accent/30 to-background pt-20 pb-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 text-balance">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium quality chillies in various forms to meet your specific requirements
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-secondary mb-4">Filter by Pungency:</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { value: "all", label: "All Products" },
                { value: "mild", label: "Mild (1-5)" },
                { value: "medium", label: "Medium (5-7)" },
                { value: "hot", label: "Hot (7-10)" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilterHeat(option.value)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    filterHeat === option.value
                      ? "bg-primary text-white"
                      : "bg-card text-foreground border border-border hover:border-primary"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <div key={idx}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="section-padding bg-accent/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-balance">
            Need Custom Specifications?
          </h2>
          <p className="text-lg text-foreground mb-6">
            We offer custom mesh sizes, specific SHU values, and tailored blends to meet your exact requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
          >
            Request a Custom Quote
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
