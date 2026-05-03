"use client";

import { motion, useMotionValue, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Building, Hammer, Wrench, Paintbrush, Users, Lightbulb, CheckCircle, Users as UsersIcon, Award, Calendar } from "lucide-react";
import Navigation from "@/components/navigation";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

import { services, stats } from "@/lib/data";

const ServiceCard3D = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotateX = useTransform(scrollYProgress, [0, 1], ["0deg", "-20deg"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], ["0deg", "10deg"]);

  return (
    <motion.div
      ref={ref}
      className="group relative"
      style={{ perspective: 1000, rotateX, rotateY }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      <motion.div 
        className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-10 shadow-2xl hover:shadow-accent-gold/25 cursor-pointer border border-white/20 hover:border-accent-gold/30 transition-all duration-500 group-hover:scale-[1.02]"
        whileHover={{ 
          scale: 1.05, 
          rotateY: [0, -5, 5, 0],
          transition: { duration: 0.6, ease: "easeOut" }
        }}
        drag
        dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
        dragElastic={0.1}
      >
        {/* Floating Icon */}
        <motion.div 
          className="absolute -top-12 -right-8 w-24 h-24 bg-accent-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-accent-gold/20 transition-all duration-700"
          animate={{ 
            rotate: ["0deg", "180deg", "360deg"],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {(() => {
            const IconMap = { Building, Hammer, Wrench, Paintbrush, Users, Lightbulb };
            const Icon = IconMap[service.icon as keyof typeof IconMap];
            return <Icon className="w-12 h-12 text-accent-gold drop-shadow-lg" />;
          })()}
        </motion.div>

        {/* Content */}
        <div className="text-center relative z-10">
          <motion.h3 
            className="text-2xl lg:text-3xl font-heading font-bold bg-gradient-to-r from-primary-dark to-gray-800 bg-clip-text text-transparent mb-6 pt-16"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {service.title}
          </motion.h3>
          <motion.p 
            className="text-secondary leading-relaxed text-lg px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {service.description}
          </motion.p>
          
          {/* Features */}
          <motion.div 
            className="mt-8 space-y-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0" />
              <span className="font-medium">Expert Team</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0" />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0" />
              <span className="font-medium">Competitive Rates</span>
            </div>
          </motion.div>
        </div>

        {/* Glowing particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-gold/40 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              right: `${10 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

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

export default function ServicesPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const servicesParallax = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <>

      
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero with Parallax */}
        <section className="relative h-screen min-h-[800px] bg-gradient-to-br from-primary-dark via-accent-navy to-primary-dark overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.1),transparent_50%)]" />
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
              alt="Services Hero"
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
              Our Expertise
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-8 px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Complete <span className="text-accent-gold block md:inline">Property</span>
              <span className="text-accent-gold block md:inline">Solutions</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 px-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              From management to construction - everything your properties need under one expert roof
            </motion.p>
            <motion.div
              className="flex flex-col lg:flex-row gap-6 pt-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-dark px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-accent-gold/50 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/40 text-white px-12 py-6 rounded-2xl font-bold text-xl backdrop-blur-md hover:bg-white/10 hover:border-accent-gold transition-all duration-300"
              >
                Watch Showcase
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-offwhite/80 to-white relative">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center"
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
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-32 lg:py-40 bg-gradient-to-b from-white via-offwhite to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent-gold font-semibold text-xl tracking-wider uppercase mb-6 inline-block">
                Our Core Services
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold bg-gradient-to-r from-primary-dark via-gray-800 to-black bg-clip-text text-transparent">
                What We Do Best
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <ServiceCard3D key={service.title} service={service} index={index} />
              ))}
            </div>
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

