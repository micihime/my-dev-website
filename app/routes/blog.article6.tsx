import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Understanding Client-Side Rendering (CSR) in Modern Web Apps | Mitchie's Dev Blog",
    },
    {
      name: "description",
      content:
        "Deep dive into Client-Side Rendering (CSR), including how it works, best use cases, and practical examples with React. Learn when and how to implement CSR in your web applications.",
    },
    {
      name: "keywords",
      content:
        "client-side rendering, CSR, React, JavaScript, web development, single-page applications, frontend development, web performance, SPA, dynamic websites",
    },
    {
      property: "og:title",
      content: "Client-Side Rendering (CSR) Explained | Modern Web Development",
    },
    {
      property: "og:description",
      content:
        "Comprehensive guide to Client-Side Rendering in modern web applications, with React examples and best practices.",
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
      content: "Client-Side Rendering, React, Web Development, JavaScript",
    },
  ];
};

export const handle = {
  structuredData: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Understanding Client-Side Rendering (CSR) in Modern Web Apps",
    author: {
      "@type": "Person",
      name: "Mitchie",
    },
    datePublished: "2024-01-20",
    description:
      "Deep dive into Client-Side Rendering (CSR), including how it works, best use cases, and practical examples with React.",
    articleSection: "Web Development",
    keywords: "client-side rendering, CSR, React, JavaScript, web development",
  },
};

export default function Index() {
  return (
    <article className="content">
      <h1>Client-Side Rendering (CSR)</h1>

      <section>
        <h2>What it is:</h2>
        <p>
          The HTML for a page is generated in the browser using JavaScript. The
          server sends a basic HTML structure (e.g., a div), and the browser
          fetches data and builds the page dynamically.
        </p>
      </section>

      <section>
        <h2>How it works:</h2>
        <ol>
          <li>
            The server sends an empty or minimal HTML file with JavaScript.
          </li>
          <li>
            The browser downloads the JavaScript, fetches data via APIs, and
            generates the content.
          </li>
          <li>
            The user sees the page after the JavaScript has finished running.
          </li>
        </ol>
      </section>

      <section>
        <h2>Best for:</h2>
        <p>
          Highly interactive applications where content changes often (e.g.,
          single-page apps like Gmail, Trello).
        </p>
      </section>

      <section>
        <h2>Example:</h2>
        <h3>A Social Media Feed:</h3>
        <p>
          Posts are fetched dynamically and displayed in the browser without
          reloading the page.
        </p>

        <div className="code-example">
          <h4>Code (React):</h4>
          {/* useEffect(() => {
            fetch('https://api.example.com/feed')
              .then((response) => response.json())
              .then((data) => setFeed(data));
          }, []); */}
        </div>
      </section>
    </article>
  );
}
