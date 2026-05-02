"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Building, Users, Award } from "lucide-react";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function TrustIndicators() {
  return (
    <section className="bg-accent-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-accent-gold/20 flex items-center justify-center">
                {index === 0 ? (
                  <Building className="w-7 h-7 text-accent-gold" />
                ) : index === 1 ? (
                  <Users className="w-7 h-7 text-accent-gold" />
                ) : (
                  <Award className="w-7 h-7 text-accent-gold" />
                )}
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-heading font-bold text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
