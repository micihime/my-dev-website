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
        I started my career with .NET and C#, and somewhere along the way I fell in love 
        with the frontend side of things — the part where logic meets what people actually 
        see and use. These days I focus mostly on React, but I still find it useful to 
        understand what&apos;s happening on the backend.
      </p>
      <p>
        What I love most about web development is that it never lets me get bored — 
        there&apos;s always a tricky problem to untangle, and then the satisfaction of seeing 
        the result actually work.
      </p>
      <SkillList />
      <p>
        Outside of code, I&apos;ve been part of Toastmasters for a while, which has made me 
        a lot more comfortable speaking up, giving feedback, and being honest when something 
        could be better.
      </p>
    </main>
  );
}
