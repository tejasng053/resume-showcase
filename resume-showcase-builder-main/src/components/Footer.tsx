
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Tejas NG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
