"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Phone, Mail, Building, Hammer, Wrench, Paintbrush, Lightbulb, Users } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/data";

const propertyTypes = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "mixed-use", label: "Mixed Use" },
  { value: "office", label: "Office Space" },
  { value: "retail", label: "Retail" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceType: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        serviceType: "",
        message: "",
      });
    }, 3000);
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const IconMap: { [key: string]: React.ElementType } = {
    Building,
    Hammer,
    Wrench,
    Paintbrush,
    Users,
    Lightbulb,
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-offwhite/80 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent-gold font-semibold text-xl tracking-wider uppercase mb-6 inline-block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-primary-dark to-gray-800 bg-clip-text text-transparent">
            Contact Us Today
          </h2>
          <p className="text-secondary text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center max-w-2xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.2,
                }}
                className="w-24 h-24 bg-accent-gold rounded-full flex items-center justify-center mb-8 mx-auto"
              >
                <Check className="w-12 h-12 text-primary-dark" />
              </motion.div>
              <h3 className="text-3xl font-bold text-primary-dark mb-4">
                Message Sent Successfully!
              </h3>
              <p className="text-secondary text-lg">
                We'll contact you shortly. Thank you for reaching out!
              </p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} className="max-w-2xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Name */}
                <motion.div custom={0} variants={inputVariants} initial="hidden" animate="visible" className="relative">
                  <label className="block text-sm font-medium text-primary-dark/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-primary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all shadow-sm"
                    placeholder="Your full name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible" className="relative">
                  <label className="block text-sm font-medium text-primary-dark/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-primary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all shadow-sm"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div custom={2} variants={inputVariants} initial="hidden" animate="visible" className="relative">
                  <label className="block text-sm font-medium text-primary-dark/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-primary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all shadow-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </motion.div>

                {/* Property Type */}
                <motion.div custom={3} variants={inputVariants} initial="hidden" animate="visible" className="relative md:col-span-2">
                  <label className="block text-sm font-medium text-primary-dark/80 mb-2">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all shadow-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Service Type Buttons */}
              <motion.div custom={4} variants={inputVariants} initial="hidden" animate="visible" className="mb-8 md:col-span-2">
                <label className="block text-sm font-medium text-primary-dark/80 mb-4">
                  Interested In *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services.map((service) => {
                    const Icon = (IconMap[service.icon as keyof typeof IconMap] || Building) as React.ElementType;
                    const isSelected = formData.serviceType === service.title.toLowerCase().replace(/ /g, '-');
                    return (
                      <motion.button
                        key={service.title}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: service.title.toLowerCase().replace(/ /g, '-') })}
                        className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all group ${isSelected ? 'border-accent-gold bg-accent-gold/10 text-primary-dark shadow-md shadow-accent-gold/20' : 'border-gray-200 hover:border-accent-gold/50 hover:bg-accent-gold/5 text-primary-dark/80'}`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{service.title}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Message */}
              <motion.div custom={5} variants={inputVariants} initial="hidden" animate="visible" className="relative mb-8">
                <label className="block text-sm font-medium text-primary-dark/80 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-primary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all shadow-sm resize-vertical"
                  placeholder="Tell us more about your project or inquiry..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!formData.name || !formData.email || !formData.serviceType}
                className="w-full bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-dark px-8 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-accent-gold/50 hover:from-accent-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-6 h-6 inline mr-2" />
                Send Message
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

