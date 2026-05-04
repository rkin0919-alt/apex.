import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Video Simulation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
          alt="Athletes training"
          className="w-full h-full object-cover object-top scale-105"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 mt-20 md:mt-0 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 bg-accent-500 text-black text-xs md:text-sm font-bold uppercase tracking-widest mb-6 rounded-sm">
            The Origin Collection
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white uppercase tracking-tighter leading-[0.9]">
            Define Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-yellow-400">
              Legacy
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-medium">
            Engineered for limits. The new Origin seamless collection is built to move as hard as you do.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black font-bold uppercase tracking-widest py-4 px-10 rounded hover:bg-neutral-200 transition-colors flex items-center justify-center group">
              Shop Mens
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest py-4 px-10 rounded hover:bg-white hover:text-black transition-colors flex items-center justify-center group">
              Shop Womens
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white/60 text-xs uppercase tracking-[0.2em] mb-2">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
