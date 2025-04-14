
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/constants/personal";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 animate-fade-in">
            Hi, I'm <span className={`text-${PERSONAL_INFO.primaryColor}`}>{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            A {PERSONAL_INFO.role} specializing in {PERSONAL_INFO.specialization}
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
