import React from "react";
import { Helmet } from "react-helmet-async";

const Metadata = ({
  title,
  description,
  author,
  keywords,
  thumbnail,
  url,
  type,
}) => {
  const defaultThumbnail = "/default-thumbnail.jpg"; // Default image path
  const image = thumbnail || defaultThumbnail;
  const fullUrl = url || window.location.href;

  return (
    <Helmet>
      {/* Title Tag */}
      <title>
        {title ? `${title} - Job Quick` : "Find Your Dream Job | Job Quick"}
      </title>
      <meta name="title" content={title || "Find Your Dream Job | Job Quick"} />

      {/* Meta Description */}
      <meta
        name="description"
        content={
          description ||
          "Explore thousands of job opportunities across various industries on Job Quick. Find jobs that match your skills and start your career today."
        }
      />
      <meta name="author" content={author || "Job Quick Team"} />

      {/* Meta Keywords */}
      <meta
        name="keywords"
        content={
          keywords ||
          "jobs, careers, employment, job search, job opportunities, job portal, online jobs, find jobs, apply for jobs, career opportunities, hiring, job vacancies"
        }
      />
      <meta name="thumbnail" content={image} />
      <meta property="og:url" content={url || window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type || "website"} />
      <meta
        property="og:title"
        content={title || "Find Your Dream Job | Job Quick"}
      />
      <meta
        property="og:description"
        content={
          description ||
          "Explore thousands of job opportunities across various industries on Job Quick. Find jobs that match your skills and start your career today."
        }
      />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content={description || "Thumbnail image for Job Quick"}
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:creator" content={author || "Job Quick Team"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title || "Find Your Dream Job | Job Quick"}
      />
      <meta
        name="twitter:description"
        content={
          description ||
          "Explore thousands of job opportunities across various industries on Job Quick. Find jobs that match your skills and start your career today."
        }
      />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content={description || "Thumbnail image for Job Quick"}
      />

      {/* Canonical Link */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Job Quick",
          url: fullUrl,
          description:
            description ||
            "Explore thousands of job opportunities across various industries on Job Quick.",
          image: image,
          author: {
            "@type": "Organization",
            name: author || "Job Quick Team",
          },
        })}
      </script>
    </Helmet>
  );
};

export default Metadata;
