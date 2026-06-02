import { Zap, Snowflake, Server, Shield, Network, Flame, Wrench, Building2, Factory, Hospital } from "lucide-react";

const sectors = [
  { icon: Zap, label: "Electrical" },
  { icon: Snowflake, label: "HVAC" },
  { icon: Server, label: "Data Centers" },
  { icon: Shield, label: "UPS Systems" },
  { icon: Network, label: "Low Current" },
  { icon: Flame, label: "Firefighting" },
  { icon: Wrench, label: "Mechanical" },
  { icon: Building2, label: "Commercial" },
  { icon: Factory, label: "Industrial" },
  { icon: Hospital, label: "Healthcare" },
];

export const SectorsSection = () => {
  const items = [...sectors, ...sectors];

  return (
    <section id="sectors" className="px-4 md:px-8 py-8">
      <div className="container mx-auto max-w-7xl">
        <div className="relative rounded-2xl bg-foreground py-5 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-foreground to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-foreground to-transparent z-10" />
          <div className="flex animate-scroll-left gap-3 w-max">
            {items.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-background/15 text-background whitespace-nowrap"
              >
                <s.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-heading font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
