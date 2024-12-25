import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Web Rendering Patterns Comparison Guide | Mitchie's Dev Blog",
    },
    {
      name: "description",
      content:
        "Comprehensive comparison of modern web rendering patterns: SSR, SSG, ISR, and CSR. Learn the pros, cons, and ideal use cases for each rendering strategy in web development.",
    },
    {
      name: "keywords",
      content:
        "SSR, SSG, ISR, CSR, web rendering patterns, server-side rendering, static site generation, incremental static regeneration, client-side rendering, web development, performance optimization",
    },
    {
      property: "og:title",
      content:
        "Complete Guide to Web Rendering Patterns | Modern Web Development",
    },
    {
      property: "og:description",
      content:
        "Compare SSR, SSG, ISR, and CSR rendering patterns with detailed analysis of performance, use cases, and implementation strategies.",
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
      content: "Web Development, Performance, Architecture",
    },
  ];
};

export default function Index() {
  return (
    <article>
      <h1>
        Rendering Patterns in Modern Web Development
      </h1>

      <h2>Comparison Table</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>SSR</th>
              <th>SSG</th>
              <th>ISR</th>
              <th>CSR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML Generation</td>
              <td>On user request</td>
              <td>At build time</td>
              <td>
                At build time + updates
              </td>
              <td>In the browser</td>
            </tr>
            <tr>
              <td>Content Freshness</td>
              <td>Always up-to-date</td>
              <td>
                Stale until rebuild
              </td>
              <td>
                Stale until revalidate
              </td>
              <td>Always up-to-date</td>
            </tr>
            <tr>
              <td>Performance</td>
              <td>
                Slower (server computes)
              </td>
              <td>
                Fast (prebuilt HTML)
              </td>
              <td>
                Fast + occasional updates
              </td>
              <td>
                Slower (browser computes)
              </td>
            </tr>
            <tr>
              <td>Use Cases</td>
              <td>
                Dynamic, personalized pages
              </td>
              <td>
                Static, rarely-changing pages
              </td>
              <td>
                Semi-static, frequently updated
              </td>
              <td>Interactive apps</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Use SSR for dynamic, real-time content (e.g., user profiles).</li>
        <li>
          Use SSG for static content that doesn&apos;t change often (e.g.,
          blogs).
        </li>
        <li>
          Use ISR when you want static performance with periodic updates (e.g.,
          news websites).
        </li>
        <li>
          Use CSR for highly interactive apps or when you want more control over
          client-side interactivity (e.g., dashboards).
        </li>
      </ul>
    </article>
  );
}
