import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={loc.url.href} />
      <meta property="og:title" content={head.title || "White Flower Guest"} />
      <meta
        property="og:description"
        content={
          head.meta.find((m) => m.name === "description")?.content ||
          "White Flower Guest offers comfortable accommodation very close to Unawatuna Beach, Sri Lanka."
        }
      />
      <meta property="og:image" content={`${loc.url.origin}/images/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={loc.url.href} />
      <meta name="twitter:title" content={head.title || "White Flower Guest"} />
      <meta
        name="twitter:description"
        content={
          head.meta.find((m) => m.name === "description")?.content ||
          "White Flower Guest offers comfortable accommodation very close to Unawatuna Beach, Sri Lanka."
        }
      />
      <meta name="twitter:image" content={`${loc.url.origin}/images/og-image.jpg`} />

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}

      {/* Structured Data - Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "White Flower Guest",
          image: `${loc.url.origin}/images/hero-beach.jpg`,
          "@id": loc.url.href,
          url: loc.url.origin,
          telephone: "+94XXXXXXXXX",
          address: {
            "@type": "PostalAddress",
            streetAddress: "159 Devala Rd Unawatuna",
            addressLocality: "Unawatuna",
            postalCode: "80600",
            addressCountry: "LK",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "5.9833",
            longitude: "80.2500",
          },
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "9.0",
            reviewCount: "8",
            bestRating: "10",
            worstRating: "1",
          },
        })}`}
      />
    </>
  );
});
