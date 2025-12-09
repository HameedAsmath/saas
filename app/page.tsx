"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParallaxHero from "@/components/ParallaxHero";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Leaf, Shield, Globe } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    {
      title: "Byadgi Red Chilli",
      description:
        "Deep red color, mild pungency, high aroma. Perfect for color extraction and traditional masalas.",
      image: "/red-chilli-byadgi-spice.jpg",
      heat: 4,
      color: "Deep Red",
      uses: ["Color Extraction", "Masala", "Pickles"],
    },
    {
      title: "Teja 171 Red Chilli",
      description:
        "Very high pungency, bright red color. Ideal for industrial exports and high-quality spice formulations.",
      image: "/teja-171-red-chilli-spice.jpg",
      heat: 9,
      color: "Bright Red",
      uses: ["Spice Blends", "Industrial", "Exports"],
    },
    // {
    //   title: "Crushed Chilli Mix",
    //   description: "Custom blend of Byadgi and Teja chillies, perfectly sized for your applications.",
    //   image: "/crushed-red-chilli-powder.jpg",
    //   heat: 6,
    //   color: "Mixed Grade",
    //   uses: ["Seasoning", "Blends", "Custom Size"],
    // },
  ];

  return (
    <>
      <Header />

      {/* Hero Section with Parallax */}
      <ParallaxHero
        title="Premium Indian Spices"
        subtitle="Where Tradition Meets Global Standards"
        imageUrl="/spice-chilli-farm-fields-landscape.jpg"
        ctaText="Explore Products"
        ctaLink="/products"
      />

      {/* Featured Products */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 text-balance">
              Our Premium Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked from generations of farming heritage in Raichur,
              Karnataka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProducts.map((product, idx) => (
              <div key={idx}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="/indian-spice-farmer-harvest-field.jpg"
                alt="Our heritage in spices"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>

            <div className="animate-slide-in-right">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-semibold text-sm">
                  Our Heritage
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 text-balance">
                Founded with Passion
              </h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Established in 2025, Cargox brings together generations of
                chilli farming heritage from the fertile fields of Raichur,
                Karnataka. Now based in Pondicherry for optimal global
                logistics, we combine traditional farming wisdom with
                cutting-edge processing technology.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                We work directly with farmer networks, ensuring transparent
                supply chains and sustainable practices from farm to table.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read Our Full Story
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center text-balance">
            Why Choose Cargox?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Farmer-First Approach
              </h3>
              <p className="text-foreground">
                Strong network with traceable farmers in Raichur belt,
                supporting sustainable practices and fair trade.
              </p>
            </div>

            <div
              className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Quality Assured
              </h3>
              <p className="text-foreground">
                Strict quality & hygiene standards with export-ready drying,
                cleaning, grading, and custom processing.
              </p>
            </div>

            <div
              className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                Global Reach
              </h3>
              <p className="text-foreground">
                Fast global delivery with transparent supply chain and
                customer-focused service worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Experience Premium Spices?
          </h2>
          <p className="text-xl mb-8 text-white/90 text-balance">
            Get in touch with us for wholesale inquiries, samples, or custom
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-accent transition-all duration-300 font-semibold"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
