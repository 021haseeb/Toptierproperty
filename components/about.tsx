"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="About Top Tier Property Group"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-accent-gold p-6 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary-dark">10+</div>
                <div className="text-sm text-primary-dark/70">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-accent-gold font-medium text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-dark">
              About Top Tier Property Group
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
              At Top Tier Property Group, we believe that every property deserves
              exceptional care. As a leading property management and construction
              company, we bring together decades of expertise to deliver
              unparalleled service to property owners and investors.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              Our mission is simple: to elevate your property investments through
              professional management, quality construction, and dedicated
              partnership. We take pride in our attention to detail and commitment
              to excellence in every project we undertake.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                "Licensed & Insured",
                "24/7 Support Available",
                "Expert Team",
                "Competitive Pricing",
              ].map((point) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-gold" />
                  </div>
                  <span className="text-primary-dark font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
