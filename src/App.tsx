/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import BestSellers from "./components/BestSellers";
import BrandStory from "./components/BrandStory";
import SocialProof from "./components/SocialProof";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ExitIntentPopup from "./components/ExitIntentPopup";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <BestSellers />
        <BrandStory />
        <SocialProof />
        <Newsletter />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
