"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import logo from "./Assets/Toptierlogo.png";
import { quickLinks, serviceLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
{/* Company Info */}
          <div className="space-y-4">
            <motion.a
              href="/"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <Image 
                src={logo}
                alt="Top Tier Property Group"
                className="h-12 w-auto object-contain"
              />
            </motion.a>
            <p className="text-white/60 leading-relaxed">
              Your trusted partner for premium property management and construction services. 
              We elevat properties with expert care and meticulous attention to detail.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((SocialIcon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent-gold hover:text-primary-dark transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent-gold transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4 text-accent-gold" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent-gold transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4 text-accent-gold" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold mt-0.5" />
                <span className="text-white/60">
                  123 Property Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-gold" />
                <a href="tel:+1234567890" className="text-white/60 hover:text-accent-gold transition-colors">
                  +1 (334) 320-2024
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-gold" />
                <a href="mailto:info@toptierproperty.com" className="text-white/60 hover:text-accent-gold transition-colors">
                  info@toptierpropertygroup.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent-gold" />
                <span className="text-white/60">
                  Mon - Fri: 8am - 5:30am
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Top Tier Property Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-accent-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-accent-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/40 hover:text-accent-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
