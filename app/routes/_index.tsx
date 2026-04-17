import type { MetaFunction } from "@netlify/remix-runtime";

const SITE_URL = "https://mhresko.com";

export const meta: MetaFunction = () => {
  const title = "Miroslava Hreško | Developer";
  const description =
    "Frontend Developer passionate about bringing designs to life with clean, responsive React code. Based in Prague, working remotely.";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "frontend developer, React developer, web developer, Prague, remote developer",
    },
    { name: "author", content: "Miroslava Hreško" },
    { tagName: "link", rel: "canonical", href: SITE_URL },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
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
    <main>
      <section className="about-me">
        <img src="/img/profile.jpg" alt="Miroslava Hreško - Frontend Developer" width="150" height="150" />
        <h1>Miroslava Hreško</h1>
      </section>
      <section className="content">
        <p>
          I started my career building .NET backends and gradually found my passion in frontend, 
          particularly React and TypeScript. Today I bring both perspectives to the table, which 
          helps me build things that work well end-to-end.
        </p>
        <p>
          I do my best work in teams where good code review is the norm and there&apos;s always 
          something new to learn. I&apos;m based in Prague, working remotely. Let&apos;s connect
          and build something great together!</p>
      </section>
    </main>
  );
}
