"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function ImageMotionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section 
      ref={ref} 
      className="section" 
      style={{ position: "relative", overflow: "hidden", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0a0a0a" }}
    >
      <motion.div 
        style={{ 
          position: "absolute", 
          inset: 0, 
          zIndex: 0, 
          y: y1,
          opacity: opacity,
          scale: scale
        }}
      >
        <Image 
          src="/seo-network.png" 
          alt="Abstract SEO Network" 
          fill 
          style={{ objectFit: "cover", opacity: 0.5 }} 
          priority={false}
        />
      </motion.div>
      
      <motion.div 
        className="container"
        style={{ position: "relative", zIndex: 1, textAlign: "center", color: "#fff" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="eyebrow" style={{ color: "#22D3EE" }}>Intelligence Artificielle & Data</span>
        <h2 className="t-h2" style={{ color: "#fff", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          Propulsez votre visibilité au niveau supérieur
        </h2>
        <p className="t-lead" style={{ color: "#ddd", maxWidth: "600px", margin: "0 auto", textShadow: "0 1px 5px rgba(0,0,0,0.5)" }}>
          L'alliance de l'expertise SEO technique et de l'optimisation pour les moteurs de recherche IA.
        </p>
      </motion.div>
    </section>
  );
}
