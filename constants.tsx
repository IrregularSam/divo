
import React from 'react';
import { 
  Megaphone, 
  Film, 
  Users, 
  FileText, 
  Palette, 
  Globe, 
  GraduationCap, 
  Zap, 
  Rocket,
  Briefcase,
  CheckCircle2,
  Box
} from 'lucide-react';
import { Service, Skill, WorkExperience, PortfolioItem, TweetItem, FieldLogEntry, CaseStudy } from './types';

export const SERVICES: Service[] = [
  { 
    id: '1', 
    title: 'Content Strategy', 
    description: 'I help Web3 teams define how their product is explained and understood. This includes messaging direction, narrative structure, and content systems that align with product and growth goals. The focus is clarity first — no hype, no confusion.', 
    icon: 'Briefcase' 
  },
  { 
    id: '2', 
    title: 'African Growth & Market Expansion', 
    description: 'I support teams entering African markets with insight-driven content and positioning. This covers localized messaging, user education, and market-aware strategy built around how African users actually interact with Web3 products.', 
    icon: 'Globe' 
  },
  { 
    id: '3', 
    title: 'Video & UGC Content', 
    description: 'I create product walkthroughs, explainer videos, and UGC-style content designed for social distribution. Everything is built to feel native, engaging, and easy to understand — whether for launches, education, or ongoing growth.', 
    icon: 'Film' 
  },
  { 
    id: '4', 
    title: 'Motion & Visual Design', 
    description: 'I design motion graphics and visual assets that support storytelling and marketing. These are used across campaigns, educational content, and social media to simplify complex ideas and improve retention.', 
    icon: 'Palette' 
  },
  { 
    id: '5', 
    title: 'Technical Writing', 
    description: 'I write clear technical content that explains how products work. This includes documentation, guides, walkthroughs, and educational pieces that balance accuracy with accessibility.', 
    icon: 'FileText' 
  },
  { 
    id: '6', 
    title: 'Marketing & Campaigns', 
    description: 'I plan and execute content-led marketing campaigns for launches and ecosystem growth. This includes campaign structure, content execution, and cross-platform alignment to drive visibility and adoption.', 
    icon: 'Megaphone' 
  },
  { 
    id: '7', 
    title: 'Ecosystem Education & Developer Content', 
    description: 'I create educational content for ecosystems and developer-focused communities. This includes onboarding content, workshops, explainers, and narratives that help developers and users understand how to build, use, and ship on-chain.', 
    icon: 'GraduationCap' 
  },
  { 
    id: '8', 
    title: 'Content Distribution & Platform Strategy', 
    description: 'I help teams decide where content lives and how it travels. This covers platform-native formatting, content sequencing, and distribution strategies across X, short-form video platforms, and community channels.', 
    icon: 'Rocket' 
  },
  { 
    id: '9', 
    title: 'Founder & Product Storytelling', 
    description: 'I work closely with founders to shape how their product story is told publicly. This includes refining positioning, translating product vision into content, and ensuring consistency across launches, updates, and community-facing communication.', 
    icon: 'Users' 
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    type: 'Ecosystem Content Series',
    title: 'Solana Real-Time Reporting Engine',
    description: 'A daily series that turns scattered Solana ecosystem updates into one clear read — built for builders who don\'t have hours to spend scrolling.',
    tags: ['Solana', 'Data Curation', 'Strategy'],
    header: 'Everything That Happened in the Last 24 Hours in the Solana Ecosystem',
    bannerImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
    metadata: {
      project: 'Ecosystem Reporting & Curation',
      platform: 'X (Twitter)',
      duration: 'Ongoing since Q4 2023',
      role: 'Content Lead'
    },
    metrics: [
      { label: 'Efficiency Gain', value: '80%', subtext: 'Reduced noise for builders' },
      { label: 'Daily Output', value: '20+', subtext: 'High-signal updates' },
      { label: 'Sentiment', value: '98%', subtext: 'Positive builder feedback' }
    ],
    executiveSummary: 'Solana ecosystem news was scattered across GitHub, Discord, governance forums, and a thousand competing Twitter threads. I built a daily series that pulled the real updates into one clear post — something founders, VCs, and developers could read in a couple of minutes instead of scrolling for an hour.',
    marketContext: 'Solana moves fast. Thousands of active developers, new projects launching every week — the sheer volume made it genuinely hard to tell a real protocol upgrade from marketing noise without spending hours on it daily.',
    theChallenge: 'Real updates — infra changes, governance votes, liquidity shifts — kept getting buried under engagement-bait content. There wasn\'t a daily briefing that respected people\'s time while still going deep enough to actually be useful.',
    strategicDeepDive: {
      title: 'How I approached it',
      points: [
        { label: 'Verification first', content: 'Cross-checked every update against GitHub commits and on-chain activity before it went out — no repeating unconfirmed claims.' },
        { label: 'Ruthless editing', content: 'Turned long technical posts into a few lines that took seconds to read, without losing the part that actually mattered.' },
        { label: 'Same time, every day', content: 'Kept a consistent publishing window so it became part of people\'s morning routine instead of something they had to remember to check.' }
      ]
    },
    mediaGallery: [
      { type: 'video', url: 'https://www.youtube.com/embed/vX-inQa3MKk', caption: 'Ecosystem Analysis Video' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=800', caption: 'Visual representation of information flow' }
    ],
    comprehensiveExecution: 'I tracked over 150 sources — developer Discords, GitHub repos, governance forums — and for every update asked one question: why does this matter to the user? Kept the daily cadence going without missing a day.',
    impactReport: {
      narrative: 'The series ended up getting referenced in project discussions as a quick way to catch up on what was actually happening across the ecosystem.',
      achievements: [
        'Became one of the higher signal-to-noise accounts covering Solana.',
        'Regularly shared by protocol teams and ecosystem accounts.',
        'Grew from a personal habit into something people relied on daily.'
      ]
    }
  },
  {
    id: '2',
    type: 'DeFi Educational Content Series',
    title: 'The Marinade Liquid Staking Crusade',
    description: 'A 30-day campaign that broke down liquid staking one idea at a time, so it actually made sense to people new to DeFi.',
    tags: ['Solana', 'DeFi', 'Product Marketing'],
    header: '30 Reasons Why You Should Stake on Marinade',
    bannerImage: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1200',
    metadata: {
      project: 'DeFi Education & Growth',
      focus: 'mSOL utility & yield',
      duration: '30 Days',
      role: 'Strategy & Execution'
    },
    metrics: [
      { label: 'Reach', value: '500k+', subtext: 'Total campaign impressions' },
      { label: 'Engagement', value: '4.5%', subtext: 'Above industry average' },
      { label: 'Retain', value: '92%', subtext: 'Campaign completion rate' }
    ],
    executiveSummary: 'Liquid staking is a core DeFi primitive, but it\'s intimidating if you\'ve never touched it before. I ran a 30-day campaign that broke Marinade\'s value prop into small, specific reasons to stake — one idea a day instead of one long explainer nobody would finish.',
    marketContext: 'Liquid staking tokens matter for a healthy DeFi ecosystem, but back in 2023 a lot of users saw mSOL as risky or complicated and just stuck to native staking. There wasn\'t much content actually explaining how it works.',
    theChallenge: 'Marinade\'s existing docs were built for power users, not newcomers. The real challenge was turning a native staker into someone who understands and actually uses mSOL — without writing a 2,000-word technical explainer nobody reads.',
    strategicDeepDive: {
      title: 'How I approached it',
      points: [
        { label: 'One idea a day', content: 'Picked a single benefit — liquidity, tax efficiency, decentralization — each day so nobody had to process too much at once.' },
        { label: 'Visual comparisons', content: 'Built simple visuals comparing staking to financial concepts people already understood.' },
        { label: 'Real feedback', content: 'Wove in actual community comments and yield examples instead of just theory.' }
      ]
    },
    mediaGallery: [
      { type: 'video', url: 'https://www.youtube.com/embed/6uT9B99U73M', caption: 'DeFi Education Spotlight' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1611974714658-dd47245bd611?auto=format&fit=crop&q=80&w=800', caption: 'DeFi visual analytics' }
    ],
    comprehensiveExecution: 'The calendar moved from passive yield (days 1–10) to composability (11–20) to governance and security (21–30). Around day 15 I noticed people were worried about smart contract risk, so I adjusted the messaging to address that directly instead of avoiding it.',
    impactReport: {
      narrative: 'By the end, the questions in the comments had shifted from "how does this work?" to "where else can I use mSOL?" — which was really the goal.',
      achievements: [
        '30 straight days without a drop in engagement.',
        'Referenced by a few ecosystem folks as a solid example of DeFi education.',
        'Moved people from confused to actually using the product.'
      ]
    }
  },
  {
    id: '3',
    type: 'Product Walkthrough Content Series',
    title: 'The deBridge Feature Spotlight',
    description: 'Turned dense cross-chain documentation into feature walkthroughs people could actually follow, one at a time.',
    tags: ['Cross-Chain', 'Infra', 'Technical Marketing'],
    header: 'Exploring deBridge — One Feature at a Time',
    bannerImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200',
    metadata: {
      project: 'Infrastructure Adoption',
      focus: 'Bridging Safety & Speed',
      duration: 'Quarterly Campaign',
      role: 'Content Strategist'
    },
    metrics: [
      { label: 'Trust Score', value: 'High', subtext: 'Based on user survey' },
      { label: 'Feature Awareness', value: '2x', subtext: 'Growth in specific tool use' },
      { label: 'Bounce Rate', value: '-15%', subtext: 'On product landing pages' }
    ],
    executiveSummary: 'Infrastructure is invisible until it breaks — and after a wave of bridge hacks, people were understandably nervous about moving assets cross-chain. For deBridge, I built a content series that made the tech feel less abstract and more trustworthy.',
    marketContext: 'The market was full of generic "fast and cheap" bridge marketing. What people actually wanted was "safe and professional" — they just had no way to verify those claims themselves.',
    theChallenge: 'deBridge has real technical advantages — sub-second settlement, intent-based routing — but explaining them usually requires a CS background. The challenge was making these features make sense to someone who just wants their assets to move safely.',
    strategicDeepDive: {
      title: 'How I approached it',
      points: [
        { label: 'Use-case first', content: 'Instead of "routing logic," I explained it as "how to catch a price dip on Base using Solana assets."' },
        { label: 'Talking about risk directly', content: 'Addressed security head-on instead of avoiding it — treated it as a selling point, not a liability.' },
        { label: 'Walkthroughs', content: 'Recorded short videos walking through every button in the UI so nothing felt like a black box.' }
      ]
    },
    mediaGallery: [
      { type: 'video', url: 'https://www.youtube.com/embed/W_M-z_W_K2k', caption: 'Product Walkthrough' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', caption: 'Infrastructure node network' }
    ],
    comprehensiveExecution: 'I put together 12 deep-dive threads and 8 UGC-style videos, each written so support could reuse them as answers to common questions — basically turning the content into a living FAQ.',
    impactReport: {
      narrative: 'Over time, the way people talked about deBridge shifted from "another bridge" to "the one that actually explains itself."',
      achievements: [
        'Fewer repetitive support tickets thanks to clear walkthroughs.',
        'Became a go-to educational resource in the interoperability space.',
        'More people started using advanced features like limit orders and selective routing.'
      ]
    }
  },
  {
    id: '4',
    type: 'Ecosystem Growth & Community',
    title: 'Vara Network: Africa Expansion Strategy',
    description: 'Built Vara Network a real developer community in Nigeria from scratch — no paid ads, just workshops and consistent support.',
    tags: ['Ecosystem', 'Regional Growth', 'Community'],
    header: 'Vara Network — African Ecosystem Growth',
    bannerImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200',
    metadata: {
      project: 'Regional Market Expansion',
      role: 'Lead Ambassador',
      duration: 'Ongoing',
      focus: 'Technical Talent Acquisition'
    },
    metrics: [
      { label: 'Member Count', value: '150+', subtext: 'In first 6 weeks' },
      { label: 'Dev Ratio', value: '50%', subtext: 'Filtered for technical talent' },
      { label: 'Retention', value: '85%', subtext: 'Weekly active participation' }
    ],
    executiveSummary: 'Vara Network wanted a real footprint in African Web3 — not just airdrop hunters passing through. I focused on onboarding actual developers and building an education-first community from scratch.',
    marketContext: 'Nigeria is a top-5 market for crypto adoption, but most L1/L2 networks show up with shallow marketing that misses the technical talent already here. There\'s real appetite for hands-on mentorship.',
    theChallenge: 'Nobody knew Vara in the region, and we were competing for attention against much bigger, established foundations. The strategy had to feel local and useful, not corporate and distant.',
    strategicDeepDive: {
      title: 'How I approached it',
      points: [
        { label: 'Localized workshops', content: 'Built workshop content around the specific challenges local developers deal with — connectivity, power, gas fees.' },
        { label: 'Borrowed trust', content: 'Partnered with existing communities like Web3 Nigeria instead of trying to build trust from zero.' },
        { label: 'Rewarding progress', content: 'Set up systems that rewarded actual learning, not just social engagement.' }
      ]
    },
    mediaGallery: [
      { type: 'video', url: 'https://www.youtube.com/embed/XjZp6wWq7nI', caption: 'Regional Strategy Overview' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', caption: 'Local developer workshop session' }
    ],
    comprehensiveExecution: 'Ran a 3-city workshop tour alongside an ongoing bootcamp series, and managed Discord and Telegram myself with one rule: no developer question goes unanswered for more than 4 hours.',
    impactReport: {
      narrative: 'In under two months, Vara went from unknown to a name people in the Nigerian developer scene actually recognized.',
      achievements: [
        'Grew a 150+ member community with zero paid ads.',
        'Got developers actually building on Vara infrastructure.',
        'Positioned Vara as approachable and educator-first in the region.'
      ]
    }
  }
];

export const SKILLSET: Skill[] = [
  { title: 'Content Strategy', description: 'I develop clear content strategies and narratives that help Web3 and fintech products communicate their value effectively.' },
  { title: 'African Growth', description: 'I support Web3 and fintech teams expanding into African markets through strategy, positioning, and education-led growth.' },
  { title: 'Video Production', description: 'I create short-form and long-form video content, including UGC-style videos, for product explanation and social distribution.' },
];

export const EXPERIENCE: WorkExperience[] = [
  {
    period: '2023 - PRESENT',
    company: 'Vara Network',
    role: 'African Ambassador — Layer 1 Blockchain',
    description: 'Led content and ecosystem-facing initiatives across African markets, growing an active community to 150+ members within six weeks.',
    highlights: [
      'Built a strong concentration of experienced developers.',
      'Organized developer workshops and onboarding sessions with Web3 Nigeria and Onchain Society.',
      'Focused on education, adoption, and on-chain participation.'
    ],
    logo: 'https://vara.network/favicon.ico'
  },
  {
    period: '2023 - PRESENT',
    company: 'VaraNames',
    role: 'Co-Founder & Content Lead',
    description: 'Co-founded the first naming protocol on the Vara Network, leading content strategy and visual communication.',
    highlights: [
      'Defined how the protocol is explained and positioned.',
      'Live product with ongoing work on messaging and ecosystem visibility.',
      'Managed all user-facing educational materials.'
    ],
    logo: '/logos/vns.png'
  },
  {
    period: '2024 - PRESENT',
    company: 'Kamino Finance',
    role: 'Confluence — Exclusive Content Program',
    description: 'Selected participant in an exclusive creator initiative by Kamino, a leading DeFi and liquidity protocol on Solana.',
    highlights: [
      'Contributed educational and ecosystem-focused content.',
      'Part of a curated Solana-native creator cohort.',
      'Produced high-fidelity technical breakdowns for the Solana ecosystem.'
    ],
    logo: 'https://app.kamino.finance/favicon.ico'
  },
  {
    period: '2023 - PRESENT',
    company: 'Solflare',
    role: 'Solflare Guardian & Community Contributor',
    description: 'Guardian for one of the leading wallets in the Solana ecosystem, focused on security and education.',
    highlights: [
      'Contributed to user support and community education.',
      'Helped users understand security practices and on-chain interactions.',
      'Active advocate for the Solana community.'
    ],
    logo: 'https://solflare.com/favicon.ico'
  },
  {
    period: '2023 - PRESENT',
    company: 'SuperteamNG',
    role: 'Ecosystem Contributor',
    description: 'Contributor to the talent and builder layer of the Solana ecosystem, specifically the Nigerian branch.',
    highlights: [
      'Shipped content supporting Solana-native projects.',
      'Contributed to creator-led growth across African Web3.',
      'Developed ecosystem education and visibility initiatives.'
    ],
    logo: '/logos/superteam_ng.png'
  },
  {
    period: '2024 - PRESENT',
    company: 'Balooga.bet',
    role: 'Content Strategist',
    description: 'Led narrative direction and content structure for a Web3 betting platform.',
    highlights: [
      'Shaped user-facing messaging for clarity and engagement.',
      'Improved product positioning through structured storytelling.',
      'Led the communication strategy for new feature launches.'
    ],
    logo: '/logos/balooga.png'
  },
  {
    period: 'PAST ROLE',
    company: 'Nesa AI',
    role: 'Community & Content Strategy',
    description: 'Handled community-facing communication and content strategy during an earlier stage of the product.',
    highlights: [
      'Simplified complex messaging for easier user onboarding.',
      'Strengthened product value communication to the community.',
      'Boosted ecosystem visibility through consistent engagement.'
    ],
    logo: '/logos/nesa.png'
  }
];

export const TWEETS: TweetItem[] = [
  { url: 'https://x.com/Divo_Creates/status/1973803585348481259' },
  { url: 'https://x.com/Divo_Creates/status/1920799697318371459' },
  { url: 'https://x.com/Divo_Creates/status/1919202618288787682' },
  { url: 'https://x.com/Divo_Creates/status/1918971546023973269' },
  { url: 'https://x.com/Divo_Creates/status/1912223563077284112' },
  { url: 'https://x.com/Divo_Creates/status/1910411801084277004' },
  { url: 'https://x.com/Divo_Creates/status/1862647146551415050' },
  { url: 'https://x.com/Divo_Creates/status/1861766832278978856' },
  { url: 'https://x.com/Divo_Creates/status/1858283295483511091' },
  { url: 'https://x.com/Divo_Creates/status/1852045809933783348' },
];

export const TOOLS = [
  { name: 'Premiere Pro', category: 'Video Editing', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
  { name: 'After Effects', category: 'Motion Graphics', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' },
  { name: 'Discord', category: 'Community Management', icon: '/logos/discord_new.png' },
  { name: 'Figma', category: 'UI/UX Design', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { name: 'Notion', category: 'Knowledge Management', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg' },
  { name: 'CapCut', category: 'Short-Form Video', icon: '/logos/capcut.png' },
  { name: 'AI Suite', category: 'GenAI & Automation', icon: 'sparkles' },
  { name: 'Workspace', category: 'Collaboration', icon: '/logos/workspace.png' },
];

// NOTE FOR DIVO: These entries should be real, dated milestones you can stand behind.
// Edit freely — add real dates/cities as they happen. Keep it factual; no invented quotes.
export const FIELD_LOG: FieldLogEntry[] = [
  { id: '1', time: 'WK 1', city: 'PARTNERSHIP', entry: 'Vara Network African ambassador program kicks off.' },
  { id: '2', time: 'WK 6', city: 'MILESTONE', entry: 'Builder community crosses 150 active members — zero paid ads.' },
  { id: '3', time: 'ONGOING', city: 'COMMUNITY', entry: 'Developer workshops run alongside Web3 Nigeria & Onchain Society.' },
  { id: '4', time: 'ONGOING', city: 'REMOTE', entry: 'Selected for Kamino Finance\u2019s Confluence content cohort.' },
  { id: '5', time: 'ONGOING', city: 'REMOTE', entry: 'Solflare Guardian — community security & education.' },
  { id: '6', time: 'ONGOING', city: 'LAUNCH', entry: 'Co-founded VaraNames, first naming protocol on Vara.' },
];

export const MARQUEE_TAGS = [
  'Web3 Growth', 'Content Strategy', 'Video Production', 'Vara Network', 'Technical Writing'
];

export const FOOTER_TAGS = [
  'Growth Strategy', 'Video Production', 'Community Building', 'Technical Writing', 'Brand Identity', 'Regional Expansion', 'Product Launch'
];

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Megaphone': return <Megaphone className="w-6 h-6" />;
    case 'Film': return <Film className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'FileText': return <FileText className="w-6 h-6" />;
    case 'Palette': return <Palette className="w-6 h-6" />;
    case 'Globe': return <Globe className="w-6 h-6" />;
    case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'Rocket': return <Rocket className="w-6 h-6" />;
    case 'Briefcase': return <Briefcase className="w-6 h-6" />;
    case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6" />;
    case 'Box': return <Box className="w-6 h-6" />;
    default: return <Zap className="w-6 h-6" />;
  }
};
