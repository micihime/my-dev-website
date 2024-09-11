import type { MetaFunction } from "@netlify/remix-runtime";
import { IconMail } from "@tabler/icons-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "My projects" },
  ];
};

export default function Index() {
  return (
    <div className="content">
      <div className="flexi">
        <div>
          <p>Let&apos;s get in touch!</p>
          <p>
            Over the years, I&apos;ve developed strong backend skills with .NET and C#, working on API design, database management, and server-side logic. Recently, 
            I&apos;ve expanded my expertise into the frontend world, mastering React to create visually appealing and highly interactive user interfaces. I believe in 
            full-stack development and enjoy taking projects from concept to deployment.
          </p>
          <p>
            I&apos;m always open to exciting new opportunities and collaborations. Feel free to get in touch if you’d like to work together or simply share ideas.
            <a href="mailto:mitchie.code@gmail.com"><IconMail /></a>
          </p>
        </div>
        <img src="/img/contact.jpg" alt="profile" height="200"/>
      </div>
    </div>
  );
}