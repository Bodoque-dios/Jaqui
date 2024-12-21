import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Famago",
  tagline: "Muebles de diseño industrial de alta calidad",
  description: "Famago ofrece muebles de diseño industrial de alta calidad, ideales para el hogar y la oficina, fabricados con orgullo en Chile. Explora nuestra colección y contacta a nuestro equipo de ventas para obtener productos de calidad superior y confiabilidad.",
  description_short: "Famago ofrece muebles de diseño industrial de alta calidad, ideales para el hogar y la oficina.",
  url: "https://famago.cl",
  author: "Matías Olea",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-CL",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_CL",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Muebles de diseño industrial de alta calidad`,
  description: "Descubre los muebles de diseño industrial de alta calidad de Famago, ideales para el hogar y la oficina. Fabricados con orgullo en Chile, nuestros productos ofrecen simplicidad, asequibilidad y confiabilidad. Explora nuestra colección ahora y experimenta la diferencia.",
  image: ogImageSrc,
};

export const whatsapplink = "https://wa.me/56994400000";