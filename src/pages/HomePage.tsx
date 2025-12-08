export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-800 transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUxMTI1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Profile"
                  className="relative w-80 h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl text-neutral-900 mb-6 tracking-tight">
            Aryan Basnet
          </h1>
          
          <p className="text-neutral-600 mb-12 tracking-widest uppercase text-sm">
            Developer · Designer · Creator
          </p>

          <div className="max-w-2xl mx-auto">
            <p className="text-neutral-700 italic text-lg leading-relaxed">
              Building digital experiences that blend functionality with aesthetics. 
              Passionate about clean code and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUxMTI1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About me"
                className="w-full max-w-md mx-auto aspect-square object-cover"
              />
            </div>

            <div>
              <h2 className="text-5xl text-amber-900 mb-8 tracking-tight">
                ABOUT ME
              </h2>
              
              <p className="text-neutral-700 leading-relaxed mb-6">
                Hi! I'm Aryan Basnet, a passionate developer and creative technologist. From a young age, 
                I've embraced my passion for technology and innovation—whether through coding, design, 
                or problem-solving. This love for creating digital solutions has remained a constant 
                in my life, while my interests have expanded to include web development, AI, and user 
                experience design.
              </p>
              
              <p className="text-neutral-700 leading-relaxed mb-8">
                I am particularly passionate about exploring the intersection of these fields, focusing 
                on creating opportunities and solutions that make a difference. At the heart of my work 
                is a commitment to building experiences that empower people and shape the future of technology.
              </p>

              <button className="px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
                Check out my resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
