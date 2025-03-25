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
  imageUrl?: string;
  technologies?: string[];
}

export default function Project({
  title,
  paragraphs,
  link,
  sourceCodeUrl,
  imageUrl,
  technologies,
}: ProjectProps) {
  return (
    <div className={styles.project}>
      {imageUrl && (
        <div className={styles.projectImage}>
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className={styles.projectContent}>
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {technologies && (
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className={styles.projectLinks}>
          {link && (
            <a href={link.url} className={styles.demoLink}>
              {link.text}
              {link.additionalText && ` ${link.additionalText}`}
            </a>
          )}
          <a href={sourceCodeUrl} className={styles.repoLink}>
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
