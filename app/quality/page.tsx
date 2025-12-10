"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpiceBullet from "@/components/SpiceBullet";
import { CheckCircle, Droplets, Zap, TrendingUp } from "lucide-react";

export default function Quality() {
  const qualitySteps = [
    {
      icon: <Droplets className="text-primary" size={32} />,
      title: "Drying",
      description:
        "Climate-controlled drying process to maintain color, aroma, and nutritional value",
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "Cleaning",
      description:
        "Advanced cleaning technology to remove impurities while preserving quality",
    },
    {
      icon: <CheckCircle className="text-primary" size={32} />,
      title: "Grading",
      description:
        "Strict grading standards based on color, size, and pungency levels",
    },
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      title: "Processing",
      description:
        "Crushing and powdering in custom mesh sizes as per customer requirements",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "Spice Board of India Certification",
    "Export Quality Certification",
    "Food Safety Standards",
    "Ethical Trade Practices",
    "Traceability Compliance",
  ];

  return (
    <>
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-b from-accent/30 to-background pt-20 pb-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 text-balance">
            Quality & Process
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent processes and rigorous quality control from farm to
            export
          </p>
        </div>
      </div>

      {/* Quality Process */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center text-balance">
            Our Processing Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {qualitySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="bg-accent/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Complete Quality Journey
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">
                    Farm Selection
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Verification of farming practices and farmer credentials
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">
                    Harvest & Transport
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Controlled harvest and immediate transport to facilities
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Drying, cleaning, grading with state-of-the-art equipment
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">
                    Testing & Certification
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Lab testing for quality, moisture, and safety standards
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">
                    Packaging & Export
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Food-grade packaging and shipment with documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center text-balance">
            Certifications & Compliance
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
            {/* Certificate Image */}

            <div className="animate-fade-in-up">
              <img
                src="/certificate.jpg"
                alt="Certification"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            {/* Certifications List */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <SpiceBullet
                    text={cert}
                    icon={<CheckCircle className="text-primary" size={20} />}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 text-balance">
                Sustainable Practices
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-foreground leading-relaxed">
                  We are committed to sustainable farming and production
                  practices that benefit both our farmers and the environment.
                </p>

                <div className="space-y-3">
                  <SpiceBullet text="Fair trade practices ensuring equitable farmer payments" />
                  <SpiceBullet text="Water-efficient processing technologies" />
                  <SpiceBullet text="Biodegradable and recyclable packaging solutions" />
                  <SpiceBullet text="Soil health improvement initiatives with farmer networks" />
                  <SpiceBullet text="Carbon footprint reduction through local distribution" />
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Our Initiatives
              </Link>
            </div>

            <div className="order-1 lg:order-2 animate-slide-in-right">
              <img
                src="/sustainable.png"
                alt="Sustainable practices"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
