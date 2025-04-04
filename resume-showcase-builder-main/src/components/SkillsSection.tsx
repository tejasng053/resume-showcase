
import { Card, CardContent } from "@/components/ui/card";
import { Code, Languages } from "lucide-react";

const TechSkill = ({ name }: { name: string }) => (
  <div className="bg-secondary rounded-md px-3 py-1.5 text-sm font-medium">
    {name}
  </div>
);

const SoftSkill = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-2 flex items-start">
    <span className="mr-2 mt-1.5">•</span>
    <span>{children}</span>
  </li>
);

const LanguageSkill = ({ language, level }: { language: string; level: string }) => (
  <li className="mb-2">
    {language}: <span className="text-muted-foreground">{level}</span>
  </li>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="section-header">
            <h2 className="text-2xl font-bold px-4 flex items-center">
              <Code size={20} className="mr-2" /> SKILLS
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <TechSkill name="HTML" />
                <TechSkill name="CSS" />
                <TechSkill name="JavaScript" />
                <TechSkill name="React" />
                <TechSkill name="Python" />
                <TechSkill name="Java" />
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Soft Skills</h3>
              <ul className="space-y-1">
                <SoftSkill>Excellent problem-solving skills and attention to detail</SoftSkill>
                <SoftSkill>Effective communication and teamwork abilities</SoftSkill>
                <SoftSkill>Rapid learner with a passion for new technologies</SoftSkill>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Languages size={18} className="mr-2" /> Languages
              </h3>
              <ul className="space-y-1">
                <LanguageSkill language="English" level="Fluent" />
                <LanguageSkill language="Hindi" level="Fluent" />
                <LanguageSkill language="Tamil" level="Basics" />
                <LanguageSkill language="Kannada" level="Intermediate" />
              </ul>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Certificates</h3>
              <div className="p-4 bg-secondary/50 rounded-md">
                <p className="font-medium">HTML, CSS and Java Certificate</p>
                <p className="text-sm text-muted-foreground">from Mosh</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
