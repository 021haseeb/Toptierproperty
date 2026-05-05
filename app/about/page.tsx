"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Check, Users, Award, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import Head from "next/head";

const stats = [
  { value: "10", suffix: "+", label: "Years Experience" },
  { value: "100", suffix: "+", label: "Projects Completed" },
  { value: "99", suffix: "%", label: "Client Satisfaction" },
  { value: "50", suffix: "+", label: "Happy Clients" },
];

const teamMembers = [
  { name: "David Lee", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Sarah Johnson", role: "Head of Operations", image: "./Assets/Sarah.png" },
  { name: "Michael Chen", role: "Construction Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const statCardVariants = {
    initial: { rotateX: 0, rotateY: 0 },
    hover: { 
      scale: 1.05,
      rotateX: -10,
      rotateY: 10,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <>
      <Head>
        <title>About Top Tier Property Group | Premium Property Services</title>
        <meta name="description" content="Learn about our 10+ years of excellence in property management and construction. Meet our team and discover why clients trust us." />
      </Head>
      
      <main className="min-h-screen">
        <Navigation />
        
{/* Hero */}
<section className="relative pt-20 min-h-screen bg-gradient-to-br from-primary-dark via-accent-navy to-primary-dark overflow-hidden"> 
          <div className="absolute inset-0">

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-accent-gold/10 via-transparent to-transparent" />
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
              alt="About Hero"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase"
              >
                Our Story
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight"
              >
                Crafting <span className="text-accent-gold block md:inline">Property Excellence</span>
                <span className="text-accent-gold">Since 2013</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              >
                Over a decade of transforming properties and exceeding expectations with precision, passion, and professional excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-gold text-primary-dark px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-accent-gold/50 transition-all"
                >
                  Our Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  Meet The Team
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute top-20 right-10 w-32 h-32 md:w-40 md:h-40"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-full h-full bg-accent-gold/20 rounded-full blur-xl" />
          </motion.div>
        </section>

        {/* Stats - Bottle Flip Cards */}
        <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-offwhite to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(212,175,55,0.1),transparent)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="text-accent-gold font-semibold text-lg tracking-wider uppercase mb-4 inline-block">
                By The Numbers
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-dark">
                Proven Results
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statCardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="group relative"
                  style={{ perspective: 1000 }}
                >
                  <motion.div 
                    className="relative w-full h-48 md:h-52 bg-gradient-to-br from-accent-gold/90 to-yellow-500 rounded-2xl p-6 shadow-2xl cursor-pointer hover:shadow-accent-gold/50 transition-all"
                    variants={statCardVariants}
                  >
                    <div className="text-center h-full flex flex-col items-center justify-center">
                      <motion.div 
                        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-dark mb-2"
                      >
                        {stat.value}
                        <span className="text-lg font-normal">{stat.suffix}</span>
                      </motion.div>
                      <div className="text-primary-dark/80 font-semibold text-sm md:text-base tracking-tight">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 lg:py-32 bg-primary-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <span className="text-accent-gold font-semibold text-lg tracking-wider uppercase inline-block mb-6">
                  Our Journey
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                  From Vision to Industry Leader
                </h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Founded in 2013, Top Tier Property Group started with a simple belief: properties deserve better. What began as a small team managing local rentals has grown into a full-service powerhouse handling everything from luxury renovations to comprehensive property management.
                  </p>
                  <p>
                    Today, we manage over 100 properties across the region with a 99% client satisfaction rate. Our secret? Relentless attention to detail, cutting-edge construction techniques, and partnerships that last.
                  </p>
                </div>
              </motion.div>
              
              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  {[
                    { year: "2013", event: "Founded Top Tier Property Group" },
                    { year: "2016", event: "Expanded to full construction services" },
                    { year: "2019", event: "Reached 50 properties under management" },
                    { year: "2022", event: "Completed 100th project milestone" },
                    { year: "2024", event: "Celebrating 99% client satisfaction" }
                  ].map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center font-semibold text-primary-dark">
                        {milestone.year}
                      </div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <p className="text-white/90 font-medium">{milestone.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-32 bg-offwhite">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="text-accent-gold font-semibold text-lg tracking-wider uppercase mb-6 inline-block">
                Our Leadership
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-dark">
                Meet the Team Driving Excellence
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-heading font-bold text-primary-dark mb-2">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-semibold text-lg mb-4">
                      {member.role}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-accent-gold font-semibold hover:text-accent-gold/80 transition-colors"
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-accent-navy to-primary-dark">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
            >
              Ready to Transform Your Properties?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Join hundreds of satisfied clients who trust Top Tier Property Group with their most valuable assets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-gold text-primary-dark px-10 py-5 rounded-2xl font-semibold text-xl shadow-2xl hover:shadow-accent-gold/50 transition-all w-full sm:w-auto text-center"
              >
                Get Your Free Consultation
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-white/10 backdrop-blur-sm transition-all w-full sm:w-auto text-center"
              >
                View Our Services
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Footer />
        <Chatbot />
      </main>
    </>
  );
}
