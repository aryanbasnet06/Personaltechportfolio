export function ResearchPage() {
  const papers = [
    {
      title: "Machine Learning Applications in Sustainable Technology",
      journal: "Journal of Computer Science",
      abstract: "This research explores the implementation of machine learning algorithms to optimize renewable energy systems and reduce carbon footprint in urban environments.",
      year: "2024",
      status: "Published",
    },
    {
      title: "Human-Computer Interaction in Educational Platforms",
      journal: "International Conference on HCI",
      abstract: "An investigation into user experience design principles that enhance learning outcomes in digital educational environments.",
      year: "2023",
      status: "Published",
    },
    {
      title: "Data Privacy in Modern Web Applications",
      journal: "Cybersecurity Review",
      abstract: "Analyzing current approaches to data protection and proposing new frameworks for privacy-preserving web technologies.",
      year: "2023",
      status: "Under Review",
    },
  ];

  return (
    <section className="py-32 px-6 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl text-neutral-900 mb-8">
            Research Paper
          </h2>
          <div className="w-16 h-px bg-emerald-800"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1764096534686-68091ce5ab45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGFjYWRlbWljJTIwcGFwZXJ8ZW58MXx8fHwxNzY1MjAwMDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Research"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-2 space-y-12">
            {papers.map((paper, index) => (
              <div key={index} className="pb-12 border-b border-neutral-200 last:border-b-0">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-neutral-500 text-sm mb-2">{paper.year}</p>
                    <h3 className="text-2xl text-neutral-900 mb-2">
                      {paper.title}
                    </h3>
                    <p className="text-emerald-800 text-sm mb-1">
                      {paper.journal}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs border border-emerald-200">
                    {paper.status}
                  </span>
                </div>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {paper.abstract}
                </p>
                <button className="text-neutral-900 text-sm border-b border-neutral-900 pb-1 hover:text-emerald-800 hover:border-emerald-800 transition-colors">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
