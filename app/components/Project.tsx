import React from "react";
import styles from "./Project.module.css";

interface ProjectProps {
  title: string;
  paragraphs: React.ReactNode[];
  link?: {
    url: string;
    text: string;
    additionalText?: string;
  };
  sourceCodeUrl: string;
}

export default function Project({
  title,
  paragraphs,
  link,
  sourceCodeUrl,
}: ProjectProps) {
  return (
    <div className={styles.project}>
      <h2>{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p>
        {link && (
          <>
            <a href={link.url}>{link.text}</a>
            {link.additionalText && ` ${link.additionalText} `}
          </>
        )}
        <a href={sourceCodeUrl}>This</a> is the repository.
      </p>
    </div>
  );
}
