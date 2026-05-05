"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check, Home, Building, Hammer, Wrench, Lightbulb, Users } from "lucide-react";
import { useState } from "react";

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceTypes = [
  { value: "management", label: "Property Management", icon: Home },
  { value: "construction", label: "Construction", icon: Hammer },
  { value: "renovation", label: "Renovation", icon: Wrench },
  { value: "maintenance", label: "Maintenance", icon: Building },
  { value: "leasing", label: "Leasing", icon: Users },
  { value: "consulting", label: "Consulting", icon: Lightbulb },
];

const propertyTypes = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "mixed-use", label: "Mixed Use" },
  { value: "office", label: "Office Space" },
  { value: "retail", label: "Retail" },
];

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [formData, setFormData] = useState({
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
      onClose();
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary-dark/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: 50 }}
            transition={{
  duration: 0.3,
  ease: "easeOut",
}}
            className="relative w-full max-w-2xl bg-primary-dark border border-accent-gold/30 rounded-2xl overflow-hidden mt-20 mb-10 md:mt-10 will-change-transform"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent pointer-events-none" />

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative p-6 pb-4 border-b border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Get A <span className="text-accent-gold">Quote</span>
              </h2>
              <p className="text-white/60 mt-2">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative p-6 space-y-4">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
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
                      className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mb-6"
                    >
                      <Check className="w-10 h-10 text-primary-dark" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-white/60">
                      We&apos;ll contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <motion.div
                      custom={0}
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Full Name *
                      </label>
                      <motion.input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent-gold focus:bg-white/10 transition-all"
                        placeholder="John Doe"
                        animate={{
                          borderColor:
                            focusedField === "name"
                              ? "#D4AF37"
                              : "rgba(255,255,255,0.1)",
                        }}
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      custom={1}
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Email Address *
                      </label>
                      <motion.input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent-gold focus:bg-white/10 transition-all"
                        placeholder="john@example.com"
                        animate={{
                          borderColor:
                            focusedField === "email"
                              ? "#D4AF37"
                              : "rgba(255,255,255,0.1)",
                        }}
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      custom={2}
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Phone Number
                      </label>
                      <motion.input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent-gold focus:bg-white/10 transition-all"
                        placeholder="+1 (555) 000-0000"
                        animate={{
                          borderColor:
                            focusedField === "phone"
                              ? "#D4AF37"
                              : "rgba(255,255,255,0.1)",
                        }}
                      />
                    </motion.div>

                    {/* Property Type */}
                    <motion.div
                      custom={3}
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Property Type
                      </label>
                      <motion.select
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            propertyType: e.target.value,
                          })
                        }
                        onFocus={() => setFocusedField("propertyType")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:bg-white/10 transition-all appearance-none cursor-pointer"
                        animate={{
                          borderColor:
                            focusedField === "propertyType"
                              ? "#D4AF37"
                              : "rgba(255,255,255,0.1)",
                        }}
                      >
                        <option value="" className="bg-primary-dark">
                          Select property type
                        </option>
                        {propertyTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-primary-dark">
                            {type.label}
                          </option>
                        ))}
                      </motion.select>
                    </motion.div>

                    {/* Service Type - Full Width */}
                    <motion.div
                      custom={4}
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative md:col-span-2"
                    >
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Service Required *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {serviceTypes.map((service, index) => {
                          const Icon = service.icon;
                          const isSelected = formData.serviceType === service.value;
                          return (
                            <motion.button
                              key={service.value}
                              type="button"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.05 }}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  serviceType: service.value,
                                })
                              }
                              className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-all ${
                                isSelected
                                  ? "border-accent-gold bg-accent-gold/20 text-white"
                                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Icon className="w-4 h-4" />
                              <span className="text-xs font-medium">
                                {service.label}
                              </span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Message - Full Width */}
                    <motion.div
                      custom={5}
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative md:col-span-2"
                    >
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Message
                      </label>
                      <motion.textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent-gold focus:bg-white/10 transition-all resize-none"
                        placeholder="Tell us about your project..."
                        animate={{
                          borderColor:
                            focusedField === "message"
                              ? "#D4AF37"
                              : "rgba(255,255,255,0.1)",
                        }}
                      />
                    </motion.div>

                    {/* Submit Button - Full Width */}
                    <motion.div
                      custom={6}
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative md:col-span-2"
                    >
                      <motion.button
                        type="submit"
                        disabled={!formData.name || !formData.email || !formData.serviceType}
                        className="w-full flex items-center justify-center gap-2 bg-accent-gold text-primary-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        
                      >
                        <Send className="w-5 h-5" />
                        Request Quote
                      </motion.button>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </form>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-gold rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-20 -left-20 w-40 h-40 bg-accent-gold rounded-full blur-3xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
