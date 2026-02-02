
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ChatAssistant from './components/ChatAssistant';
import { PROJECTS, PERSONAL_INFO } from './data';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />

        {/* About Summary */}
        <section id="about" className="py-24 px-6 border-y border-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-6">Introduction</h2>
            <p className="text-3xl md:text-4xl font-light leading-snug">
              Specialized in <span className="text-white font-medium">Information Management</span> at UIUC. 
              I transform complex datasets into <span className="text-white font-medium">automated products</span> that drive high-impact decision making.
            </p>
          </div>
        </section>

        <ExperienceSection />

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
               <span className="text-blue-500">03.</span> Featured Projects
             </h2>
             <div className="grid md:grid-cols-2 gap-8">
               {PROJECTS.map((proj, idx) => (
                 <div key={idx} className="group relative rounded-3xl overflow-hidden glass-panel p-10 hover:border-blue-500/50 transition-all duration-500">
                   <div className="flex flex-wrap gap-2 mb-6">
                     {proj.tags.map(tag => (
                       <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{tag}</span>
                     ))}
                   </div>
                   <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
                   <p className="text-gray-400 mb-6 leading-relaxed">{proj.description}</p>
                   <ul className="space-y-4">
                     {proj.points.map((p, pIdx) => (
                       <li key={pIdx} className="text-sm text-gray-300 flex gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                         {p}
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
               
               {/* Impact Card */}
               <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-10 flex flex-col justify-center text-center">
                  <span className="text-sm font-bold opacity-80 uppercase mb-2">Total Impact Captured</span>
                  <div className="text-6xl font-black mb-4">$5M+</div>
                  <p className="font-medium text-white/90">In margin improvement opportunities surfaced through product-led analytics during tenure at Deloitte.</p>
               </div>
             </div>
          </div>
        </section>

        <SkillsSection />

        {/* Footer / Contact */}
        <section id="contact" className="py-24 px-6 border-t border-gray-800/50 bg-gray-900/10">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-5xl font-extrabold mb-8 tracking-tighter">Let's build something <span className="gradient-text">exceptional</span> together.</h2>
             <div className="flex flex-wrap justify-center gap-6 mt-12">
               <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:text-blue-500 transition-colors flex items-center gap-2">
                 {PERSONAL_INFO.email}
               </a>
               <span className="text-gray-700 hidden md:block">|</span>
               <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-500 transition-colors">
                 LinkedIn Profile
               </a>
             </div>
             
             <footer className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
                <p>Designed for Impact & Innovation</p>
                <p>UIUC MSIM '27</p>
             </footer>
          </div>
        </section>
      </main>

      {/* Floating Chat Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;
