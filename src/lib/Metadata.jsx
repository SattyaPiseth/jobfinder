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
        {title ? `${title} | Job Quick` : "Find Your Dream Job | Job Quick"}
      </title>
      <meta name="description" content={
        description || 
        "Explore thousands of job opportunities across various industries with Job Quick. Find jobs that match your skills and advance your career."
      } />
      <meta name="author" content={author || "Job Quick Team"} />
      <meta name="keywords" content={
        keywords || 
        "jobs, careers, employment, job search, job opportunities, job portal, online jobs, find jobs, apply for jobs, career opportunities, hiring, job vacancies"
      } />

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title || "Find Your Dream Job | Job Quick"} />
      <meta property="og:description" content={
        description || 
        "Explore thousands of job opportunities across various industries with Job Quick. Find jobs that match your skills and advance your career."
      } />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description || "Job Quick thumbnail"} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Find Your Dream Job | Job Quick"} />
      <meta name="twitter:description" content={
        description || 
        "Explore thousands of job opportunities across various industries with Job Quick. Find jobs that match your skills and advance your career."
      } />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description || "Job Quick thumbnail"} />
      <meta name="twitter:creator" content={author || "Job Quick Team"} />

      {/* Canonical Link */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Job Quick",
          "url": fullUrl,
          "description": description || 
            "Explore thousands of job opportunities across various industries with Job Quick.",
          "image": image,
          "author": {
            "@type": "Organization",
            "name": author || "Job Quick Team",
          },
        })}
      </script>
    </Helmet>
  );
};

export default Metadata;
