import React from "react";

interface ProjectProps {
  title: string;
  paragraphs: React.ReactNode[];
  link?: {
    url: string;
    text: string;
    additionalText?: string;
  };
  linkClassName?: string;
}

export default function Project({ title, paragraphs, link, linkClassName }: ProjectProps) {
  return (
    <div className="project">
      <h2>{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={index === paragraphs.length - 1 && link && linkClassName ? linkClassName : undefined}>
          {paragraph}
          {index === paragraphs.length - 1 && link && (
            <>
              <a href={link.url}>{link.text}</a>
              {link.additionalText && ` ${link.additionalText}`}
            </>
          )}
        </p>
      ))}
    </div>
  );
}
