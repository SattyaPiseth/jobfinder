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
  const fullUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Helmet>
      {/* Title Tag */}
      <title>
        {title ? `${title} | Job Quick` : "Job Quick"}
      </title>
      <meta name="title" content={title || "Find Your Dream Job | Job Quick"} />

      {/* Meta Tags */}
      <meta
        name="description"
        content={
          description ||
          "Explore thousands of job opportunities with Job Quick. Find jobs that match your skills and advance your career."
        }
      />
      <meta name="author" content={author || "Job Quick Team"} />
      <meta
        name="keywords"
        content={
          keywords ||
          "jobs, careers, employment, job search, job opportunities, job portal, online jobs"
        }
      />
      <meta name="thumbnail" content={image} />

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
          "Explore thousands of job opportunities with Job Quick. Find jobs that match your skills and advance your career."
        }
      />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title || "Find Your Dream Job | Job Quick"}
      />
      <meta
        name="twitter:description"
        content={
          description ||
          "Explore thousands of job opportunities with Job Quick. Find jobs that match your skills and advance your career."
        }
      />
      <meta name="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default Metadata;
