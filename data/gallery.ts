/**
 * Gallery images. Drop real photographs into /public/images/gallery/
 * using the `image` path below (filenames are suggestions — update the
 * path to match whatever you actually place there). Until a real photo
 * exists at that path, the gallery shows an elegant
 * "Photo coming soon" placeholder instead of a broken image.
 */

import { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Education", caption: "Education programmes", image: "/images/gallery/education-1.jpg" },
  { id: "g2", category: "Healthcare", caption: "Healthcare programmes", image: "/images/gallery/healthcare-1.jpg" },
  { id: "g3", category: "Environment", caption: "Environment programmes", image: "/images/gallery/environment-1.jpg" },
  { id: "g4", category: "Community", caption: "Community welfare", image: "/images/gallery/community-1.jpg" },
  { id: "g5", category: "Youth", caption: "Youth development", image: "/images/gallery/youth-1.jpg" },
  { id: "g6", category: "Culture", caption: "Tamil heritage & culture", image: "/images/gallery/culture-1.jpg" },
  { id: "g7", category: "Food Distribution", caption: "Food distribution", image: "/images/gallery/food-1.jpg" },
  { id: "g8", category: "Events", caption: "Trust events", image: "/images/gallery/events-1.jpg" },
];

export const galleryCategories = [
  "All",
  "Education",
  "Healthcare",
  "Environment",
  "Community",
  "Youth",
  "Culture",
  "Food Distribution",
  "Events",
] as const;
