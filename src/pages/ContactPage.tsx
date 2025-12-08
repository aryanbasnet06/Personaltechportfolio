import { Mail, MapPin, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <section className="py-32 px-6 pt-32">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-4xl text-neutral-900 mb-8">
              Let's Connect
            </h2>
            <div className="w-16 h-px bg-emerald-800"></div>
          </div>

          <div className="md:col-span-3">
            <p className="text-neutral-700 leading-relaxed mb-12">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-neutral-500 text-sm mb-2">Email</p>
                <a
                  href="mailto:aryan@example.com"
                  className="text-neutral-900 hover:text-emerald-800 transition-colors"
                >
                  aryan@example.com
                </a>
              </div>

              <div>
                <p className="text-neutral-500 text-sm mb-2">Social</p>
                <div className="flex gap-6">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 hover:text-emerald-800 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 hover:text-emerald-800 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 hover:text-emerald-800 transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              <div>
                <p className="text-neutral-500 text-sm mb-2">Location</p>
                <p className="text-neutral-700">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-neutral-200 text-center">
          <p className="text-neutral-500 text-sm">&copy; 2025 Aryan Basnet. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}
