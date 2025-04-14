import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Biochemical Engineering & Biotechnology",
      school: "Indian Institute of Technology Delhi",
      year: "2018-2022",
      description: "CGPA: 8.30",
    },
    {
      degree: "Class XII, CBSE",
      school: "Ramakrishna Vidya Mandir, Gwalior, MP",
      year: "2018",
      description: "Grade: 93%",
    },
    {
      degree: "Class X, CBSE",
      school: "Gwalior Glory High School",
      year: "2016",
      description: "CGPA: 10.0",
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
