
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="section-header">
            <h2 className="text-2xl font-bold px-4 flex items-center">
              <GraduationCap size={20} className="mr-2" /> EDUCATION
            </h2>
          </div>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-bold">RV INSTITUTE OF TECHNOLOGY AND MANAGEMENT</h3>
              <span className="text-muted-foreground">2023-2027</span>
            </div>
            
            <div className="mb-6">
              <p>Bachelor's in Computer Science and Engineering</p>
            </div>
            
            <div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Focused on core computer science subjects and software engineering principles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Developed strong technical skills and practical problem-solving abilities</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
