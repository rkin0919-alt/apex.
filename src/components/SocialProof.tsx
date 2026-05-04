import { motion } from "motion/react";
import { Star, Instagram } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alex J.",
    handle: "@alexlifts",
    text: "The Seamless series is unreal. Best compression I've ever felt while squatting. Hands down.",
    product: "Apex Seamless Leggings",
    rating: 5,
    img: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Marcus T.",
    handle: "@marcus_trains",
    text: "Stringers usually fit weird on me, but the Core Performance cut is perfect. Keeps me cool during heavy sessions.",
    product: "Core Performance Stringer",
    rating: 5,
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sarah L.",
    handle: "@sarah.fit",
    text: "Material is squat-proof and sweat-wicking. Exactly what I need for HIIT. Will buy more colors.",
    product: "Surge 2-in-1 Shorts",
    rating: 4,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop"
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 text-black overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-4">
            Worn By <span className="text-neutral-500">The Best</span>
          </h2>
          <p className="text-neutral-600 font-medium text-lg">
            Join thousands of athletes performing at their peak. Tag @ApexAthletics to be featured.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              <p className="text-lg font-medium mb-6 flex-grow">"{review.text}"</p>
              
              <div className="flex items-center space-x-4 border-t border-gray-100 pt-4 mt-auto">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-sm">{review.name}</h4>
                  <p className="text-neutral-500 text-xs font-medium">{review.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UGC Simulation */}
        <div className="mt-10">
          <div className="flex items-center justify-center space-x-2 border-2 border-black w-fit mx-auto px-6 py-3 rounded-full mb-8">
            <Instagram className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-sm">#ApexAthletics</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:px-20">
            {/* Simulate IG squares */}
            {[
              "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
            ].map((img, idx) => (
              <motion.div
                key={idx}
                className="aspect-square bg-gray-200 relative group overflow-hidden cursor-pointer"
                whileHover={{ scale: 0.98 }}
              >
                <img src={img} alt="UGC" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
