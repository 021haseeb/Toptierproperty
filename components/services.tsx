"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Paintbrush, 
  Sun, 
  Home, 
  Layers, 
  Wrench, 
  Hammer,
  ArrowRight 
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette: Paintbrush,
  Sun,
  Home,
  Panels: Layers,
  Wrench,
  Hammer,
};

export default function Services() {
  const serviceImages: Record<string, string> = {
    "Interior Painting": "/Assets/interiorpaint.png",
    "Exterior Painting": "https://images.pexels.com/photos/36497856/pexels-photo-36497856.jpeg?w=600",
    "Roofing Services": "/Assets/roofing.png",
    "Flooring Services": "/Assets/Flooring.png",
    "Plumbing Services": "/Assets/plumbing.png",
    "Complete Remodeling": "/Assets/renovation.png",
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-offwhite/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent-gold font-semibold text-xl tracking-wider uppercase mb-6 inline-block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-primary-dark via-gray-800 to-black bg-clip-text text-transparent mb-8">
            High-Quality Home Improvement
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            High-quality home improvement solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const Icon = IconComponent || Paintbrush;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-accent-gold/30 border border-white/30 hover:border-accent-gold/50 transition-all duration-500 overflow-hidden h-full"
              >
                {/* Service Image */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src={serviceImages[service.title as keyof typeof serviceImages] || serviceImages["Interior Painting"]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:brightness-110 transition-all duration-500"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-accent-gold/90 rounded-2xl flex items-center justify-center mb-6 shadow-2xl mx-auto group-hover:scale-110 transition-all duration-300 ring-8 ring-white/20">
                  <Icon className="w-8 h-8 text-primary-dark drop-shadow-lg" />
                </div>

                {/* Content */}
                <motion.h3 
                  className="text-2xl font-heading font-bold text-primary-dark mb-4 text-center"
                  whileHover={{ y: -4, color: '#D4AF37' }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-secondary leading-relaxed text-center mb-8 px-2">
                  {service.description}
                </p>

                {/* Learn More */}
                <motion.a
                  href="/services"
                  className="inline-flex items-center gap-2 text-accent-gold font-semibold text-sm uppercase tracking-wider mx-auto group-hover:text-accent-gold/80 transition-all justify-center"
                  whileHover={{ scale: 1.05, x: 8 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <a 
            href="/services"
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-accent-gold to-yellow-500 hover:from-accent-gold/95 text-primary-dark px-12 py-7 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-accent-gold/50 hover:scale-[1.02] transition-all duration-500"
          >
            Get a Free Quote Today 
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
