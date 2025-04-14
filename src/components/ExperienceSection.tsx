
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Google",
      period: "2022-Present",
      description: "Leading frontend development team for Google Cloud Platform",
    },
    {
      role: "Software Engineer",
      company: "Meta",
      period: "2020-2022",
      description: "Developed and maintained key features for Facebook Marketplace",
    },
    {
      role: "Software Developer Intern",
      company: "Microsoft",
      period: "2019",
      description: "Worked on Azure cloud services and infrastructure",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="transform transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.period}</p>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
