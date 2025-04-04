
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="section-header">
            <h2 className="text-2xl font-bold px-4 flex items-center">
              <User size={20} className="mr-2" /> PROFILE SUMMARY
            </h2>
          </div>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg leading-relaxed">
              Dedicated and enthusiastic Front-End Web Developer with a strong
              foundation in HTML, CSS, JavaScript, React, and Python. Recently
              graduated with a Bachelor's degree in Computer Science and
              Engineering, possessing practical experience through personal
              projects including web applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
