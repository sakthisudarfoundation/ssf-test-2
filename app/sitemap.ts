import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sakthisudarfoundation.org";
  const routes = [
    "", "/about", "/objectives", "/programs", "/projects",
    "/gallery", "/news", "/donate", "/volunteer", "/team", "/contact",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
