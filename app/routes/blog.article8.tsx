import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Understanding Incremental Static Regeneration (ISR) | Mitchie's Dev Blog",
    },
    {
      name: "description",
      content:
        "Learn about Incremental Static Regeneration (ISR) in modern web development, including how it works, best practices, and real-world examples with Next.js implementation.",
    },
    {
      name: "keywords",
      content:
        "Incremental Static Regeneration, ISR, Next.js, static generation, dynamic updates, web development, performance optimization, static sites, server-side rendering",
    },
    {
      property: "og:title",
      content:
        "Guide to Incremental Static Regeneration (ISR) | Modern Web Development",
    },
    {
      property: "og:description",
      content:
        "Comprehensive guide to ISR, combining benefits of static generation with dynamic content updates in modern web applications.",
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
      content: "ISR, Next.js, Web Development, Performance",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "Understanding Incremental Static Regeneration (ISR) in Modern Web Apps",
    },
    {
      name: "twitter:description",
      content:
        "Deep dive into ISR, including implementation strategies, use cases, and practical examples with Next.js.",
    },
  ];
};

export default function Index() {
  return (
    <article className="content">
      <h1>Incremental Static Regeneration (ISR)</h1>

      <section>
        <h2>What it is:</h2>
        <p>
          A combination of static and dynamic rendering. ISR allows prebuilt
          static pages to be updated incrementally (e.g., every 10 seconds)
          without rebuilding the entire site.
        </p>
      </section>

      <section>
        <h2>How it works:</h2>
        <ol>
          <li>At build time, static HTML is generated.</li>
          <li>
            When a user requests the page after the specified interval (e.g., 10
            seconds), the server regenerates the HTML with the latest data.
          </li>
          <li>
            The new HTML replaces the old one and is served to future users.
          </li>
        </ol>
      </section>

      <section>
        <h2>Best for:</h2>
        <p>
          Pages with content that changes frequently but doesn&apos;t need to be
          updated in real-time (e.g., news, e-commerce listings).
        </p>
      </section>

      <section>
        <h2>Example:</h2>
        <p>
          News Website: Headlines are pre-rendered but updated every 60 seconds
          to show the latest news.
        </p>
      </section>

      <section>
        <h2>Code (Next.js):</h2>
        <pre>
          {`
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/news');
  return { props: { news: data }, revalidate: 60 }; // Update every 60 seconds
}
          `}
        </pre>
      </section>
    </article>
  );
}
