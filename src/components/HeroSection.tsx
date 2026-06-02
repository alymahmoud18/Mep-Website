import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";

const avatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=33",
  "https://i.pravatar.cc/64?img=47",
  "https://i.pravatar.cc/64?img=8",
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "50+", label: "Expert Engineers" },
];

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="text-xs tracking-widest uppercase text-muted-foreground mb-8 animate-fade-in-up">
          Home / MEP Solutions
        </div>

        {/* Headline row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight text-foreground">
            Precision in every<br />
            <span className="gradient-text">system</span> we build
          </h1>

          <div className="lg:pl-8 lg:border-l border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-background object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Trusted by 200+ clients</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              MEP is a leading mechanical, electrical & engineering firm committed to excellence —
              delivering integrated HVAC, data center, UPS, low-current and firefighting solutions
              built to last and trusted by industry leaders.
            </p>
          </div>
        </div>

        {/* Dual image cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden group">
            <img
              src={heroBg}
              alt="MEP engineering project — modern facility"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          </div>
          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden group">
            <img
              src={aboutBg}
              alt="MEP engineering data center infrastructure"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          </div>
        </div>

        {/* Caption + paragraph */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 items-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="text-xs tracking-widest uppercase text-muted-foreground">
            Only a Day*
          </div>
          <p className="lg:col-span-2 text-center lg:text-left text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
            MEP is dedicated to superior mechanical, electrical and engineering solutions.
            With decades of experience, we've become a leader in integrated, sustainable
            infrastructure systems.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link to="/#contact">
            <Button size="lg" className="gap-2 font-heading rounded-full px-7">
              Request a Quote
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="lg" className="font-heading rounded-full px-7 border-border">
              Our Services
            </Button>
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-border pt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
