"use client";
import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Cargox Logo"
                  width={120}
                  height={40}
                  className="h-20 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Where Tradition Meets Global Standards
            </p>
            <div className="flex gap-4">
              {/* <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/cargox_india?igsh=MWk4Y21uMDZ0YXlxag=="
                className="hover:text-primary transition-colors"
                target="_blank"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/cargox-india-008597399"
                className="hover:text-primary transition-colors"
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Byadgi Chilli
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Teja 171 Chilli
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Request Sample
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <div>
                  <div>+91 6383526853</div>
                  <div>+91 8056604413</div>
                  <div>+91 9952479943</div>
                </div>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>cargoxcustomerservice@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>&copy; 2025 Cargox Imports & Exports | All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
