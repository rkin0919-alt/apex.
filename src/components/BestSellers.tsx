import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Apex Seamless Leggings",
    category: "Womens",
    price: "$55",
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1506629082955-520b784f1b4a?q=80&w=1470&auto=format&fit=crop",
    colors: ["bg-black", "bg-neutral-500", "bg-rose-900"]
  },
  {
    id: 2,
    name: "Core Performance Stringer",
    category: "Mens",
    price: "$25",
    rating: 4.9,
    reviews: 856,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    colors: ["bg-white", "bg-black"]
  },
  {
    id: 3,
    name: "Elevate Sports Bra",
    category: "Womens",
    price: "$35",
    rating: 4.7,
    reviews: 932,
    image: "https://images.unsplash.com/photo-1606902263435-081691ed12ef?q=80&w=1470&auto=format&fit=crop",
    colors: ["bg-black", "bg-emerald-800", "bg-blue-900"]
  },
  {
    id: 4,
    name: "Surge 2-in-1 Shorts",
    category: "Mens",
    price: "$45",
    rating: 4.6,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1415&auto=format&fit=crop",
    colors: ["bg-black", "bg-neutral-800"]
  },
  {
    id: 5,
    name: "Adapt Oversized Tee",
    category: "Unisex",
    price: "$35",
    rating: 4.9,
    reviews: 2105,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop",
    colors: ["bg-white", "bg-black", "bg-stone-300"]
  }
];

export default function BestSellers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-32 bg-neutral-900 text-white overflow-hidden" id="best-sellers">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 lg:mb-16">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">
              Best <span className="text-accent-500">Sellers</span>
            </h2>
            <p className="text-neutral-400 mt-2 text-sm md:text-base">Gear favored by our community of athletes.</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-neutral-700 hover:bg-white hover:text-black hover:border-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-neutral-700 hover:bg-white hover:text-black hover:border-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex space-x-4 md:space-x-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_28%] relative group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-800 rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Quick Add overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-3 rounded flex items-center justify-center hover:bg-accent-500 transition-colors">
                      <Plus className="w-4 h-4 mr-2" /> Quick Add
                    </button>
                  </motion.div>
                </div>

                {/* Info Container */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-bold uppercase tracking-widest">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1 text-xs">
                      <Star className="w-3 h-3 fill-accent-500 text-accent-500" />
                      <span>{product.rating}</span>
                      <span className="text-neutral-500">({product.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold uppercase tracking-tight text-lg">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{product.price}</span>
                    <div className="flex space-x-1">
                      {product.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className={`w-3 h-3 rounded-full border border-neutral-700 ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
