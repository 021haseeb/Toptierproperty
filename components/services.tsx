"use client";

import { motion } from "framer-motion";
import { 
  Building, 
  Hammer, 
  Wrench, 
  Paintbrush, 
  Users, 
  Lightbulb,
  ArrowRight 
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building,
  Hammer,
  Wrench,
  Paintbrush,
  Users,
  Lightbulb,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-gold font-medium text-sm tracking-wider uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-dark mt-3">
            Our Services
          </h2>
          <p className="text-secondary text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive property solutions tailored to meet your unique needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-accent-gold/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent-gold group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-primary-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent-gold font-medium mt-4 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
