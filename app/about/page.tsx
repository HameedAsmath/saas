"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpiceBullet from "@/components/SpiceBullet";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

export default function About() {
  const strengths = [
    "Strong traceable farmer network in Raichur belt",
    "Strict quality & hygiene standards throughout production",
    "Transparent and ethical supply chain practices",
    "Fast global delivery with logistics expertise",
    "Customer-focused approach to every inquiry",
    "Export-ready drying, cleaning, grading, and packaging",
  ];

  const coreValues = [
    {
      icon: <CheckCircle className="text-primary" size={32} />,
      title: "Integrity",
      description: "Transparent dealings with farmers, partners, and customers",
    },
    {
      icon: <Award className="text-primary" size={32} />,
      title: "Excellence",
      description: "Uncompromising quality in every batch we process",
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Community",
      description: "Empowering farmers and supporting sustainable practices",
    },
    {
      icon: <Globe className="text-primary" size={32} />,
      title: "Global Vision",
      description: "Connecting the best of Indian spices to the world",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-accent/30 to-background pt-20 pb-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 text-balance">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on generations of farming heritage and a commitment to
            bringing the finest Indian spices to the world
          </p>
        </div>
      </div>

      {/* Origin Story */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="/traditional-indian-spice-farming-raichur.jpg"
                alt="Heritage farming"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 text-balance">
                Generations of Expertise
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Cargox was founded by families with generations of
                  chilli-farming heritage in the fertile fields of Raichur,
                  Karnataka—a region renowned for producing some of India's
                  finest chillies.
                </p>

                <p className="text-lg text-foreground leading-relaxed">
                  Now based in Pondicherry for better global logistics and
                  distribution, we blend traditional farming wisdom with modern
                  spice-processing technology to deliver premium quality to
                  international markets.
                </p>

                <p className="text-lg text-foreground leading-relaxed">
                  Every batch reflects our commitment to excellence,
                  transparency, and sustainable practices that honor the land
                  and support our farming communities.
                </p>
              </div>

              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">
                  "Where Tradition Meets Global Standards"
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="section-padding bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center text-balance">
            Our Strengths
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {strengths.map((strength, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <SpiceBullet text={strength} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center text-balance">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our Vision
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed text-balance">
            "To become the most trusted global supplier of Byadgi and Teja
            chillies while empowering farmers and delivering sustainable quality
            that meets international standards."
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-accent transition-all duration-300 font-semibold"
          >
            Explore Our Products
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
