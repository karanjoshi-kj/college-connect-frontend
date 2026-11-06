import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Left Section: Logo + Nav Links */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🎓
              </div>
              <span className="text-xl font-bold text-indigo-900 tracking-tight">
                CampusConnect
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-1 text-sm font-medium text-gray-600">
              <a href="#home" className="flex items-center space-x-1 text-indigo-600 font-semibold bg-indigo-50 px-3 py-1.5 rounded-lg">
                <span>🏠</span> <span>Home</span>
              </a>
              <a href="#events" className="flex items-center space-x-1 hover:text-indigo-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition">
                <span>📅</span> <span>Events</span>
              </a>
              <a href="#feed" className="flex items-center space-x-1 hover:text-indigo-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition">
                <span>📚</span> <span>Campus Feed</span>
              </a>
              <a href="#documents" className="flex items-center space-x-1 hover:text-indigo-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition">
                <span>📑</span> <span>Documents</span>
              </a>
              <a href="#menu" className="flex items-center space-x-1 hover:text-indigo-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition">
                <span>🍽️</span> <span>Menu Generator</span>
              </a>
              <a href="#ai" className="flex items-center space-x-1 hover:text-indigo-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition">
                <span>✨</span> <span>AI Assistant</span>
              </a>
            </div>
          </div>

          {/* Right Action Button */}
          <div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-5 py-2 rounded-xl transition shadow-sm flex items-center space-x-2">
              <span>👤</span>
              <span>Login</span>
            </button>
          </div>

        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">
        
        {/* Hero Section Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border border-indigo-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
              <span>✨ College Management & Campus Awareness</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Your Campus. <span className="text-indigo-600">Connected.</span>
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg">
              Discover events, share updates, access study resources, and get answers from your campus AI.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition flex items-center space-x-2">
                <span>Explore Campus</span>
                <span>→</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-200 font-semibold text-sm px-6 py-3 rounded-xl transition flex items-center space-x-2">
                <span>✨ Ask Campus AI</span>
              </button>
            </div>
          </div>

          {/* Campus Image Card */}
          <div className="mt-8 md:mt-0 w-full md:w-5/12">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" 
                alt="Birla Institute Campus" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-medium">
                BIAS Bhimtal Campus
              </div>
            </div>
          </div>
        </section>

        {/* Feature Shortcut Cards */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer group">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-xl mb-3">📅</div>
            <h3 className="font-bold text-gray-900 text-sm">Upcoming Events</h3>
            <p className="text-xs text-gray-500 mt-1">Tech Fest, Hackathon, Cultural Night.</p>
            <div className="text-right text-xs text-purple-600 font-bold mt-2 group-hover:translate-x-1 transition-transform">→</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer group">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-3">👥</div>
            <h3 className="font-bold text-gray-900 text-sm">Campus Feed</h3>
            <p className="text-xs text-gray-500 mt-1">Stay updated with latest announcements.</p>
            <div className="text-right text-xs text-blue-600 font-bold mt-2 group-hover:translate-x-1 transition-transform">→</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer group">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl mb-3">📖</div>
            <h3 className="font-bold text-gray-900 text-sm">Study Documents</h3>
            <p className="text-xs text-gray-500 mt-1">Access notes, syllabus and resources.</p>
            <div className="text-right text-xs text-emerald-600 font-bold mt-2 group-hover:translate-x-1 transition-transform">→</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer group">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-xl mb-3">🍽️</div>
            <h3 className="font-bold text-gray-900 text-sm">Menu Generator</h3>
            <p className="text-xs text-gray-500 mt-1">Generate weekly mess menu easily.</p>
            <div className="text-right text-xs text-amber-600 font-bold mt-2 group-hover:translate-x-1 transition-transform">→</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer group col-span-2 md:col-span-1">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl mb-3">✨</div>
            <h3 className="font-bold text-gray-900 text-sm">AI Assistant</h3>
            <p className="text-xs text-gray-500 mt-1">Ask questions from college docs.</p>
            <div className="text-right text-xs text-indigo-600 font-bold mt-2 group-hover:translate-x-1 transition-transform">→</div>
          </div>
        </section>

        {/* Content Section: Events & Announcements */}
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Left Column: Upcoming Events (8 Columns) */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <span>📅</span> <span>Upcoming Events</span>
              </h2>
              <a href="#events" className="text-xs font-semibold text-indigo-600 hover:underline">View All →</a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* Event 1 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="relative h-32 bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80" alt="Tech Fest" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">Tech</span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-gray-900 text-sm">Tech Fest 2026</h3>
                  <div className="text-[11px] text-gray-500 space-y-1">
                    <p>🗓️ Nov 15 - Nov 17</p>
                    <p>📍 BIAS Campus Auditorium</p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">A three-day celebration of tech, innovation and workshops.</p>
                  <button className="w-full bg-indigo-50 text-indigo-600 text-xs font-semibold py-1.5 rounded-lg hover:bg-indigo-100 transition mt-2">
                    Register Now →
                  </button>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="relative h-32 bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Hackathon" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">Hackathon</span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-gray-900 text-sm">Campus Hackathon</h3>
                  <div className="text-[11px] text-gray-500 space-y-1">
                    <p>🗓️ Nov 22 - Nov 23</p>
                    <p>📍 Innovation Lab, Block B</p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">Build, collaborate and solve real-world problems in 24 hours.</p>
                  <button className="w-full bg-indigo-50 text-indigo-600 text-xs font-semibold py-1.5 rounded-lg hover:bg-indigo-100 transition mt-2">
                    Register Now →
                  </button>
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="relative h-32 bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80" alt="Cultural Night" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-pink-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">Cultural</span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-gray-900 text-sm">Cultural Night</h3>
                  <div className="text-[11px] text-gray-500 space-y-1">
                    <p>🗓️ Dec 5</p>
                    <p>📍 Open Air Theatre</p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">A vibrant evening of music, dance, and campus talent.</p>
                  <button className="w-full bg-indigo-50 text-indigo-600 text-xs font-semibold py-1.5 rounded-lg hover:bg-indigo-100 transition mt-2">
                    Register Now →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Announcements (4 Columns) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <span>📢</span> <span>Announcements</span>
              </h2>
              <a href="#feed" className="text-xs font-semibold text-indigo-600 hover:underline">View All →</a>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-3">
              {/* Announcement Item 1 */}
              <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  AO
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-gray-800">Mid-Sem Exam Schedule Released</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Academic Office • 2 hours ago</p>
                </div>
                <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">Academic</span>
              </div>

              {/* Announcement Item 2 */}
              <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  CC
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-gray-800">Tech Fest Registrations are Open!</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Core Committee • 5 hours ago</p>
                </div>
                <span className="text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full font-medium">Event</span>
              </div>

              {/* Announcement Item 3 */}
              <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  LI
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-gray-800">Library Timings Updated</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Library • 1 day ago</p>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-medium">Update</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Landing;