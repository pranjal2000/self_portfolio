import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Nference Labs Pvt. Ltd.",
      period: "August 2022 - Present",
      location: "Bengaluru",
      description: [
        "Developed & maintained middleware service between client SDK and ClickHouse DB",
        "Built high-throughput ingestion pipeline for cloud storage to ClickHouse",
        "Designed Golang-based microservice for image metadata with MongoDB",
        "Optimized Data Generation Pipeline reducing processing time by 87%",
        "Led system performance improvements using distributed tracing tools",
      ],
    },
    {
      role: "Backend Developer Intern",
      company: "QuickSell",
      period: "January 2022 - May 2022",
      location: "Mumbai",
      description: [
        "Implemented Sales Dashboard features with payment gateway integration",
        "Developed Sales Catalogue Search Tool for customer filtering",
        "Integrated Amazon SQS for asynchronous bulk updates",
      ],
    },
    {
      role: "Software Development Engineer Intern",
      company: "Probo Media Technologies Pvt. Ltd.",
      period: "June 2021 - July 2021",
      location: "Gurugram",
      description: [
        "Developed Internal Dashboard for content & user management",
        "Implemented features during 5X growth in active users",
        "Created bulk upload module for customized notifications",
      ],
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
                    <p className="text-gray-500 text-sm">{exp.period} • {exp.location}</p>
                    <ul className="text-gray-600 mt-2 list-disc list-inside space-y-1">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
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
