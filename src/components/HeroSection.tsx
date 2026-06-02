import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.png.asset.json";

const avatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=33",
  "https://i.pravatar.cc/64?img=47",
  "https://i.pravatar.cc/64?img=8",
];

export const HeroSection = () => {
  return (
    <section className="px-4 md:px-6 pt-24 pb-12">
      <div className="container mx-auto max-w-[1400px]">
        <div
          className="relative rounded-3xl overflow-hidden min-h-[88vh] flex flex-col justify-between p-8 md:p-14"
          style={{
            backgroundImage: `url(${heroBanner.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full flex-1 justify-between gap-12">
            {/* Headline */}
            <div className="pt-12 md:pt-20 animate-fade-in-up">
              <h1 className="font-heading font-bold text-white leading-[1.02] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Integrated MEP<br />
                <span className="text-primary">Engineering Solutions</span><br />
                for Critical Facilities
              </h1>
            </div>

            {/* Bottom block: trusted + description + CTAs */}
            <div className="max-w-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-white/90 object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/90">Trusted by 200+ clients</span>
              </div>

              <div className="border-l-2 border-white/30 pl-4 mb-6">
                <p className="text-white/85 text-sm md:text-base leading-relaxed">
                  We deliver high-quality, integrated MEP solutions across HVAC,
                  data centers, UPS systems, low current, firefighting, and more.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-6 py-3 rounded-full transition-all"
                >
                  Request a Quote
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-white/60 text-white hover:bg-white hover:text-black font-heading font-semibold px-6 py-3 rounded-full transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
