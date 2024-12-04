import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Technical Skills | Mitchie - Full Stack Developer" },
    {
      name: "description",
      content:
        "Expertise in .NET, C#, React, and modern web development technologies. Full stack development skills and professional experience.",
    },
    { property: "og:title", content: "Developer Skills & Expertise | Mitchie" },
    {
      property: "og:description",
      content: "Technical skills and expertise in full stack web development",
    },
  ];
};

export default function Index() {
  return (
    <article className="content">
      <h1>Comparison: .NET MVC vs. Remix for Web Development</h1>

      <h2>Strengths, Weaknesses, and Use Cases</h2>

      <p>
        Web development offers countless frameworks, each with unique
        philosophies. .NET MVC and Remix are two powerful tools, but they cater
        to different needs. Here&apos;s a comparison of their strengths, weaknesses,
        and best use cases to help you choose the right one for your project.
      </p>

      <section>
        <h2>Overview</h2>

        <h3>.NET MVC</h3>
        <p>
          A server-side framework based on the Model-View-Controller pattern.
        </p>
        <p>
          Ideal for building robust, enterprise-grade applications with tight
          integration to the Microsoft ecosystem.
        </p>

        <h3>Remix</h3>
        <p>
          A modern, full-stack JavaScript framework focusing on seamless
          routing, data fetching, and server-client interaction.
        </p>
      </section>

      <section>
        <h2>Strengths</h2>

        <h3>.NET MVC</h3>
        <ul>
          <li>
            <h4>Strong Typing with C#</h4>
            <p>
              Ensures compile-time error checking and better maintainability.
            </p>
          </li>
          <li>
            <h4>Built-In Tools</h4>
            <p>
              Integrated solutions for authentication, database access (Entity
              Framework), and dependency injection.
            </p>
          </li>
          <li>
            <h4>Enterprise-Ready</h4>
            <p>
              Optimized for scalability, security, and integration with
              Microsoft tools like Azure and SQL Server.
            </p>
          </li>
          <li>
            <h4>Mature Ecosystem</h4>
            <p>
              Backed by years of updates, documentation, and community support.
            </p>
          </li>
        </ul>

        <h3>Remix</h3>
        <ul>
          <li>
            <h4>Seamless Routing</h4>
            <p>File-based routing makes navigation simple and intuitive.</p>
          </li>
          <li>
            <h4>Optimized for Performance</h4>
            <p>
              Efficient data loading, caching, and rendering out-of-the-box.
            </p>
          </li>
          <li>
            <h4>Flexibility</h4>
            <p>
              Works with any backend (Node.js, .NET APIs) and deploys to
              serverless platforms.
            </p>
          </li>
          <li>
            <h4>Modern Development Practices</h4>
            <p>
              Uses React for component-based UIs and focuses on developer
              experience.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Weaknesses</h2>

        <h3>.NET MVC</h3>
        <ul>
          <li>
            <h4>Heavier and Slower</h4>
            <p>
              Server-rendered views can struggle with highly interactive or
              real-time apps.
            </p>
          </li>
          <li>
            <h4>Tightly Coupled</h4>
            <p>
              Monolithic architecture can limit flexibility for modern
              microservice or frontend-first setups.
            </p>
          </li>
          <li>
            <h4>Learning Curve</h4>
            <p>
              Requires understanding of C#, ASP.NET libraries, and deployment
              tools.
            </p>
          </li>
        </ul>

        <h3>Remix</h3>
        <ul>
          <li>
            <h4>JavaScript Ecosystem Complexity</h4>
            <p>
              Requires familiarity with JavaScript, React, and modern tooling
              (npm, bundlers).
            </p>
          </li>
          <li>
            <h4>Less Mature</h4>
            <p>
              Being newer, it has fewer resources and community support compared
              to .NET MVC.
            </p>
          </li>
          <li>
            <h4>Backend Agnostic</h4>
            <p>
              While flexible, you must manage backend integration and server
              setup yourself.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Use Cases</h2>

        <h3>When to Use .NET MVC</h3>
        <ul>
          <li>
            Enterprise applications needing high security and scalability (e.g.,
            banking, healthcare).
          </li>
          <li>
            Projects heavily integrated with the Microsoft stack (e.g., Azure,
            SQL Server).
          </li>
          <li>
            Teams experienced in .NET and seeking strong backend-first
            workflows.
          </li>
        </ul>

        <h3>When to Use Remix</h3>
        <ul>
          <li>
            Modern, interactive, and fast-loading web apps (e.g., e-commerce,
            SaaS).
          </li>
          <li>
            Projects requiring flexibility with backend APIs or serverless
            architecture.
          </li>
          <li>
            Teams experienced in React or looking to adopt a frontend-first,
            component-based approach.
          </li>
        </ul>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>.NET MVC</th>
              <th>Remix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary Focus</td>
              <td>Server-side rendering, backend-heavy</td>
              <td>Full-stack with frontend-first approach</td>
            </tr>
            <tr>
              <td>Performance</td>
              <td>Suited for complex backends</td>
              <td>Optimized for modern UIs</td>
            </tr>
            <tr>
              <td>Ease of Use</td>
              <td>Steeper learning curve</td>
              <td>Simpler for React developers</td>
            </tr>
            <tr>
              <td>Flexibility</td>
              <td>Tightly coupled architecture</td>
              <td>Highly flexible and modular</td>
            </tr>
            <tr>
              <td>Community</td>
              <td>Mature with rich resources</td>
              <td>Growing but less established</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer>
        <p>
          Choosing between .NET MVC and Remix depends on your project
          requirements, team expertise, and long-term goals. Use .NET MVC for
          enterprise-heavy applications and Remix for modern, interactive
          experiences.
        </p>
        <p>Which framework do you prefer? Let me know in the comments!</p>
      </footer>
    </article>
  );
}
