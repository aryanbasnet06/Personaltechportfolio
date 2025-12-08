export function CommunityPage() {
  const activities = [
    {
      title: "Youth Mentorship Program",
      organization: "Local Community Center",
      description: "Mentoring high school students in technology and career development, providing guidance and support for their future endeavors.",
      year: "2023 - Present",
    },
    {
      title: "Tech Education Initiative",
      organization: "Non-Profit Organization",
      description: "Teaching coding workshops to underrepresented communities, helping bridge the digital divide and create opportunities.",
      year: "2022 - Present",
    },
    {
      title: "Environmental Awareness Campaign",
      organization: "Green Community Alliance",
      description: "Organizing community clean-up drives and awareness sessions on sustainable living practices.",
      year: "2021 - 2023",
    },
  ];

  return (
    <section className="py-32 px-6 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl text-neutral-900 mb-8">
            Community Involvement
          </h2>
          <div className="w-16 h-px bg-emerald-800"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1761666508658-381c63e409fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXIlMjBncm91cHxlbnwxfHx8fDE3NjUyMDAwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community involvement"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div key={index} className="border-l-2 border-neutral-200 pl-6">
                <p className="text-neutral-500 text-sm mb-2">{activity.year}</p>
                <h3 className="text-xl text-neutral-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-emerald-800 text-sm mb-3">
                  {activity.organization}
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
