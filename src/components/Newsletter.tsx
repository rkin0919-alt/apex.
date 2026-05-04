import { motion } from "motion/react";

export default function Newsletter() {
  return (
    <section className="bg-accent-500 py-20 text-black border-y-4 border-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter mb-4">
              Unlock 15% Off Your First Order.
            </h2>
            <p className="text-xl font-medium mb-10 max-w-2xl mx-auto">
              Join the Apex community. Get early access to exclusive drops, training insights, and member-only events.
            </p>
            
            <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="flex-grow bg-transparent border-2 border-black px-6 py-4 placeholder:text-black/60 font-bold uppercase tracking-widest focus:outline-none focus:bg-white transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-black text-white font-bold uppercase tracking-widest py-4 px-8 hover:bg-neutral-800 transition-colors whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
            <p className="text-xs font-bold uppercase tracking-widest mt-6 opacity-70">
              By signing up, you agree to our Terms & Privacy Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
