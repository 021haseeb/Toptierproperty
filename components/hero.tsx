"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, FileText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import QuoteForm from "./quote-form";

export default function Hero() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
          alt="Luxury Property"
          fill
          className="object-cover animate-zoom-slow"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Pre-headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-accent-gold font-medium text-lg tracking-wider uppercase"
            >
              Premier Property Solutions
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight"
            >
              Premium Property Management &{" "}
              <span className="text-accent-gold">Construction Services</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
            >
              Elevating Your Properties with Expert Care and Meticulous Attention
              to Detail. Your Trusted Partner in Real Estate Excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col items-center justify-center gap-4 pt-4"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#contact"
                  className="group flex items-center gap-2 bg-accent-gold text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#projects"
                  className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-accent-gold hover:bg-accent-gold/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" />
                  View Projects
                </motion.a>
              </div>
              {/* Get A Quote Button */}
              <motion.button
                onClick={() => setIsQuoteOpen(true)}
                className="flex items-center gap-2 bg-transparent border-2 border-accent-gold text-accent-gold px-8 py-3 rounded-lg font-semibold text-lg hover:bg-accent-gold hover:text-primary-dark transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="w-5 h-5" />
                Get A Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

{/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>

      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
}
