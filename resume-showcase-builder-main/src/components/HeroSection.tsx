
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center pt-16 bg-gradient-to-b from-secondary/50 to-background"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="section-header">
            <span className="text-lg text-muted-foreground">Welcome</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-primary">
          TEJAS NG
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          Front-end web-developer
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            View Portfolio
          </Button>
          <Button variant="outline">
            <Download size={16} className="mr-2" /> Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
