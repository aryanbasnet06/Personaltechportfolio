export function ArtCulturePage() {
  const artWorks = [
    {
      title: "Contemporary Art Exhibition",
      event: "City Museum of Modern Art",
      description: "Showcased mixed media artwork exploring themes of technology and human connection in the digital age.",
      year: "2024",
    },
    {
      title: "Cultural Heritage Project",
      event: "International Arts Festival",
      description: "Created visual art pieces celebrating traditional craftsmanship and cultural narratives through modern mediums.",
      year: "2023",
    },
    {
      title: "Community Mural Initiative",
      event: "Downtown Arts District",
      description: "Collaborated on large-scale public art installation promoting diversity and community unity.",
      year: "2023",
    },
  ];

  return (
    <section className="py-32 px-6 pt-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl text-neutral-900 mb-8">
            Art & Culture
          </h2>
          <div className="w-16 h-px bg-emerald-800"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Art has been a powerful medium for self-expression and cultural exploration throughout 
              my journey. Through various exhibitions and collaborative projects, I've explored diverse 
              artistic forms that bridge traditional techniques with contemporary themes.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Beyond personal creation, I believe in art's capacity to foster dialogue, preserve cultural 
              heritage, and inspire community engagement. Each piece tells a story that connects past, 
              present, and future.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1719935115623-4857df23f3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NjUxMjg0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Art exhibition"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {artWorks.map((artwork, index) => (
            <div key={index} className="bg-white p-8 border border-neutral-200">
              <p className="text-neutral-500 text-sm mb-4">{artwork.year}</p>
              <h3 className="text-xl text-neutral-900 mb-2">
                {artwork.title}
              </h3>
              <p className="text-emerald-800 text-sm mb-4">
                {artwork.event}
              </p>
              <p className="text-neutral-600 leading-relaxed">
                {artwork.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
