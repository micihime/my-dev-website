import type { MetaFunction } from "@netlify/remix-runtime";
import SkillList from "~/components/SkillList";

const SITE_URL = "https://mitchie.dev";

export const meta: MetaFunction = () => {
  const title = "Technical Skills | Miroslava Hreško";
  const description =
    "Expertise in .NET, C#, React, and modern web development technologies. Full stack development skills and professional experience.";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "technical skills, .NET, C#, React, full stack developer, frontend development, web development",
    },
    { name: "author", content: "Miroslava Hreško" },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/skills` },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/skills` },
    { property: "og:image", content: `${SITE_URL}/img/profile.jpg` },
    // Twitter Card
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${SITE_URL}/img/profile.jpg` },
  ];
};

export default function Index() {
  return (
    <main className="content">
      <h1>Skills</h1>
      <p>
        With a background in both frontend and backend development, I enjoy
        building intuitive and efficient web applications. My journey began with
        .NET and C#, but my passion for user experience led me to focus on
        frontend development with React. Beyond technical skills, my experience
        in Toastmasters has strengthened my ability to communicate clearly,
        making me an effective collaborator in any team.
      </p>
      <SkillList />
      <p>
        I love web development because it allows me to combine my logical side
        with my creative side. Solving technical challenges and seeing the
        results come to life in an interactive way is very rewarding. It&apos;s
        a mix of problem-solving and design that keeps me engaged.
      </p>
    </main>
  );
}
