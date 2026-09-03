
import React, { useState, useEffect } from 'react';
import {
  Play,
  X,
  ArrowRight,
  ArrowUpRight,
  Clock,
  ChevronDown,
  MessageCircle,
  Send,
  Twitter,
  Mail,
  Radio,
  Sun,
  Moon,
  Linkedin
} from 'lucide-react';
import {
  SERVICES,
  EXPERIENCE,
  TWEETS,
  TOOLS,
  FOOTER_TAGS,
  CASE_STUDIES,
  FIELD_LOG,
  getIcon
} from './constants';
import { CaseStudy } from './types';

const NAV_ITEMS = [
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'channels' },
  { name: 'Case Studies', id: 'reports' },
  { name: 'Content', id: 'reel' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('divo-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = stored ? stored === 'dark' : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('divo-theme', next ? 'dark' : 'light');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button onClick={() => scrollToSection('hero')} className="dateline text-xs text-paper flex items-center gap-2">
          <Radio size={14} className="text-signal" />
          DIVO
        </button>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="dateline text-[11px] text-muted hover:text-signal transition-colors underline-grow"
            >
              {item.name.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center border border-line text-paper hover:border-signal hover:text-signal transition-colors"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="dateline text-[11px] border border-line text-paper px-4 py-2 hover:border-signal hover:text-signal transition-colors"
          >
            CONTACT →
          </button>
        </div>
      </div>
    </nav>
  );
};

const Ticker: React.FC = () => {
  const doubled = [...FIELD_LOG, ...FIELD_LOG];
  return (
    <div className="w-full bg-surface border-y border-line overflow-hidden py-3">
      <div className="flex whitespace-nowrap animate-ticker w-max">
        {doubled.map((entry, idx) => (
          <div key={idx} className="flex items-center gap-3 px-6 dateline text-[11px] text-muted">
            <span className="text-signal">{entry.time}</span>
            <span>{entry.entry}</span>
            <span className="text-line ml-3">///</span>
          </div>
        ))}
      </div>
    </div>
  );
};

declare global {
  interface Window {
    twttr?: {
      widgets: { load: (el?: HTMLElement) => void };
    };
  }
}

const useIsDark = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return dark;
};

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://tally.yuki.sh/hits/divocreates/portfolio.json')
      .then((res) => res.json())
      .then((data: { visit: number }) => setCount(data.visit + 1036))
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;

  return (
    <p className="dateline text-[10px] text-muted">
      YOU'RE VISITOR #{count.toLocaleString()}
    </p>
  );
};

const TweetEmbed: React.FC<{ url: string }> = ({ url }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDark = useIsDark();

  useEffect(() => {
    const loadWidget = () => {
      if (window.twttr && window.twttr.widgets && containerRef.current) {
        window.twttr.widgets.load(containerRef.current);
      }
    };

    if (window.twttr) {
      loadWidget();
    } else {
      const existing = document.getElementById('twitter-wjs');
      if (!existing) {
        const script = document.createElement('script');
        script.id = 'twitter-wjs';
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.onload = loadWidget;
        document.body.appendChild(script);
      } else {
        existing.addEventListener('load', loadWidget);
      }
    }
  }, [url, isDark]);

  return (
    <div key={isDark ? 'dark' : 'light'} ref={containerRef} className="tweet-embed-wrap w-full flex justify-center">
      <blockquote className="twitter-tweet" data-theme={isDark ? 'dark' : 'light'} data-dnt="true">
        <a href={url} target="_blank" rel="noopener noreferrer" className="dateline text-[11px] text-muted hover:text-signal">
          View post on X ↗
        </a>
      </blockquote>
    </div>
  );
};

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
      <div className="absolute inset-0 bg-ink/95 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full h-full max-w-5xl bg-ink md:border md:border-line overflow-y-auto no-scrollbar">

        <div className="sticky top-0 z-50 px-6 md:px-12 py-5 bg-ink/95 backdrop-blur-md flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-4">
            <span className="dateline text-[10px] text-signal border border-signal/40 px-3 py-1">{study.type.toUpperCase()}</span>
            <p className="dateline text-[10px] text-muted hidden md:block">CASE STUDY</p>
          </div>
          <button onClick={onClose} className="p-2 text-muted hover:text-signal transition-all">
            <X size={22} />
          </button>
        </div>

        <div className="relative w-full h-[38vh] min-h-[280px] overflow-hidden border-b border-line">
          <img src={study.bannerImage} className="w-full h-full object-cover grayscale opacity-40" alt={study.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <p className="dateline text-[11px] text-data mb-4">{study.metadata.project} · {study.metadata.duration}</p>
            <h2 className="text-3xl md:text-6xl font-display font-medium text-paper max-w-3xl leading-[1.05]">
              {study.header}
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-12 max-w-4xl mx-auto space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="p-6 bg-ink">
                <h4 className="text-3xl font-display font-medium text-data mb-1">{metric.value}</h4>
                <p className="dateline text-[10px] text-paper mb-1">{metric.label.toUpperCase()}</p>
                <p className="text-xs text-muted">{metric.subtext}</p>
              </div>
            ))}
          </section>

          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="dateline text-[11px] text-signal mb-4">EXECUTIVE SUMMARY</h3>
              <p className="text-lg md:text-xl text-paper leading-relaxed font-display italic font-light">
                {study.executiveSummary}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="dateline text-[10px] text-muted mb-2">MARKET CONTEXT</h4>
                <p className="text-paper/80 leading-relaxed text-sm">{study.marketContext}</p>
              </div>
              <div>
                <h4 className="dateline text-[10px] text-muted mb-2">THE CHALLENGE</h4>
                <p className="text-paper/80 leading-relaxed text-sm">{study.theChallenge}</p>
              </div>
            </div>
          </section>

          <section className="border border-line p-6 md:p-10 bg-surface">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-paper mb-8">{study.strategicDeepDive.title}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {study.strategicDeepDive.points.map((point, idx) => (
                <div key={idx}>
                  <p className="dateline text-[10px] text-signal mb-2">0{idx + 1}</p>
                  <h5 className="text-paper font-medium mb-2 text-sm">{point.label}</h5>
                  <p className="text-muted text-sm leading-relaxed">{point.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="dateline text-[11px] text-signal mb-4">EXECUTION</h3>
            <p className="text-paper/80 leading-relaxed">{study.comprehensiveExecution}</p>
          </section>

          <section className="border-l-2 border-data pl-6">
            <p className="text-paper/90 italic font-display text-lg mb-6">{study.impactReport.narrative}</p>
            <ul className="space-y-2">
              {study.impactReport.achievements.map((a, idx) => (
                <li key={idx} className="text-muted text-sm flex items-start gap-3">
                  <span className="text-data mt-1">—</span> {a}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ink relative">
      <div className="fixed inset-0 grain z-0 pointer-events-none"></div>
      <Navbar />
      {selectedStudy && <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />}

      <main className="relative z-10">
        {/* HERO */}
        <section id="hero" className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-16 w-full">
          <div className="relative rounded-3xl border border-line bg-surface overflow-hidden grid md:grid-cols-2">
            <div className="relative z-10 p-8 md:p-14 flex flex-col justify-between min-h-[300px] md:min-h-[560px] order-2 md:order-1">
              <p className="dateline text-[11px] text-muted">GROWTH & MARKETING</p>
              <div className="py-8 md:py-0">
                <h1 className="text-6xl md:text-7xl font-display font-medium text-paper leading-[0.92] mb-6">
                  Divo<br />Creates.
                </h1>
                <div className="w-14 border-t-2 border-signal mb-4"></div>
                <p className="text-muted mb-8 max-w-xs">Content, campaigns, and community growth built to convert.</p>
                <div>
                  <p className="text-paper font-display font-medium text-lg">Samuel Dahunsi</p>
                  <p className="dateline text-[10px] text-muted mt-1">GROWTH & MARKETING LEAD</p>
                </div>
              </div>
              <div className="flex items-center gap-3 dateline text-[10px] text-muted">
                <span>SELECTED WORK</span>
                <span className="flex-1 h-px bg-line"></span>
                <span>{new Date().getFullYear()}</span>
              </div>
            </div>
            <div className="relative h-[280px] md:h-auto order-1 md:order-2">
              <img
                src="/photos/divo-portrait-studio.png"
                alt="Divo"
                className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-110"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <button onClick={() => scrollToSection('reel')} className="dateline text-xs bg-signal text-ink px-6 py-3 hover:bg-paper transition-colors inline-flex items-center gap-2">
              SEE MY WORK <ArrowRight size={14} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="dateline text-xs text-muted hover:text-signal transition-colors underline-grow">
              or get in touch →
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 pt-10 mt-10 border-t border-line">
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-display font-medium text-paper">150+</span>
              <p className="dateline text-[10px] text-muted mt-1">COMMUNITY BUILT</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-display font-medium text-paper">3+</span>
              <p className="dateline text-[10px] text-muted mt-1">YEARS IN WEB3</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-display font-medium text-paper">6</span>
              <p className="dateline text-[10px] text-muted mt-1">PROTOCOLS WORKED WITH</p>
            </div>
          </div>
        </section>

        <Ticker />

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 scroll-mt-16">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            <div className="aspect-[4/5] overflow-hidden border border-line bg-surface">
              <img src="/photos/divo-portrait-studio.png" alt="Divo" className="w-full h-full object-cover grayscale contrast-110" />
            </div>
            <div>
              <p className="dateline text-[11px] text-signal mb-6">ABOUT ME</p>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-paper mb-8 leading-tight">
                Working with builders across Africa and beyond.
              </h2>
              <div className="space-y-4 text-muted leading-relaxed mb-10">
                <p>I got into Web3 marketing because most of it is either hype or homework, nothing in between. My work sits in that gap: clear enough for a newcomer, credible enough for the team's own engineers.</p>
                <p>Most of what I do is African growth work: getting developers to actually build on infrastructure most Western teams don't know how to talk to yet.</p>
              </div>
              <div className="grid grid-cols-2 gap-6 dateline text-[11px] border-t border-line pt-6">
                <div><span className="text-muted block mb-1">FOCUS</span><span className="text-paper">Growth & Marketing</span></div>
                <div><span className="text-muted block mb-1">SINCE</span><span className="text-paper">2023</span></div>
                <div><span className="text-muted block mb-1">STATUS</span><span className="text-paper">Open to roles</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CHANNELS (Services) */}
        <section id="channels" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-line scroll-mt-16">
          <p className="dateline text-[11px] text-signal mb-4">WHAT I DO</p>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-paper mb-16 max-w-2xl">Services</h2>
          <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="bg-ink p-8 hover:bg-surface transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <span className="dateline text-xs text-signal">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-data">{getIcon(service.icon)}</span>
                </div>
                <h3 className="text-xl font-display font-medium text-paper mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRANSMISSION HISTORY (Experience) */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-line">
          <p className="dateline text-[11px] text-signal mb-4">EXPERIENCE</p>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-paper mb-16 max-w-2xl">Where I've worked</h2>
          <div className="space-y-0 border-t border-line">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 py-8 border-b border-line group">
                <p className="dateline text-[11px] text-muted pt-1">{exp.period}</p>
                <div>
                  <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-display font-medium text-paper">{exp.company}</h3>
                    <span className="dateline text-[10px] text-data">{exp.role}</span>
                  </div>
                  <p className="text-muted text-sm mb-3 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, hidx) => (
                      <li key={hidx} className="text-muted/70 text-xs flex gap-2"><span className="text-signal">—</span>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FIELD REPORTS (Case Studies) */}
        <section id="reports" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-line scroll-mt-16">
          <p className="dateline text-[11px] text-signal mb-4">SELECTED WORK</p>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-paper mb-16 max-w-2xl">Case studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className="text-left border border-line p-8 hover:border-signal transition-colors card-hover group relative overflow-hidden"
              >
                <p className="dateline text-[10px] text-data mb-4">{study.type.toUpperCase()}</p>
                <h3 className="text-2xl font-display font-medium text-paper mb-3 leading-tight">{study.title}</h3>
                <p className="text-muted text-sm mb-8 leading-relaxed">{study.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-4">
                    {study.metrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <span className="text-signal font-display text-lg">{m.value}</span>
                        <span className="dateline text-[9px] text-muted block">{m.label.toUpperCase()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 dateline text-[10px] text-signal pt-5 border-t border-line group-hover:gap-3 transition-all">
                  VIEW CASE STUDY
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CONTENT (X posts) */}
        <section id="reel" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-line scroll-mt-16">
          <p className="dateline text-[11px] text-signal mb-4">SELECTED CUTS</p>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-paper mb-16 max-w-2xl">My content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TWEETS.map((tweet, idx) => (
              <div key={idx} className="bg-surface border border-line p-2 flex justify-center">
                <TweetEmbed url={tweet.url} />
              </div>
            ))}
          </div>
        </section>

        {/* KIT (Tools) */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-line">
          <p className="dateline text-[11px] text-signal mb-4">EQUIPMENT</p>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-paper mb-16 max-w-2xl">Kit</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line">
            {TOOLS.map((tool, index) => (
              <div key={index} className="bg-ink p-6 flex flex-col items-center text-center hover:bg-surface transition-colors">
                <div className="w-10 h-10 mb-4 flex items-center justify-center">
                  {tool.icon === 'sparkles' ? (
                    <Radio size={24} className="text-signal" />
                  ) : (
                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                  )}
                </div>
                <h3 className="text-sm font-medium text-paper">{tool.name}</h3>
                <p className="dateline text-[9px] text-muted mt-2">{tool.category.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-line scroll-mt-16">
          <p className="dateline text-[11px] text-signal mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-7xl font-display font-medium text-paper mb-12 leading-[0.95]">
            Let's work<br /><span className="text-signal italic">together.</span>
          </h2>
          <a href="mailto:dahunsimololuwa@gmail.com" className="inline-flex items-center gap-4 dateline text-sm text-ink bg-paper px-8 py-4 hover:bg-signal transition-colors mb-16">
            dahunsimololuwa@gmail.com <ArrowRight size={16} />
          </a>

          <div className="flex flex-wrap items-center gap-6 mb-16">
            <a href="https://linkedin.com/in/samuel-dahunsi-" target="_blank" rel="noopener noreferrer" className="dateline text-xs text-muted hover:text-signal transition-colors flex items-center gap-2">
              <Linkedin size={16} /> LINKEDIN
            </a>
            <a href="https://discord.com/users/divo_51920" target="_blank" rel="noopener noreferrer" className="dateline text-xs text-muted hover:text-signal transition-colors flex items-center gap-2">
              <MessageCircle size={16} /> DISCORD
            </a>
            <a href="https://t.me/DIVO_01" target="_blank" rel="noopener noreferrer" className="dateline text-xs text-muted hover:text-signal transition-colors flex items-center gap-2">
              <Send size={16} /> TELEGRAM
            </a>
            <a href="https://x.com/Divo_Creates" target="_blank" rel="noopener noreferrer" className="dateline text-xs text-muted hover:text-signal transition-colors flex items-center gap-2">
              <Twitter size={16} /> X
            </a>
            <a href="mailto:dahunsimololuwa@gmail.com" className="dateline text-xs text-muted hover:text-signal transition-colors flex items-center gap-2">
              <Mail size={16} /> EMAIL
            </a>
          </div>

          <div className="w-full overflow-hidden border-y border-line py-4">
            <div className="whitespace-nowrap animate-ticker-slow flex items-center gap-10 dateline text-[11px] text-muted w-max">
              {[...FOOTER_TAGS, ...FOOTER_TAGS, ...FOOTER_TAGS].map((tag, idx) => (
                <span key={idx} className="flex items-center gap-10">{tag.toUpperCase()} <span className="text-signal">◆</span></span>
              ))}
            </div>
          </div>
          <p className="mt-8 dateline text-[10px] text-muted">© {new Date().getFullYear()} DIVO</p>
          <div className="mt-2">
            <VisitorCounter />
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
