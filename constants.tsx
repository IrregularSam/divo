
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
import { Service, Skill, WorkExperience, PortfolioItem, Testimonial, CaseStudy } from './types';

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
    description: 'A comprehensive ecosystem reporting system that transformed fragmented data into a unified daily narrative for 100k+ builders.',
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
    executiveSummary: 'This initiative established a rapid-response content series designed to solve the chronic fragmentation of information in the Solana ecosystem. By curating high-signal updates into a single, cohesive daily narrative, this series became the go-to strategic resource for founders, venture capitalists, and core developers who lack the time to monitor the timeline 24/7.',
    marketContext: 'The Solana ecosystem represents one of the fastest-moving technical landscapes in Web3. With over 2,500 monthly active developers and hundreds of project launches weekly, the information density is overwhelming. Stakeholders traditionally spent 2-3 hours daily just attempting to separate legitimate protocol upgrades from marketing noise.',
    theChallenge: 'Critical infrastructure updates, governance shifts, and DeFi liquidity migrations were frequently obscured by engagement-farming and low-quality discourse. Founders were missing key partnership opportunities simply because they could not find the signal. There was no authoritative, "no-fluff" daily briefing that respected the reader\'s time while maintaining technical depth.',
    strategicDeepDive: {
      title: 'The Signal-First Framework',
      points: [
        { label: 'Verification Protocol', content: 'Implementing a multi-step verification process for every curated update, cross-referencing GitHub commits and on-chain activity before publication.' },
        { label: 'Narrative Compression', content: 'Using linguistic precision to condense 500-word technical medium posts into 20-word high-impact summaries without losing nuance.' },
        { label: 'Habit Formation', content: 'Establishing a strict "09:00 UTC" publishing window to anchor the series in the daily routine of global ecosystem participants.' }
      ]
    },
    mediaGallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=800', caption: 'Visual representation of information flow' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800', caption: 'Data curation dashboard' }
    ],
    comprehensiveExecution: 'Our team developed a custom monitoring stack watching over 150 primary sources including Discord developer channels, GitHub repositories, and governance forums. We moved beyond simple aggregation; we performed contextual synthesis. For every infra change, we answered: "Why does this matter for the user?". The execution required a 24/7 rotational shift to ensure no critical "breaking" news was missed, resulting in a perfectly unbroken streak of high-value daily reporting.',
    impactReport: {
      narrative: 'The reporting engine became so vital that it was frequently cited in project board meetings as a source of market intelligence.',
      achievements: [
        'Established the highest signal-to-noise ratio in Solana social media.',
        'Secured consistent amplification from Solana Foundation and major protocol CEOs.',
        'Successfully transitioned from a simple thread into a recognized ecosystem institution.'
      ]
    }
  },
  {
    id: '2',
    type: 'DeFi Educational Content Series',
    title: 'The Marinade Liquid Staking Crusade',
    description: 'A 30-day deep-dive campaign that demystified liquid staking primitives and increased protocol comprehension for thousands of users.',
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
    executiveSummary: 'This sustained 30-day educational campaign focused on demystifying liquid staking—a core DeFi primitive that remains technically intimidating to the average user. By breaking down Marinade’s complex value proposition into 30 atomic, compelling arguments, we successfully bridge the gap between protocol utility and user comprehension.',
    marketContext: 'Liquid staking tokens (LSTs) are the backbone of a healthy DeFi ecosystem. However, in mid-2023, many users perceived mSOL as "risky" or "complex," preferring simple native staking. There was a massive educational vacuum regarding how LSTs actually work to decentralize the network while unlocking liquidity.',
    theChallenge: 'Marinade Finance, despite being a pioneer, faced a plateau in new user acquisition. The existing documentation was highly technical and geared toward power users. The challenge was to create a "zero-to-one" educational funnel that could convert a native staker into an active DeFi participant using mSOL.',
    strategicDeepDive: {
      title: 'The Progressive Complexity Ladder',
      points: [
        { label: 'Atomic Education', content: 'Isolation of one single benefit per day (e.g., immediate liquidity, tax efficiency, decentralization score) to prevent cognitive overload.' },
        { label: 'Visual Metaphors', content: 'Creating high-fidelity motion graphics that compared staking to familiar financial concepts.' },
        { label: 'Social Proofing', content: 'Integrating community testimonials and real-world yield case studies into the educational narrative.' }
      ]
    },
    mediaGallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1611974714658-dd47245bd611?auto=format&fit=crop&q=80&w=800', caption: 'DeFi visual analytics' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=800', caption: 'Staking yield comparisons' }
    ],
    comprehensiveExecution: 'We developed a content calendar that moved from "Passive Yield" (Day 1-10) to "Composability" (Day 11-20) and finally to "Governance & Security" (Day 21-30). Each post was accompanied by a custom visual asset that simplified the underlying code into a user benefit. We also monitored sentiment daily, pivoting our messaging on Day 15 to address specific community fears regarding smart contract risk.',
    impactReport: {
      narrative: 'The campaign didn\'t just generate views; it generated understanding. Community feedback shifted from "how does this work?" to "where can I use mSOL next?".',
      achievements: [
        '30 days of consistent, high-fidelity technical storytelling.',
        'Zero drop-off in engagement from Day 1 to Day 30.',
        'Directly quoted by ecosystem leaders as a masterclass in DeFi product marketing.'
      ]
    }
  },
  {
    id: '3',
    type: 'Product Walkthrough Content Series',
    title: 'The deBridge Feature Spotlight',
    description: 'Transforming technical cross-chain documentation into a feature-by-feature masterclass for the multi-chain future.',
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
    executiveSummary: 'Infrastructure is often invisible until it breaks. For deBridge, a leader in cross-chain interoperability, we created a product-led content series that made "invisible infra" visible and understandable. We moved away from "bridge talk" and toward "empowerment narratives."',
    marketContext: 'In a post-bridge-hack world, users are understandably terrified of cross-chain movement. The market was flooded with generic "fast and cheap" marketing. Users were looking for "safe and professional," but didn\'t have the technical knowledge to verify the claims.',
    theChallenge: 'deBridge has unique technical advantages (0.1s settlement, intent-based routing) that are hard to explain without a CS degree. The challenge was to communicate these advanced safety features to a retail audience who just wants their assets moved safely.',
    strategicDeepDive: {
      title: 'Human-Centric Infrastructure',
      points: [
        { label: 'The Use-Case Anchor', content: 'Instead of explaining "Routing Logic," we explained "How to catch a price dip on Base using Solana assets."' },
        { label: 'Risk Transparency', content: 'Directly addressing how deBridge handles security, turning a "boring" topic into a competitive advantage.' },
        { label: 'Interactive Demos', content: 'Coordinating short-form video walkthroughs of every button in the UI.' }
      ]
    },
    mediaGallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', caption: 'Infrastructure node network' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', caption: 'Digital connectivity' }
    ],
    comprehensiveExecution: 'We produced 12 deep-dive technical threads and 8 UGC-style videos. Each piece of content was designed to be modular—able to be used by the customer support team as a response to common user questions. We turned the content into a living FAQ that built trust through transparency.',
    impactReport: {
      narrative: 'The campaign resulted in a marked shift in deBridge\'s brand perception from "another bridge" to "professional cross-chain infrastructure."',
      achievements: [
        'Reduced support tickets by providing clear feature walkthroughs.',
        'Established deBridge as an educational leader in the interoperability space.',
        'Increased utilization of advanced features like limit orders and selective routing.'
      ]
    }
  },
  {
    id: '4',
    type: 'Ecosystem Growth & Community',
    title: 'Vara Network: Africa Expansion Strategy',
    description: 'A developer-first regional growth initiative that established a high-value community footprint in the Nigerian Web3 market.',
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
    executiveSummary: 'This comprehensive growth initiative focused on establishing Vara Network’s footprint in the African Web3 market. Moving beyond the "airdrop hunter" meta, we prioritized high-quality developer onboarding and localized education to build a sustainable, building-first community.',
    marketContext: 'Nigeria is a top-5 global market for crypto adoption. However, most L1/L2 networks enter the market with shallow marketing that fails to capture the immense technical talent in the region. There is a deep hunger for actual technical mentorship and builder resources.',
    theChallenge: 'Vara Network was unknown in the region. We had to compete for developer attention against much larger, established foundations. We needed a strategy that felt "local" and "value-heavy" rather than "corporate" and "distant."',
    strategicDeepDive: {
      title: 'The "Builder-First" Local Flywheel',
      points: [
        { label: 'Technical Localism', content: 'Tailoring workshop curriculum to the specific challenges of local developers (connectivity, power, high gas fees).' },
        { label: 'Partnership Gravity', content: 'Integrating with existing trusted communities like Web3 Nigeria to bypass the initial trust-building phase.' },
        { label: 'Incentivized Education', content: 'Creating "proof of learning" systems that rewarded technical progress over simple social engagement.' }
      ]
    },
    mediaGallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', caption: 'Local developer workshop session' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800', caption: 'Community networking event' }
    ],
    comprehensiveExecution: 'We launched a 3-city workshop tour combined with a digital "Bootcamp" series. We managed local Discord and Telegram channels with a focus on technical support, ensuring no developer question went unanswered for more than 4 hours. We acted as the bridge between the global core team and the local reality.',
    impactReport: {
      narrative: 'In less than two months, Vara became a recognized name in the Nigerian developer ecosystem, with multiple teams currently building production-ready apps.',
      achievements: [
        'Built a 150+ member community with zero paid ads.',
        'Successfully transitioned 20+ developers to build on Vara infrastructure.',
        'Established Vara as a supportive, educator-first ecosystem in the region.'
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
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Vara&backgroundColor=000000&fontFamily=Space+Grotesk&fontWeight=700'
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
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=VN&backgroundColor=00ffa3&fontFamily=Space+Grotesk&fontWeight=700'
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
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Kamino&backgroundColor=6366f1&fontFamily=Space+Grotesk&fontWeight=700'
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
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Solflare&backgroundColor=f59e0b&fontFamily=Space+Grotesk&fontWeight=700'
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
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=ST&backgroundColor=8b5cf6&fontFamily=Space+Grotesk&fontWeight=700'
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
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=BL&backgroundColor=ec4899&fontFamily=Space+Grotesk&fontWeight=700'
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
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=NA&backgroundColor=1e293b&fontFamily=Space+Grotesk&fontWeight=700'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { title: 'Vara Network Intro', thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800' },
  { title: 'VaraNames Explained', thumbnail: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=800' },
  { title: 'DeFi Education Series', thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800' },
  { title: 'Event Recap: ETH Safari', thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df88?auto=format&fit=crop&q=80&w=800' },
  { title: 'Technical Breakdown', thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { title: 'Community Highlights', thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I design motion graphics and static visuals that support product storytelling and marketing communication.",
    author: "Johnson, CEO BUIO",
    role: "Fintech Partner",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Johnson'
  },
];

export const TOOLS = [
  { name: 'Premiere Pro', category: 'Video Editing', icon: 'https://api.dicebear.com/7.x/initials/svg?seed=Pr&backgroundColor=00005b&textColor=ffffff' },
  { name: 'After Effects', category: 'Motion Graphics', icon: 'https://api.dicebear.com/7.x/initials/svg?seed=Ae&backgroundColor=00005b&textColor=ffffff' },
  { name: 'Figma', category: 'UI/UX Design', icon: 'https://api.dicebear.com/7.x/initials/svg?seed=F&backgroundColor=f24e1e&textColor=ffffff' },
  { name: 'Photoshop', category: 'Image Manipulation', icon: 'https://api.dicebear.com/7.x/initials/svg?seed=Ps&backgroundColor=001e36&textColor=ffffff' },
  { name: 'CapCut', category: 'Short-Form Video', icon: 'https://api.dicebear.com/7.x/initials/svg?seed=CC&backgroundColor=000000&textColor=ffffff' },
  { name: 'Notion', category: 'Project Management', icon: 'https://api.dicebear.com/7.x/initials/svg?seed=N&backgroundColor=ffffff&textColor=000000' },
  { name: 'AI Suite', category: 'GenAI & Automation', icon: 'sparkles' },
  { name: 'Workspace', category: 'Collaboration', icon: 'https://api.dicebear.com/7.x/initials/svg?seed=G&backgroundColor=4285f4&textColor=ffffff' },
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
