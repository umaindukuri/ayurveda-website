import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SITE_NAME = "Dr. Kalyan Ayurveda";
const BASE_URL = "https://drkalyanayurveda.com";
const DEFAULT_IMAGE = `${BASE_URL}/images/hero_meditation_premium_0f0d5eb0.png`;
const DEFAULT_DESC =
  "Authentic Ayurvedic treatment in Hyderabad. Expert Panchakarma, fertility treatment, chronic disease management, and holistic wellness by Dr. Kalyan.";

export function SEO({
  title,
  description = DEFAULT_DESC,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Ayurveda & Panchakarma Center, Hyderabad`;
  const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const ogImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);
    setMeta("name", "robots", "index, follow");

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // Canonical
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
  }, [fullTitle, description, keywords, ogImage, canonicalUrl, type]);

  return null;
}

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}
