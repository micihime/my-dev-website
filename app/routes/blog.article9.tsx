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

// Add this before your default export
export const handle = {
  scripts: () => ({
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: "Web Rendering Patterns Comparison Guide",
      description:
        "Comprehensive comparison of modern web rendering patterns: SSR, SSG, ISR, and CSR.",
      author: {
        "@type": "Person",
        name: "Mitchie",
      },
      datePublished: "2024-01-20",
      articleSection: "Web Development",
      keywords: "SSR, SSG, ISR, CSR, web rendering patterns",
    },
  }),
};

export default function Index() {
  return (
    <article className="content prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-6">
        Rendering Patterns in Modern Web Development
      </h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Feature</th>
              <th className="border border-gray-300 p-2">SSR</th>
              <th className="border border-gray-300 p-2">SSG</th>
              <th className="border border-gray-300 p-2">ISR</th>
              <th className="border border-gray-300 p-2">CSR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">HTML Generation</td>
              <td className="border border-gray-300 p-2">On user request</td>
              <td className="border border-gray-300 p-2">At build time</td>
              <td className="border border-gray-300 p-2">
                At build time + updates
              </td>
              <td className="border border-gray-300 p-2">In the browser</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Content Freshness</td>
              <td className="border border-gray-300 p-2">Always up-to-date</td>
              <td className="border border-gray-300 p-2">
                Stale until rebuild
              </td>
              <td className="border border-gray-300 p-2">
                Stale until revalidate
              </td>
              <td className="border border-gray-300 p-2">Always up-to-date</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Performance</td>
              <td className="border border-gray-300 p-2">
                Slower (server computes)
              </td>
              <td className="border border-gray-300 p-2">
                Fast (prebuilt HTML)
              </td>
              <td className="border border-gray-300 p-2">
                Fast + occasional updates
              </td>
              <td className="border border-gray-300 p-2">
                Slower (browser computes)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Use Cases</td>
              <td className="border border-gray-300 p-2">
                Dynamic, personalized pages
              </td>
              <td className="border border-gray-300 p-2">
                Static, rarely-changing pages
              </td>
              <td className="border border-gray-300 p-2">
                Semi-static, frequently updated
              </td>
              <td className="border border-gray-300 p-2">Interactive apps</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Takeaways</h2>
      <ul className="list-disc pl-6 space-y-2">
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
