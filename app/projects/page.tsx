"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Building2, Users, Calendar, DollarSign, Star } from "lucide-react";

import { useState, useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import ProjectCard from "@/components/ProjectCard";
import FeaturedProject from "@/components/FeaturedProject";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import { projects } from "@/lib/data";

const categories = ["All", "Construction", "Renovation", "Management"];

interface ExtendedProject {
  title: string;
  location: string;
  image: string;
  category: string;
  description: string;
}

const extendedProjects: ExtendedProject[] = [
  {
    title: "Premium Roofing Installation",
    location: "New York, NY",
    image: "/Assets/roofing.png",
    category: "Roofing",
    description: "Complete roof replacement with premium architectural shingles, enhanced insulation, and state-of-the-art ventilation systems for optimal energy efficiency."
  },
  {
    title: "Luxury Flooring Transformation", 
    location: "Chicago, IL",
    image: "/Assets/Flooring.png",
    category: "Flooring",
    description: "High-end hardwood and tile flooring installation throughout 4,500 sq ft residence with custom inlays and premium finishing for timeless elegance."
  },
  {
    title: "Expert Plumbing Overhaul",
    location: "Los Angeles, CA",
    image: "/Assets/plumbing.png",
    category: "Plumbing",
    description: "Full plumbing system upgrade including smart water management, luxury fixtures, and whole-house water filtration for modern residential property."
  },
  {
    title: "Complete Interior Painting",
    location: "Boston, MA",
    image: "/Assets/interiorpaint.png",
    category: "Painting",
    description: "Professional interior painting throughout 3-story townhome with premium low-VOC paints, custom color matching, and flawless finish work."
  },
  {
    title: "Full Home Remodeling",
    location: "Miami, FL",
    image: "/Assets/renovation.png",
    category: "Remodeling",
    description: "Comprehensive kitchen and bathroom remodeling with custom cabinetry, quartz surfaces, and designer fixtures creating resort-style living spaces."
  },
  {
    title: "Exterior Home Transformation",
    location: "Austin, TX",
    image: "/Assets/renovation.png",
    category: "Exterior",
    description: "Complete exterior renovation including new siding, modern windows, professional landscaping, and energy-efficient upgrades for curb appeal."
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const filteredProjects = activeCategory === "All" 
    ? extendedProjects 
    : extendedProjects.filter(p => p.category === activeCategory);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categoryFilter = (category: string) => {
    setActiveCategory(category);
  };

  const featuredProjectStats = [
    { label: "Budget", value: "$45M", icon: DollarSign },
    { label: "Timeline", value: "24 months", icon: Calendar },
    { label: "Units", value: "248", icon: Building2 }
  ];

  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        
{/* Hero Section */}
        <section className="relative h-screen min-h-[800px] pt-20 bg-gradient-to-br from-primary-dark via-accent-navy to-primary-dark overflow-hidden">
          <div className="absolute inset-0">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.15),transparent_50%)]" />
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80"
              alt="Projects Hero"
              fill
              className="object-cover opacity-40"
              priority
            />
            {/* Floating Particles */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 lg:w-8 lg:h-8 bg-accent-gold/30 rounded-full blur-xl"
                style={{
                  top: `${10 + i * 20}%`,
                  right: `${10 + i * 15}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          <motion.div 
            ref={heroRef}
            className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto"
            style={{ y: heroParallax }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block bg-accent-gold/30 text-accent-gold px-8 py-4 rounded-2xl text-xl lg:text-2xl font-semibold tracking-wider uppercase mb-12 backdrop-blur-md shadow-2xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our Portfolio
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white leading-tight mb-8 px-4 tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Our <span className="text-accent-gold block md:inline">Projects</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-16 px-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Excellence crafted into every property we touch
            </motion.p>
          </motion.div>
        </section>

        {/* Featured Project */}
        <FeaturedProject
          title="Premium Roofing Excellence"
          description="Complete roofing transformation featuring durable asphalt shingles, proper ventilation systems, and flawless waterproofing. Delivered with zero leaks and enhanced energy efficiency."
          image="/Assets/roofing.png"
          stats={[
            { label: "Budget", value: "$85K", icon: DollarSign },
            { label: "Timeline", value: "3 weeks", icon: Calendar },
            { label: "Sq Ft", value: "4,200", icon: Building2 },
            { label: "Rating", value: "5.0", icon: Star }
          ]}
        />

        {/* Category Filter */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.h2 
              className="text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-primary-dark to-gray-800 bg-clip-text text-transparent mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Explore by Category
            </motion.h2>
            
            <div className="flex flex-wrap gap-4 justify-center mb-20">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-dark shadow-2xl shadow-accent-gold/50 scale-105"
                      : "bg-white/60 text-gray-700 hover:bg-accent-gold/20 hover:text-accent-gold border border-gray-200 hover:border-accent-gold/50 hover:shadow-lg"
                  }`}
                  onClick={() => categoryFilter(category)}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-offwhite relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.02)_0%,transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-8 relative z-10">
<AnimatePresence>
              <motion.div
                key={activeCategory}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                variants={gridVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.title + index} project={project} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-t from-primary-dark to-accent-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.05),transparent_50%)]" />
          <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {[  
                { value: "100+", label: "Projects Completed", icon: Building2 },
                { value: "50+", label: "Happy Clients", icon: Users },
                { value: "10+", label: "Years Experience", icon: Calendar }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="group"
                >
                  <motion.div
                    className="text-5xl lg:text-7xl font-heading font-bold bg-gradient-to-r from-accent-gold to-yellow-500 bg-clip-text text-transparent mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/90 text-xl font-semibold group-hover:text-accent-gold transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <CTA />
        <Footer />
        <Chatbot />
      </main>
    </>
  );
}

