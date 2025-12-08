"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

type GalleryItem = {
  id: string;
  url: string;
  alt: string;
  type: "image" | "video";
};

export default function Gallery() {
  const galleryImages: GalleryItem[] = [
    { id: "1", url: "/gallery9.jpeg", alt: "Chilli harvest", type: "image" },
    {
      id: "2",
      url: "/gallery1.jpeg",
      alt: "Processing facility",
      type: "image",
    },
    { id: "3", url: "/gallery2.jpeg", alt: "Dried chillies", type: "image" },
    { id: "4", url: "/gallery3.jpeg", alt: "Quality grading", type: "image" },
    { id: "5", url: "/gallery4.jpeg", alt: "Export packaging", type: "image" },
    {
      id: "6",
      url: "/video1.mp4",
      alt: "Spice processing video",
      type: "video",
    },
    { id: "7", url: "/gallery5.jpeg", alt: "Raichur fields", type: "image" },
    { id: "8", url: "/gallery6.jpeg", alt: "Storage facility", type: "image" },
    { id: "9", url: "/gallery7.jpeg", alt: "Market display", type: "image" },
    {
      id: "10",
      url: "/gallery8.jpeg",
      alt: "Premium selection",
      type: "image",
    },
    {
      id: "11",
      url: "/video2.mp4",
      alt: "Farm operations video",
      type: "video",
    },
    {
      id: "12",
      url: "/gallery10.jpeg",
      alt: "Traditional processing",
      type: "image",
    },
  ];

  return (
    <>
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-b from-accent/30 to-background pt-20 pb-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 text-balance">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See our operations, facilities, and premium quality spices in action
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <Footer />
    </>
  );
}
