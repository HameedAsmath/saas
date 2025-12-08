"use client";

import { useState } from "react";
import { X, Play } from "lucide-react";

interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  type?: "image" | "video";
  span?: "normal" | "tall" | "wide";
}

interface GalleryGridProps {
  images: GalleryItem[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const isVideo = (url: string) => {
    return url.match(/\.(mp4|webm|ogg)$/i) !== null;
  };

  return (
    <>
      {/* Uniform Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {images.map((item) => {
          const itemType = item.type || (isVideo(item.url) ? "video" : "image");
          const isVideoItem = itemType === "video";

          return (
            <div
              key={item.id}
              className="cursor-pointer group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3]"
              onClick={() => setSelectedItem(item)}
            >
              {isVideoItem ? (
                <video
                  src={item.url}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {isVideoItem ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="w-8 h-8 text-black ml-1" fill="black" />
                    </div>
                    <span className="text-white font-semibold">Play Video</span>
                  </div>
                ) : (
                  <span className="text-white font-semibold">View</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up overflow-y-auto"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-2 -right-2 bg-black/70 hover:bg-black/90 rounded-full p-2 text-white hover:text-primary transition-colors z-10"
            >
              <X size={24} />
            </button>
            {selectedItem.type === "video" || isVideo(selectedItem.url) ? (
              <video
                src={selectedItem.url}
                controls
                autoPlay
                className="w-full h-auto max-h-[90vh] rounded-lg object-contain"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedItem.url || "/placeholder.svg"}
                alt={selectedItem.alt}
                className="w-full h-auto max-h-[90vh] rounded-lg object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
