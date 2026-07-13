interface BuildStructuredDataParams {
  description: string;
  ogImageUrl: string;
  site: URL | undefined;
}

export function buildStructuredData({
  description,
  ogImageUrl,
  site,
}: BuildStructuredDataParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Wurst & Ale Demo",
    description,
    image: ogImageUrl,
    url: site,
    telephone: "+17735551234",
    email: "wurstale@example.com",
    priceRange: "$$",
    servesCuisine: ["American", "Polish", "Pub Food"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "3401 N. Southport Ave.",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60657",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.943743271234666,
      longitude: -87.66618562391207,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "15:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "22:00",
      },
    ],
    hasMenu: [
      {
        "@type": "Menu",
        name: "Food Menu",
        url: new URL("/food-menu", site).toString(),
      },
      {
        "@type": "Menu",
        name: "Beer Menu",
        url: new URL("/beer-menu", site).toString(),
      },
    ],
  };
}
