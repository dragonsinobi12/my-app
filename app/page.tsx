import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Ronnakit</h2>
          <div className="flex gap-8">
            <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ronnakit</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Computer Information Systems Student at Khon Kaen University
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition">
                Get in Touch
              </a>
              <a href="#about" className="px-8 py-3 border border-slate-500 hover:border-slate-300 text-white rounded-lg font-semibold transition">
                Learn More
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-50"></div>
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                <Image
                  src="/profile.png"
                  width={320}
                  height={320}
                  alt="Picture of Ronnakit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700">
        <h2 className="text-4xl font-bold text-white mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Name</h3>
              <p className="text-slate-300">Ronnakit Sakeaw</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Student ID</h3>
              <p className="text-slate-300">663450351-5</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Major</h3>
              <p className="text-slate-300">Computer Information Systems (CIS)</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">University</h3>
              <p className="text-slate-300">Khon Kaen University, Nong Khai Campus</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Zodiac Sign</h3>
              <p className="text-slate-300 text-lg">🎉 Discover my zodiac personality</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Follow Me</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <a href="https://instagram.com/pungpon_rnk" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition font-semibold">
                  @pungpon_rnk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Feel free to reach out! Connect with me on Instagram or just say hello.
          </p>
          <a href="https://instagram.com/pungpon_rnk" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-bold text-lg transition transform hover:scale-105">
            Let's Connect
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-400">
          <p>© 2026 Ronnakit Sakeaw. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
