"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Building2, Users, Calendar, DollarSign } from "lucide-react";

interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  stats: {
    label: string;
    value: string;
    icon: any;
  }[];
}

const FeaturedProject = ({ title, description, image, stats }: FeaturedProjectProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const counterVariants = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section
      ref={ref}
      className="py-32 bg-gradient-to-b from-gray-50 to-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            variants={itemVariants}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block bg-accent-gold text-primary-dark px-6 py-3 rounded-full text-lg font-semibold tracking-wider uppercase mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Featured Project
            </motion.span>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-primary-dark to-gray-800 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              {description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-accent-gold/10 transition-all duration-500"
                  variants={counterVariants}
                  custom={isInView}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-accent-gold to-yellow-500 rounded-2xl flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <stat.icon className="w-6 h-6 text-primary-dark" />
                  </motion.div>
                  <div>
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-accent-gold to-yellow-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProject;

