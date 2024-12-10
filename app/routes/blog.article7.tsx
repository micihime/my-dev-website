import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Static-Rendered Applications in Modern Web Dev | Mitchie's Dev Blog",
    },
    {
      name: "description",
      content:
        "Learn about static-rendered applications, their benefits, and implementation in modern web development. Covers build-time generation, use cases, and examples using Next.js and Gatsby.",
    },
    {
      name: "keywords",
      content:
        "static rendering, SSG, static site generation, Next.js, Gatsby, web development, build-time generation, static applications, performance optimization",
    },
    {
      property: "og:title",
      content:
        "Understanding Static-Rendered Applications | Modern Web Development",
    },
    {
      property: "og:description",
      content:
        "Comprehensive guide to static-rendered applications, including implementation strategies, frameworks, and real-world use cases.",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      name: "author",
      content: "Mitchie",
    },
    {
      property: "article:published_time",
      content: "2024-01-20",
    },
    {
      property: "article:section",
      content: "Web Development",
    },
    {
      property: "article:tag",
      content: "Static Rendering, Web Development, Performance, SSG",
    },
    // Add Twitter Card metadata
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Static-Rendered Applications in Modern Web Development",
    },
    {
      name: "twitter:description",
      content:
        "Learn about static-rendered applications, their benefits, and implementation in modern web development.",
    },
  ];
};

export default function Index() {
  return (
    <article className="content">
      <h1>Static-Rendered Applications</h1>

      <p>
        A static application is pre-generated at build time. The server serves
        prebuilt HTML files to users without needing to compute anything
        dynamically.
      </p>

      <h2>How It Works:</h2>
      <ul>
        <li>
          During deployment or build time, HTML files are created for each
          route.
        </li>
        <li>
          These files are stored and served to users without server-side
          computation.
        </li>
      </ul>

      <h2>Example:</h2>
      <h3>Static Blog:</h3>
      <p>A blog site where content doesn&apos;t change often.</p>

      <ul>
        <li>
          At build time, the blog content (markdown or database) is converted
          into HTML.
        </li>
        <li>Example frameworks: Next.js with getStaticProps, Gatsby, Hugo.</li>
      </ul>

      <h3>Use Case:</h3>
      <p>
        A blog, portfolio, or documentation site where updates happen
        infrequently.
      </p>

      <h3>Code Example:</h3>
      <pre>
        <code>
          {/* export async function getStaticProps() {
            const data = await fetch('https://api.example.com/posts');
            return {
              props: { posts: data },
            };
          } */}
        </code>
      </pre>
    </article>
  );
}
