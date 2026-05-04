import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // If cursor leaves top of window
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    
    // Also show after 60 seconds if they haven't tried to leave
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 60000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg overflow-hidden flex flex-col shadow-2xl"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur rounded-full hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            <div className="h-48 bg-neutral-900 relative">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
                alt="Discount"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-5xl font-heading font-bold uppercase tracking-tighter">
                  Wait!
                </h3>
              </div>
            </div>

            <div className="p-8 text-center bg-white flex flex-col items-center">
              <span className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-2">
                Don't leave empty handed
              </span>
              <h4 className="text-3xl font-heading font-bold uppercase tracking-tight mb-4">
                Take 20% Off <br /> Your First Order
              </h4>
              <p className="text-neutral-600 font-medium mb-6">
                Join the Apex Athletics community today and start your journey with a discount on us.
              </p>

              <form className="w-full space-y-3" onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }}>
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full border-2 border-neutral-200 px-4 py-3 placeholder:text-neutral-400 font-bold uppercase tracking-widest focus:outline-none focus:border-black transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 hover:bg-neutral-800 transition-colors"
                >
                  Reveal My Code
                </button>
              </form>
              
              <button
                onClick={() => setIsVisible(false)}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1"
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
