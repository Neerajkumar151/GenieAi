import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUS = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#c2e9fb] pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto bg-[#FDFDFE] backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-8 md:p-16 text-gray-600">
          
         <div className="text-center mb-12">
          <h1 className="text-slate-700 text-[42px] font-semibold">
            About <span className="text-purple-500">GenieAi</span> ✨
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
            Unlocking Your Creative Potential with AI-powered productivity tools.
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-[#FDFDFE] shadow-lg border border-gray-100 rounded-2xl p-8 mb-12 text-gray-600">
          <p className="text-lg md:text-xl text-center leading-relaxed max-w-3xl mx-auto">
            Welcome to <span className="text-purple-500 font-semibold">GenieAi</span>, your intelligent partner in
            creation and productivity. We dissolve creative blocks, automate tedious tasks, and give you back your
            most valuable asset: <strong>time</strong>.
          </p>
        </div>

        {/* Mission */}
        <div className="p-8 mb-10 bg-[#FDFDFE] shadow-lg border border-gray-100 rounded-2xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500">🚀 Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To democratize the power of AI by building intuitive, powerful tools that help students, creators, and
            professionals achieve more with less effort.
          </p>
        </div>

        {/* Core Values */}
        <div className="p-8 mb-10 bg-[#FDFDFE] shadow-lg border border-gray-100 rounded-2xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500">💡 Our Core Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Innovation:</strong> Cutting-edge AI solving real-world problems.</li>
            <li><strong>User-Centricity:</strong> Experiences that are simple, useful, and delightful.</li>
            <li><strong>Performance:</strong> Fast, reliable, and secure solutions.</li>
            <li><strong>Transparency:</strong> Honest communication & trust-building.</li>
          </ul>
        </div>

        {/* Features */}
        <div className="p-8 mb-10 bg-[#FDFDFE] shadow-lg border border-gray-100 rounded-2xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-purple-500">🧩 What GenieAi Can Do</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-600">
            <li>✍️ Generate articles & blogs in minutes</li>
            <li>🖼️ Remove backgrounds & objects instantly</li>
            <li>📄 Smart resume optimization</li>
            <li>💡 Creative blog titles & outlines</li>
            <li>🤖 Smarter AI chat with community learning</li>
            <li>📊 Streamlined workflow dashboards</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="p-8 mb-10 bg-[#FDFDFE] shadow-lg border border-gray-100 rounded-2xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-purple-500">🛠️ Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
            <span className="bg-white border px-3 py-2 rounded-lg text-center">⚛️ React + Vite</span>
            <span className="bg-white border px-3 py-2 rounded-lg text-center">🎨 Tailwind CSS</span>
            <span className="bg-white border px-3 py-2 rounded-lg text-center">🔐 Clerk Auth</span>
            <span className="bg-white border px-3 py-2 rounded-lg text-center">🧠 OpenAI APIs</span>
            <span className="bg-white border px-3 py-2 rounded-lg text-center">🌐 Neon Postgres</span>
            <span className="bg-white border px-3 py-2 rounded-lg text-center">☁️ SaaS Cloud</span>
          </div>
        </div>

        {/* Creator */}
        <div className="p-8 mb-10 bg-[#FDFDFE] shadow-lg border border-gray-100 rounded-2xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500">👨‍💻 The Creator</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong className="text-purple-600">Neeraj Kumar</strong>, a final-year B.Tech student at GL Bajaj Institute
            of Technology and Management, built GenieAi to bridge the gap between ideas and execution through the power
            of AI and full-stack development.
          </p>
        </div>

        {/* Roadmap */}
        <div className="p-8 mb-10 bg-[#FDFDFE] shadow-lg border border-gray-100 rounded-2xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500">🛣️ Roadmap</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>🧠 Conversational AI with memory</li>
            <li>📈 Personalized dashboards & analytics</li>
            <li>📱 Mobile app (React Native)</li>
            <li>🎓 AI learning hub</li>
            <li>🌍 Multilingual support</li>
          </ul>
        </div>

        {/* Community */}
        <div className="p-8 bg-[#FDFDFE] shadow-lg border border-gray-100 rounded-2xl hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500">🌐 Join Our Community</h2>
          <p className="text-gray-600 leading-relaxed">
            GenieAi is more than a product—it’s a movement. We invite creators, students, and professionals to share
            feedback, contribute ideas, and help shape the future of intelligent productivity tools.
          </p>
        </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUS;
