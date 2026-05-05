"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import Navigation from "@/components/navigation";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

import { services, stats } from "@/lib/data";

/* =========================
   3D SERVICE CARD (FIXED)
========================= */
const ServiceCard3D = ({ service, index }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const rotateX = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], ["0deg", "10deg"]);

  return (
    <motion.div
      ref={ref}
      style={{ perspective: 1000, rotateX, rotateY }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative bg-white rounded-3xl p-10 shadow-2xl border border-white/20 hover:border-accent-gold/30 transition-all duration-500"
      >
        {/* ICON */}
        <div className="absolute -top-10 -right-8 w-20 h-20 bg-accent-gold/10 rounded-2xl flex items-center justify-center">
          <div className="text-accent-gold text-3xl">★</div>
        </div>

        {/* CONTENT */}
        <div className="text-center pt-10">
          <h3 className="text-2xl font-bold text-primary-dark mb-4">
            {service.title}
          </h3>

          <p className="text-secondary text-base leading-relaxed">
            {service.description}
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-2 text-left">
            <p>✔ Expert Team</p>
            <p>✔ 24/7 Support</p>
            <p>✔ Competitive Rates</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================
   PAGE
========================= */
export default function ServicesPage() {
  const heroRef = useRef(null);

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* ================= HERO ================= */}
      <section className="relative pt-20 h-[calc(100vh-5rem)] min-h-[700px] bg-gradient-to-br from-primary-dark via-accent-navy to-primary-dark overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.1),transparent_50%)]" />

          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Services Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto"
        >
          <motion.span className="bg-accent-gold/30 text-accent-gold px-6 py-3 rounded-full mb-6">
            Our Expertise
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Complete <span className="text-accent-gold">Property</span>
            <br />
            Solutions
          </h1>

          <p className="text-white/80 mt-6 text-xl max-w-2xl">
            From management to construction — everything under one expert roof
          </p>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-10">
          {stats.map((stat, i) => (
            <div key={i}>
              <h2 className="text-4xl font-bold text-accent-gold">
                {stat.value}{stat.suffix}
              </h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-primary-dark">
            What We Do Best
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
          {services.map((service, index) => (
            <ServiceCard3D
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
      <Chatbot />
    </main>
  );
}