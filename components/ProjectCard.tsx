"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  location: string;
  image: string;
  category: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl hover:shadow-accent-gold/50 border border-white/50 hover:border-accent-gold/30 transition-all duration-700 cursor-pointer"
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -20,
        rotateY: 5
      }}
      transition={{ 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        rotateY: { duration: 0.4 }
      }}
    >
      {/* Image */}
      <div className="relative h-64 lg:h-80 w-full overflow-hidden rounded-t-3xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Category Badge */}
        <motion.div 
          className="absolute top-6 left-6 bg-accent-gold/90 text-primary-dark px-4 py-2 rounded-xl font-semibold text-sm backdrop-blur-sm"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          {project.category}
        </motion.div>
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            className="bg-accent-gold text-primary-dark px-6 py-3 rounded-xl font-bold hover:bg-accent-gold/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-8">
        <motion.h3 
          className="font-heading text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-dark to-gray-800 bg-clip-text text-transparent mb-2 group-hover:from-accent-gold group-hover:to-yellow-500 transition-all duration-500"
          whileInView={{ y: 0 }}
          initial={{ y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-secondary mb-3 font-medium">{project.location}</p>
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

