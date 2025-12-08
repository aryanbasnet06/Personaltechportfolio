export function WorkPage() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovation Labs",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Leading development of cloud-based solutions and mentoring junior developers. Architecting scalable microservices and implementing best practices.",
      technologies: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc.",
      location: "New York, NY",
      period: "2021 - 2023",
      description: "Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["Next.js", "Python", "PostgreSQL", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency Co.",
      location: "Remote",
      period: "2020 - 2021",
      description: "Built responsive web applications with focus on user experience and performance optimization. Worked closely with designers to implement pixel-perfect interfaces.",
      technologies: ["React", "Tailwind CSS", "GraphQL", "Figma"],
    },
  ];

  return (
    <section className="py-32 px-6 pt-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl text-neutral-900 mb-8">
            Work Experiences
          </h2>
          <div className="w-16 h-px bg-emerald-800"></div>
        </div>

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <div key={index} className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <p className="text-neutral-500 text-sm">{experience.period}</p>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-2xl text-neutral-900 mb-2">
                  {experience.title}
                </h3>
                <p className="text-emerald-800 mb-1">
                  {experience.company}
                </p>
                <p className="text-neutral-500 text-sm mb-6">
                  {experience.location}
                </p>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white border border-neutral-200 text-neutral-700 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
