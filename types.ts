
export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  longDescription?: string;
  features?: string[];
  methodology?: { step: string; detail: string }[];
  image: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export interface Insight {
  id: string;
  category: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  metric: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Advisor {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface HeroSlide {
  id: number;
  type: 'video' | 'image';
  url: string;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
}
