"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  review: string;
  name: string;
  role: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ review, name, role, rating, image }: TestimonialCardProps) => {
  return (
    <motion.div
      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:shadow-accent-gold/25 border border-white/50 hover:border-accent-gold/30 transition-all duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Quote Icon */}
      <motion.div 
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent-gold/20 rounded-2xl flex items-center justify-center text-accent-gold"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.662 9.724a.25.25 0 0 1-.25-.25V4.75a.75.75 0 0 1 1.5 0v4.724a1.25 1.25 0 0 1-1.25 1.25h-.75zM9.75 14a.75.75 0 0 1-.75-.75V11a.25.25 0 0 1 .25-.25h.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75z" />
          <path d="M1.217 10.07a1.25 1.25 0 0 1 1.545-.91l.9.66c.28-.45.6-.88 1-.12a.75.75 0 1 1-.4 1.21l-1.12-.81a3.75 3.75 0 0 0-2.51 5.886.75.75 0 0 1-.97-.315l-.78-.988a7.5 7.5 0 0 0 5.037-5.342l-.314-.94a1.25 1.25 0 0 1 .217-1.206zM13.25 10.07a1.25 1.25 0 0 1 1.545-.91l.9.66c.28-.45.6-.88 1-.12a.75.75 0 1 1-.4 1.21l-1.12-.81a3.75 3.75 0 0 0-2.51 5.886.75.75 0 0 1-.97-.315l-.78-.988a7.5 7.5 0 0 0 5.037-5.342l-.314-.94a1.25 1.25 0 0 1 .217-1.206z" />
        </svg>
      </motion.div>

      {/* Review Text */}
      <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8 font-medium">
        "{review}"
      </p>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-accent-gold fill-accent-gold' : 'text-gray-300'
            } transition-colors duration-300 group-hover:text-accent-gold`}
          />
        ))}
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        {image && (
          <motion.div 
            className="w-14 h-14 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-8 h-8 bg-white rounded-full" />
          </motion.div>
        )}
        <div>
          <h4 className="font-heading font-bold text-xl text-gray-900 group-hover:text-accent-gold transition-colors">
            {name}
          </h4>
          <p className="text-secondary font-semibold">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};


export default TestimonialCard;

