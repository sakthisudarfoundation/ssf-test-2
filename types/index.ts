export interface ObjectiveGroup {
  slug: string;
  title: string;
  tamil?: string;
  icon: string;
  items: string[];
  color: "deep" | "emerald" | "gold";
}

export interface Program {
  slug: string;
  title: string;
  category: string;
  description: string;
  impact: { label: string; value: string }[];
  color: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  category: string;
  caption: string;
  image: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image?: string;
  content?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
