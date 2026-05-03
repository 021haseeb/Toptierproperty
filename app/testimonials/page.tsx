"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import { testimonials } from "@/lib/data";

export default function TestimonialsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative h-screen min-h-[800px] bg-gradient-to-br from-primary-dark via-accent-navy to-primary-dark overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.1),transparent_50%)]" />
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt="Testimonials Hero"
              fill
              className="object-cover opacity-30"
              priority
            />
            {/* Floating elements */}
            <motion.div 
              className="absolute top-1/4 left-10 w-32 h-32 bg-accent-gold/20 rounded-full blur-xl"
              animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-20 w-48 h-48 bg-accent-gold/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          
          <motion.div 
            ref={ref}
            className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto"
            style={{ y: heroParallax }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block bg-accent-gold/30 text-accent-gold px-6 py-3 rounded-full text-lg font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Client Success Stories
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-8 px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              What Our <span className="text-accent-gold block md:inline">Clients Say</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 px-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Trusted by property owners, developers and investors who demand excellence
            </motion.p>
          </motion.div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-offwhite/80 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent-gold font-semibold text-xl tracking-wider uppercase mb-6 inline-block">
                Real Client Experiences
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold bg-gradient-to-r from-primary-dark via-gray-800 to-black bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  review={testimonial.text}
                  name={testimonial.name}
                  role={testimonial.role}
                  rating={5}
                  image={true}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
        <Footer />
        <Chatbot />
      </main>
    </>
  );
}

