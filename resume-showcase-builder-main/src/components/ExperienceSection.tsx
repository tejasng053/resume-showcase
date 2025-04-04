
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ProjectProps {
  title: string;
  points: string[];
}

const Project = ({ title, points }: ProjectProps) => (
  <div className="mb-8">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2 mt-1">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="section-header">
            <h2 className="text-2xl font-bold px-4 flex items-center">
              <Briefcase size={20} className="mr-2" /> WORK EXPERIENCE
            </h2>
          </div>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Projects</h3>
            
            <Project 
              title="Amazon Clone"
              points={[
                "Developed a functional clone of Amazon using HTML, CSS, and JavaScript, implementing features such as a product catalog and a shopping cart.",
                "Leveraged React to create a dynamic front-end that enhanced user interaction and overall experience.",
                "Achieved seamless responsiveness across various devices and browsers."
              ]}
            />
            
            <Project 
              title="About Me Website"
              points={[
                "Designed and developed a personal website that showcases individual skills and interests utilizing HTML, CSS, and JavaScript.",
                "Focused on user interface design to ensure aesthetic appeal and easy navigation.",
                "Implemented best practices for web accessibility."
              ]}
            />
            
            <Project 
              title="Web Server Sales Website"
              points={[
                "Created a fully functional website to sell web server services, demonstrating skills in front-end development and basic back-end integration using Python.",
                "Ensured the website met user needs through extensive testing and user feedback for improved functionality."
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;
