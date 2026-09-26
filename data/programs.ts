/**
 * Programs shown on the Home and Programs pages.
 *
 * These map directly to the trust's stated objectives (see
 * data/objectives.ts). Impact figures are intentionally left as
 * "coming soon" rather than invented numbers — replace `impact` with
 * real, reportable figures once available.
 */

import { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "education",
    title: "Education",
    category: "Education",
    description:
      "Free computer education, coaching centres, scholarships, skill development and exam coaching, working toward the trust's education objectives.",
    impact: [],
    color: "from-deep to-deep-light",
    image: "/images/education/computer-education.jpg",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    category: "Healthcare",
    description:
      "Medical assistance, clinical support, child healthcare and nutrition, mental health support and yoga centres.",
    impact: [],
    color: "from-emerald to-emerald-light",
    image: "/images/healthcare/healthcare.jpg",
  },
  {
    slug: "environment",
    title: "Environment",
    category: "Environment",
    description:
      "Tree plantation, river and water body restoration, rainwater conservation and awareness of natural living.",
    impact: [],
    color: "from-gold to-gold-light",
    image: "/images/environment/tree-plantation.jpg",
  },
  {
    slug: "social-welfare",
    title: "Social Welfare",
    category: "Social Welfare",
    description:
      "Free food and clothing distribution, support for old age homes and women's hostels, and disaster relief.",
    impact: [],
    color: "from-[#5b3a12] to-[#8a611f]",
    image: "/images/programs/food-distribution.jpg",
  },
  {
    slug: "tamil-heritage",
    title: "Tamil Heritage",
    category: "Tamil Heritage",
    description:
      "Research and publications on Tamil language and culture, including a planned Tamil-language magazine.",
    impact: [],
    color: "from-[#7a1f3d] to-[#a8365a]",
    image: "/images/programs/tamil-culture.jpg",
  },
  {
    slug: "youth-development",
    title: "Youth Development",
    category: "Youth Development",
    description:
      "Sports, cultural development, skill training and leadership programmes for young people.",
    impact: [],
    color: "from-[#264653] to-[#2a9d8f]",
    image: "/images/programs/skill-development.jpg",
  },
];
