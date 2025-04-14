
import { Code2, Terminal, Wrench } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "C++", "Golang", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      category: "Technologies", 
      items: ["NodeJS", "Apache Spark", "Docker", "Kubernetes", "MongoDB", "ClickHouse"],
    },
    {
      category: "Developer Tools",
      items: ["VS Code", "Grafana", "Argo CD", "GCP", "AWS", "Git"],
    },
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-6">
                {index === 0 && <Code2 className="h-5 w-5 text-purple-600" />}
                {index === 1 && <Terminal className="h-5 w-5 text-blue-600" />}
                {index === 2 && <Wrench className="h-5 w-5 text-teal-600" />}
                <h3 className="font-semibold text-xl text-gray-900">
                  {skillSet.category}
                </h3>
              </div>
              <div className="space-y-4">
                {skillSet.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">{skill}</span>
                    </div>
                    <Progress value={[90, 85, 80][idx % 3]} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
