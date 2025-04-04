
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Mail,
  Menu,
  X 
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Button 
          variant="ghost" 
          className="font-bold text-lg px-0 hover:bg-transparent hover:text-primary"
          onClick={() => scrollToSection('hero')}
        >
          Tejas NG
        </Button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('hero')}>
            <Home size={16} className="mr-1" /> Home
          </Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('about')}>
            <User size={16} className="mr-1" /> About
          </Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('skills')}>
            <Code size={16} className="mr-1" /> Skills
          </Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('experience')}>
            <Briefcase size={16} className="mr-1" /> Experience
          </Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('education')}>
            <GraduationCap size={16} className="mr-1" /> Education
          </Button>
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('contact')}>
            <Mail size={16} className="mr-1" /> Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md p-4 flex flex-col space-y-2">
          <Button variant="ghost" onClick={() => scrollToSection('hero')}>
            <Home size={16} className="mr-2" /> Home
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('about')}>
            <User size={16} className="mr-2" /> About
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('skills')}>
            <Code size={16} className="mr-2" /> Skills
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('experience')}>
            <Briefcase size={16} className="mr-2" /> Experience
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('education')}>
            <GraduationCap size={16} className="mr-2" /> Education
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('contact')}>
            <Mail size={16} className="mr-2" /> Contact
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
