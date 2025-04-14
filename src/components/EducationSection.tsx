
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2020-2022",
      description: "Specialized in Artificial Intelligence and Machine Learning",
    },
    {
      degree: "Bachelor of Engineering",
      school: "MIT",
      year: "2016-2020",
      description: "Major in Computer Science and Engineering",
    },
  ];

  return (
    <section className="py-20 bg-white" id="education">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="transform transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-600">{edu.school}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                    <p className="text-gray-600 mt-2">{edu.description}</p>
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

export default EducationSection;
