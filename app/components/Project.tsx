import React from "react";
import styles from "./Project.module.css";

interface ProjectProps {
  title: string;
  children: React.ReactNode;
  link?: {
    url: string;
    text: string;
    additionalText?: string;
  };
  sourceCodeUrl?: string;
  imageUrl?: string;
  technologies?: string[];
}

export default function Project({
  title,
  children,
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
        <div className={styles.projectDescription}>{children}</div>
        <div className={styles.projectFooter}>
          {link && (
            <div className={styles.projectLinks}>
              <a href={link.url} className={styles.demoLink} target="_blank" rel="noopener noreferrer">
                {link.text}
                {link.additionalText && ` ${link.additionalText}`}
              </a>
              {sourceCodeUrl && (
                <a href={sourceCodeUrl} className={styles.repoLink} target="_blank" rel="noopener noreferrer">
                  View Source Code
                </a>
              )}
            </div>
          )}
          {technologies && (
            <div className={styles.technologies}>
              {technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
