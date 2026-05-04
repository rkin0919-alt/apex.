import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-black text-white relative flex items-center overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900/50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[2px] w-12 bg-accent-500"></div>
              <span className="text-accent-500 font-bold uppercase tracking-widest text-sm">
                Our Mission
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold uppercase tracking-tighter leading-[0.9] mb-6">
              Push <br />
              <span className="text-neutral-500">Beyond</span> <br />
              Limits.
            </h2>
            <div className="space-y-6 text-neutral-300 font-medium text-lg max-w-lg">
              <p>
                We believe that human potential is infinite. Built for the relentless, Apex Athletics engineers performance wear that moves with you, breathes with you, and demands the most out of you.
              </p>
              <p>
                From the squat rack to the streets, we are a global community of athletes united by discipline, aesthetics, and the pursuit of progress.
              </p>
            </div>

            <button className="mt-10 bg-white text-black font-bold uppercase tracking-widest py-4 px-8 rounded hover:bg-neutral-200 transition-colors inline-flex items-center group">
              Read Our Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[700px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop"
              alt="Athlete focused"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* Branding overlay */}
            <div className="absolute inset-0 border-[16px] xl:border-[32px] border-black pointer-events-none mix-blend-overlay"></div>
            <div className="absolute bottom-8 left-8 right-8 text-center p-6 bg-black/60 backdrop-blur-sm border border-neutral-800 rounded">
              <p className="font-heading font-bold uppercase tracking-widest text-xl">
                "Comfort is the enemy of progress."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
