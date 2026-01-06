
import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Play, 
  Zap, 
  CheckCircle2,
  Sparkles,
  X,
  ArrowRight,
  Target,
  Trophy,
  Activity,
  Layout,
  Clock,
  PieChart,
  ChevronRight,
  Maximize2,
  FileText,
  Cpu,
  Layers,
  Box as BoxIcon,
  ChevronDown
} from 'lucide-react';
import { 
  SERVICES, 
  EXPERIENCE, 
  PORTFOLIO, 
  TOOLS, 
  MARQUEE_TAGS, 
  FOOTER_TAGS,
  CASE_STUDIES,
  getIcon 
} from './constants';
import { CaseStudy } from './types';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActive(id);
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[60] px-4 w-full max-w-xl">
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-full px-2 py-2 flex items-center justify-between shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-1 md:gap-2 px-2 overflow-x-auto no-scrollbar">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Services', id: 'services' },
            { name: 'Cases', id: 'casestudies' },
            { name: 'Work', id: 'work' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                active === item.id 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-primary text-white rounded-full px-6 py-2 text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

const FuturisticBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute inset-0 cyber-grid opacity-20 animate-grid-flow"></div>
    <div className="absolute top-[10%] right-[15%] animate-float opacity-10">
      <Cpu size={140} className="text-primary" />
    </div>
    <div className="absolute bottom-[20%] left-[10%] animate-float opacity-10" style={{ animationDelay: '2s' }}>
      <Layers size={110} className="text-indigo-400" />
    </div>
    <div className="absolute top-[45%] left-[5%] animate-float opacity-5" style={{ animationDelay: '4s' }}>
      <BoxIcon size={90} className="text-purple-400" />
    </div>
    {/* Decorative Glows */}
    <div className="absolute -top-[10%] left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[140px]"></div>
    <div className="absolute bottom-0 right-[10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
  </div>
);

const CaseStudyModal: React.FC<{ study: CaseStudy; onClose: () => void }> = ({ study, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full h-full max-w-7xl bg-white dark:bg-[#020617] md:rounded-[2.5rem] overflow-y-auto shadow-2xl border border-slate-200/20 dark:border-slate-800/50 animate-in fade-in zoom-in duration-500 no-scrollbar">
        
        <div className="sticky top-0 z-50 px-8 py-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-between border-b border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-primary px-3 py-1 bg-primary/10 rounded-full tracking-widest uppercase">{study.type}</span>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>
            <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest hidden md:block">Case Study Detail Report</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-all active:scale-90"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
          <img src={study.bannerImage} className="w-full h-full object-cover" alt={study.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white max-w-4xl leading-tight mb-6">
              {study.header}
            </h2>
            <div className="flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Layout size={18} className="text-primary" />
                <span className="text-sm font-medium uppercase tracking-wider">{study.metadata.project}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span className="text-sm font-medium uppercase tracking-wider">{study.metadata.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-16 max-w-6xl mx-auto space-y-24">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 group hover:border-primary/50 transition-all">
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform w-fit">
                  <PieChart size={24} />
                </div>
                <h4 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-1">{metric.value}</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{metric.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">{metric.subtext}</p>
              </div>
            ))}
          </section>

          <section className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <div className="w-8 h-px bg-primary"></div> Executive Summary
              </h3>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light italic">
                "{study.executiveSummary}"
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold dark:text-white uppercase tracking-widest mb-4">Market Context</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">{study.marketContext}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold dark:text-white uppercase tracking-widest mb-4">The Challenge</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">{study.theChallenge}</p>
              </div>
            </div>
          </section>

          <section className="relative p-12 md:p-16 rounded-[3rem] bg-primary text-white shadow-2xl shadow-primary/20 overflow-hidden">
             <div className="absolute top-0 right-0 p-16 opacity-10 pointer-events-none">
               <Target size={300} strokeWidth={0.5} />
             </div>
             <div className="relative z-10">
               <h3 className="text-3xl md:text-5xl font-display font-bold mb-12">{study.strategicDeepDive.title}</h3>
               <div className="grid md:grid-cols-3 gap-12">
                 {study.strategicDeepDive.points.map((pt, i) => (
                   <div key={i} className="space-y-4">
                     <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold">{i + 1}</div>
                     <h4 className="text-xl font-bold">{pt.label}</h4>
                     <p className="text-white/80 text-sm leading-relaxed">{pt.content}</p>
                   </div>
                 ))}
               </div>
             </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Production Showcase</h3>
                <h2 className="text-3xl font-display font-bold dark:text-white">Assets & Deliverables</h2>
              </div>
              <p className="text-sm text-slate-500 hidden md:block">Detailed visual breakdown</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {study.mediaGallery.map((media, i) => (
                <div key={i} className="group relative rounded-3xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <img src={media.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={media.caption} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-medium">{media.caption}</p>
                  </div>
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40">
                        <Play fill="white" size={24} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="max-w-3xl">
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Activity size={16} /> Roadmap & Execution
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light">
                {study.comprehensiveExecution}
              </p>
            </div>
          </section>

          <section className="p-12 md:p-16 rounded-[3rem] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-display font-bold dark:text-white flex items-center gap-4">
                  <Trophy className="text-primary" /> Impact Analysis
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {study.impactReport.narrative}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Core Achievements</h4>
                {study.impactReport.achievements.map((ach, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-transform hover:translate-x-2">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                    <span className="text-sm font-medium dark:text-slate-200">{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-12 text-center border-t border-slate-100 dark:border-slate-800">
             <h4 className="text-2xl font-display font-bold dark:text-white mb-6">Ready to scale your protocol?</h4>
             <button 
               onClick={onClose}
               className="bg-primary text-white px-12 py-4 rounded-full font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105 uppercase tracking-widest text-sm"
             >
               Start A Conversation
             </button>
          </section>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative bg-background-light dark:bg-background-dark">
      <FuturisticBackground />
      <Navbar />

      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="bg-surface-light dark:bg-slate-900/80 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform text-primary backdrop-blur-md"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      {selectedCaseStudy && (
        <CaseStudyModal 
          study={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
        />
      )}

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 font-sans">
        
        {/* Hero Section */}
        <section id="hero" className="text-center mb-40 pt-12 scroll-mt-32">
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter uppercase leading-none text-slate-900 dark:text-white">
            HI MY NAME IS <span className="text-primary glow-text">DIVO</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            I'm a Video Content Creator, Content Lead,<br className="hidden md:block"/> Growth & BD Lead and Co-founder VaraNames.
          </p>
          <div className="tilt-container max-w-5xl mx-auto">
            <div className={`relative w-full aspect-video bg-surface-light dark:bg-surface-dark rounded-[3rem] border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden group glow-box tilt-card ${isHeroPlaying ? 'no-tilt' : ''}`}>
              {isHeroPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/vX-inQa3MKk?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                ></iframe>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-purple-500/10 opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button 
                      onClick={() => setIsHeroPlaying(true)}
                      className="w-24 h-24 rounded-full glass border border-white/20 text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/40 group-hover:bg-primary/90"
                    >
                      <Play size={36} fill="white" className="ml-1" />
                    </button>
                  </div>
                  <img 
                    alt="Hero Visual" 
                    className="w-full h-full object-cover transition-all duration-700 opacity-60 mix-blend-overlay grayscale group-hover:grayscale-0" 
                    src="https://img.youtube.com/vi/vX-inQa3MKk/maxresdefault.jpg"
                  />
                </>
              )}
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="w-full overflow-hidden bg-primary py-4 mb-40 -mx-6 md:-mx-0 md:rounded-2xl transform -rotate-1 relative z-20 shadow-2xl shadow-primary/30">
          <div className="whitespace-nowrap animate-marquee flex items-center gap-12 text-white font-display font-bold tracking-widest uppercase text-xs">
            {[...MARQUEE_TAGS, ...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, idx) => (
              <React.Fragment key={idx}>
                <span className="flex items-center gap-4">{tag} <Sparkles size={14} /></span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* About Me */}
        <section id="about" className="grid md:grid-cols-2 gap-16 items-center mb-48 scroll-mt-32">
          <div className="relative group tilt-container">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-full aspect-square bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl tilt-card">
              <img 
                alt="Divo Portrait" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700" 
                src="/attached_assets/New_PFP_1767738004126.jpg"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-slate-900 dark:text-white">About <span className="text-primary">Me</span></h2>
              <div className="w-24 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-light">
              <p>
                I’m DIVO — a video content creator, content lead, and Web3 builder focused on helping early-stage Web3 teams communicate clearly and grow intentionally.
              </p>
              <p>
                Currently in my third year of Computer Science, I bridge the gap between technical complexity and mainstream adoption through high-impact storytelling and localized strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="work" className="mb-48 scroll-mt-32">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold border-l-8 border-primary pl-6 mb-4 uppercase text-slate-900 dark:text-white">Work Experience</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed text-lg">
              Contributing to industry-leading Layer 1 networks and DeFi protocols.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="bg-surface-light dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group relative flex flex-col h-full tilt-container">
                <div className="tilt-card flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-20 h-20 rounded-2xl glass border border-slate-100 dark:border-slate-800 p-3 group-hover:scale-110 transition-transform">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors text-slate-900 dark:text-white">{exp.company}</h3>
                    <p className="text-sm font-medium text-slate-500 mt-2 uppercase tracking-widest">{exp.role}</p>
                  </div>
                  <p className="text-slate-500 text-sm mb-10 leading-relaxed italic">"{exp.description}"</p>
                  <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800/50">
                    <ul className="space-y-4">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-4 text-sm text-slate-500 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* My Services */}
        <section id="services" className="mb-48 scroll-mt-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase text-slate-900 dark:text-white">My Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-surface-light dark:bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800/50 hover:border-primary/50 transition-all hover:shadow-2xl group flex flex-col h-full tilt-container">
                <div className="tilt-card h-full flex flex-col">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-6 tracking-tight group-hover:text-primary transition-colors text-slate-900 dark:text-white">{service.title}</h3>
                  <ul className="space-y-4 flex-grow">
                    {service.description.split('. ').map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-4 items-start">
                        <CheckCircle2 size={18} className="text-primary/70 shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-500 leading-relaxed font-light">{point.trim()}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section id="casestudies" className="mb-48 scroll-mt-32">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold border-l-8 border-primary pl-6 mb-4 uppercase text-slate-900 dark:text-white">Case Studies</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed text-lg">
              Detailed strategic reports on technical content and regional growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <button 
                key={study.id}
                onClick={() => setSelectedCaseStudy(study)}
                className="text-left bg-surface-light dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/50 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all duration-500 group relative flex flex-col h-full overflow-hidden tilt-container"
              >
                <div className="tilt-card flex flex-col h-full w-full">
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-all duration-700">
                    <FileText size={160} />
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-6 bg-primary/5 px-4 py-1.5 rounded-full w-fit">{study.type}</span>
                  <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-primary transition-colors pr-10 leading-snug text-slate-900 dark:text-white">{study.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-10 leading-relaxed flex-grow font-light">{study.description}</p>
                  <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-slate-100 dark:border-slate-800/50">
                    {study.metrics.slice(0, 3).map((m, i) => (
                      <div key={i}>
                        <p className="text-xl font-bold text-slate-900 dark:text-white leading-none mb-2">{m.value}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-primary group-hover:gap-6 transition-all uppercase tracking-[0.3em]">
                      ACCESS FULL REPORT <ChevronRight size={14} />
                    </div>
                    <Maximize2 size={18} className="text-slate-300 dark:text-slate-600 group-hover:text-primary" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Content Portfolio Section with Vertical Scrollbar */}
        <section id="portfolio" className="mb-48 scroll-mt-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold border-l-8 border-primary pl-6 uppercase tracking-tight mb-4 text-slate-900 dark:text-white">Content Portfolio</h2>
              <p className="text-slate-500 text-sm max-w-lg">Explore a massive collection of high-fidelity Web3 and product video content.</p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase animate-bounce hidden md:flex">
              <ChevronDown size={14} /> Scroll Down to Explore
            </div>
          </div>
          
          {/* Vertical Scroll Container - Ensuring it is clearly defined and scrolls vertically */}
          <div className="max-h-[600px] overflow-y-auto pr-6 portfolio-v-scroll rounded-[2.5rem] bg-slate-950/20 p-4 border border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Multiplying items to ensure a long list that requires scrolling */}
              {[...PORTFOLIO, ...PORTFOLIO, ...PORTFOLIO].map((item, idx) => (
                <div key={idx} className="group tilt-container">
                  <div className="relative aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl tilt-card">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                      <div className="w-20 h-20 rounded-full glass border border-white/20 flex items-center justify-center">
                        <Play size={32} fill="white" className="ml-1.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                      <p className="text-white font-display font-bold text-xl uppercase tracking-tight">{item.title}</p>
                      <p className="text-white/60 text-[10px] mt-2 font-medium tracking-widest uppercase">Video Production • {idx + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="mb-48 text-center scroll-mt-32">
          <div className="mb-20">
            <h2 className="text-5xl font-display font-bold mb-6 tracking-tight uppercase text-slate-900 dark:text-white">Tools I Use</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TOOLS.map((tool, index) => (
              <div key={index} className="group relative tilt-container">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative h-full bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center tilt-card">
                  <div className="w-16 h-16 mb-8 flex items-center justify-center p-3 rounded-2xl glass border border-slate-100 dark:border-slate-800">
                    {tool.icon === 'sparkles' ? (
                      <Sparkles size={32} className="text-primary animate-pulse" />
                    ) : (
                      <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors text-slate-900 dark:text-white">{tool.name}</h3>
                  <p className="text-[10px] text-slate-500 mt-3 uppercase tracking-widest font-bold">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer - Restored Original Text */}
        <footer id="contact" className="text-center pt-24 scroll-mt-32">
          <div className="mb-20">
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-2 uppercase tracking-tighter text-slate-900 dark:text-white">Let's Create <span className="text-primary">Something</span></h2>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-primary uppercase tracking-tighter">Amazing Together</h2>
          </div>
          
          <button className="bg-primary hover:bg-indigo-500 text-white font-bold py-6 px-20 rounded-full text-xl shadow-2xl shadow-primary/40 transition-all mb-32 transform hover:-translate-y-2 uppercase tracking-widest">
            Contact Us
          </button>

          <div className="w-full overflow-hidden bg-primary py-5 -mx-6 md:-mx-0 md:rounded-2xl mb-12 shadow-2xl shadow-primary/30 relative">
            <div className="whitespace-nowrap animate-marquee flex items-center gap-16 text-white font-display font-bold text-sm uppercase tracking-widest">
              {[...FOOTER_TAGS, ...FOOTER_TAGS, ...FOOTER_TAGS].map((tag, idx) => (
                <React.Fragment key={idx}>
                  <span className="flex items-center gap-6">{tag} <Zap size={14} fill="white" /></span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <p className="mt-8 text-slate-500 text-xs tracking-[0.5em] uppercase font-bold">© MMXXIV DIVO • ARCHITECTING THE FUTURE</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
