"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-accent-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #D4AF37 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-accent-gold font-medium text-sm tracking-wider uppercase">
            Let's Work Together
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3">
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Let's discuss how we can elevate your property portfolio. 
            Our team is ready to help you achieve your real estate goals.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Call Us
            </motion.a>
            <motion.a
              href="mailto:info@toptierproperty.com"
              className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              Email Us
            </motion.a>
          </div>

          {/* Main CTA Button with Pulse */}
          <div className="mt-8">
            <motion.a
              href="mailto:info@toptierproperty.com"
              className="inline-flex items-center gap-2 bg-accent-gold text-primary-dark px-10 py-5 rounded-lg font-bold text-lg hover:bg-accent-gold/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
