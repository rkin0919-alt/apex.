import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

const collections = [
  {
    id: 1,
    title: "Seamless Series",
    category: "Womens",
    image: "https://images.unsplash.com/photo-1607962837359-5f7e1fa44cbd?q=80&w=1470&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Heavy Lifting",
    category: "Mens",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    id: 3,
    title: "Run Division",
    category: "Unisex",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1470&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    id: 4,
    title: "Recovery Studio",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 md:py-32 bg-white" id="collections">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">
              Shop by <span className="text-neutral-400">Category</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors mt-4 md:mt-0">
            View All Categories <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[280px]">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative group overflow-hidden rounded-lg cursor-pointer",
                item.colSpan
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-accent-500 text-xs font-bold uppercase tracking-widest mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
                <div className="mt-4 overflow-hidden">
                  <div className="flex items-center text-white text-sm font-bold uppercase tracking-widest transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest border border-black py-4 rounded hover:bg-black hover:text-white transition-colors">
          View All Categories <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
