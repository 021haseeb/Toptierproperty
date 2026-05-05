"use client";

import { motion, useMotionValue, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Users, Award, Calendar } from "lucide-react";
// import Head from "next/head"; // Not needed in app dir
import Navigation from "@/components/navigation";
import ContactForm from "@/components/contact-form";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import { stats } from "@/lib/data";

const AnimatedCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const count = useTransform(
    useMotionValue(0),
    [0, 1],
    [0, value]
  );

  return (
    <motion.div ref={ref}>
      <motion.div className="text-5xl lg:text-7xl font-heading font-bold bg-gradient-to-r from-accent-gold to-yellow-500 bg-clip-text text-transparent mb-2">
        <motion.span>{count}</motion.span>{suffix}
      </motion.div>
      <div className="text-secondary text-xl font-semibold">{label}</div>
    </motion.div>
  );
};

export default function ContactPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const servicesParallax = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <>

      
      <main className="min-h-screen">
        <Navigation />
        
{/* Hero with Parallax */}
<section className="relative pt-20 h-[calc(100vh-5rem)] min-h-[calc(800px-5rem)] bg-gradient-to-br from-primary-dark via-accent-navy to-primary-dark overflow-hidden">
          <div className="absolute inset-0">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.1),transparent_50%)]" />
            <Image
              src="https://images.unsplash.com/photo-1558618048-f5fcebd5d67c?w=1920&q=80" // Office/contact themed image
              alt="Contact Hero"
              fill
              className="object-cover opacity-40"
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
            ref={heroRef}
            className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto"
            style={{ y: servicesParallax }}
          >
            <motion.span
              className="inline-block bg-accent-gold/30 text-accent-gold px-6 py-3 rounded-full text-lg font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We'd Love to Hear From You
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-8 px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Get In <span className="text-accent-gold block md:inline">Touch</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 px-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Ready to discuss your property needs? Our expert team is here to provide personalized solutions.
            </motion.p>
            <motion.div className="flex flex-col lg:flex-row gap-6 pt-12">
              <motion.a
                href="#contact-form"
                className="bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-dark px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-accent-gold/50 transition-all duration-300 self-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Inquiry
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-offwhite to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  }
                }
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                >
                  <AnimatedCounter {...stat} />
                </motion.div>
              ))}
              <motion.div className="lg:col-span-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-5xl lg:text-7xl font-heading font-bold bg-gradient-to-r from-accent-gold to-yellow-500 bg-clip-text text-transparent mb-2"
                >
                  24h
                </motion.div>
                <div className="text-secondary text-xl font-semibold">Response Time</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* CTA Section */}
        <CTA />
        <Footer />
        <Chatbot />
      </main>
    </>
  );
}

