import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects Done" },
  { value: "98%", label: "Client Retention" },
  { value: "ISO", label: "Certified Quality System" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-8">
      <div className="container mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-6 text-sm text-foreground/80">
                <ArrowRight className="w-4 h-4" />
                Engineering Excellence
              </div>
              <h2 className="font-heading font-black tracking-tight text-foreground text-6xl md:text-7xl lg:text-[7rem] leading-[0.95] mb-8">
                ABOUT US
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
                MEP firm dedicated to superior mechanical, electrical and
                engineering solutions. With decades of experience, we've become
                a leader in integrated, sustainable infrastructure.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-foreground/30 hover:border-foreground text-foreground font-heading font-semibold px-6 py-3 rounded-full transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-between gap-8">
              <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-foreground">
                We engineer the{" "}
                <span className="text-primary">Systems</span> that Keep{" "}
                <span className="text-primary">Critical facilities</span>{" "}
                running safely, efficiently and without compromise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                MEP Engineering Solutions is a leading provider of comprehensive
                mechanical, electrical, and plumbing solutions. We specialize in
                delivering high-quality, integrated solutions across HVAC, data
                centers, UPS systems, low current, firefighting, and more.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-primary pl-4">
                    <div className="font-heading font-bold text-primary text-3xl md:text-5xl leading-none mb-2">
                      {s.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
