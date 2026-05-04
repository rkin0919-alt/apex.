import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="text-3xl font-heading font-bold tracking-tighter uppercase mb-6">
              Apex<span className="text-accent-500">.</span>
            </div>
            <p className="text-neutral-400 font-medium mb-8 max-w-sm">
              Engineered for those who refuse to settle. Apex Athletics is a global fitness community built on discipline and progress.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Mens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Womens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest mb-6">Help</h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Make a Return</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest mb-6">Pages</h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Discount</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-medium text-neutral-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Apex Athletics Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
