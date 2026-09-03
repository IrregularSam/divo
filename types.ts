
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface WorkExperience {
  period: string;
  company: string;
  role: string;
  highlights: string[];
  logo: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  thumbnail: string;
  videoUrl?: string;
}

export interface TweetItem {
  url: string;
  views?: string;
}

export interface FieldLogEntry {
  id: string;
  time: string;
  city: string;
  entry: string;
}

export interface CaseStudyMedia {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface CaseStudy {
  id: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  header: string;
  bannerImage: string;
  metadata: {
    project: string;
    platform?: string;
    focus?: string;
    role?: string;
    duration?: string;
  };
  metrics: CaseStudyMetric[];
  executiveSummary: string;
  marketContext: string;
  theChallenge: string;
  strategicDeepDive: {
    title: string;
    points: { label: string; content: string }[];
  };
  mediaGallery: CaseStudyMedia[];
  comprehensiveExecution: string;
  impactReport: {
    narrative: string;
    achievements: string[];
  };
  futureRoadmap?: string;
}
