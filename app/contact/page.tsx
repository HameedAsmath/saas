"use client";

import type React from "react";
import { useActionState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const initialState = {
  success: false,
  message: "",
};

export default function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      const timer = setTimeout(() => {
        formRef.current?.reset();
        // Reset state by calling formAction with empty formData
        // This is a workaround since useActionState doesn't have a direct reset method
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.success]);

  return (
    <>
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-b from-accent/30 to-background pt-20 pb-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 text-balance">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Send us an inquiry or contact us for
            wholesale orders.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Phone</h3>
                    <div className="text-sm text-muted-foreground">
                      <div>+91 6383526853</div>
                      <div>+91 8056604413</div>
                      <div>+91 9952479943</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Email</h3>
                    <a
                      href="mailto:cargoxcustomerservice@gmail.com"
                      className="text-sm text-primary hover:text-primary/80"
                    >
                      cargoxcustomerservice@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">
                      Locations
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div>
                        <p>
                          18, Chinna SubramaniyaPillai Street, Pondichery - 605
                          001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  Send us a Message
                </h2>

                {state.success ? (
                  <div className="bg-accent/20 border-2 border-primary p-6 rounded-lg text-center">
                    <div className="text-primary font-semibold text-lg mb-2">
                      Thank You!
                    </div>
                    <p className="text-foreground">{state.message}</p>
                  </div>
                ) : (
                  <form ref={formRef} action={formAction} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                        <option value="sample">Request Sample</option>
                        <option value="custom">Custom Order</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    {state.message && !state.success && (
                      <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-lg">
                        {state.message}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isPending}
                      className="cursor-pointer w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={20} />
                      {isPending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Find Us
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1J-7wgVQH69h00T9eEhnEGTaaYgWuNsw&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
