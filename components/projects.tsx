"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-white">
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
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-dark mt-3">
            Featured Projects
          </h2>
          <p className="text-secondary text-lg mt-4 max-w-2xl mx-auto">
            Discover some of our most memorable service transformations and renovations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden"
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <span className="text-accent-gold text-sm font-medium">
                    {project.location}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-2 mb-4">
                    {project.name}
                  </h3>
                  
                  {/* View Details Button - appears on hover */}
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/projects">
  <motion.span
    className="inline-flex items-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark/90 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    View All Projects
    <ArrowRight className="w-5 h-5" />
  </motion.span>
</Link>
        </motion.div>
      </div>
    </section>
  );
}
