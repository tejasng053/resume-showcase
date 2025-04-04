
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="section-header">
            <h2 className="text-2xl font-bold px-4 flex items-center">
              <Mail size={20} className="mr-2" /> CONTACT
            </h2>
          </div>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50">
                <Phone className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p>+91 7022834480</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50">
                <Mail className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p>tejasng053@gmail.com</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50">
                <MapPin className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p>Jp nagar 8th phase, Bangluru</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
