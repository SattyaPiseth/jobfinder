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
  const defaultThumbnail = "";
  const image = thumbnail || defaultThumbnail;

  return (
    <Helmet>
      <title>{title ? `${title} - Find Your Dream Job | Job Quick` : "Find Your Dream Job | Job Quick"}</title>
      <meta name="title" content={title || "Find Your Dream Job | Job Quick"} />
      <meta name="description" content={description || "Explore thousands of job opportunities across various industries on Job Quick. Find jobs that match your skills and start your career today."} />
      <meta name="author" content={author || "Job Quick Team"} />
      <meta name="keywords" content={keywords || "jobs, careers, employment, job search, job opportunities, job portal, online jobs, find jobs, apply for jobs, career opportunities, hiring, job vacancies"} />
      <meta name="thumbnail" content={image} />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title || "Find Your Dream Job | Job Quick"} />
      <meta property="og:description" content={description || "Explore thousands of job opportunities across various industries on Job Quick. Find jobs that match your skills and start your career today."} />
      <meta property="og:image" content={image} />
      <meta name="twitter:creator" content={author || "Job Quick Team"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Find Your Dream Job | Job Quick"} />
      <meta name="twitter:description" content={description || "Explore thousands of job opportunities across various industries on Job Quick. Find jobs that match your skills and start your career today."} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Metadata;
