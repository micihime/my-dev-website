import type { MetaFunction } from "@netlify/remix-runtime";
import Project from "~/components/Project";

const SITE_URL = "https://mitchie.dev";

export const meta: MetaFunction = () => {
  const title = "Projects & Portfolio | Miroslava Hreško";
  const description =
    "Explore my web development projects, view live demos and technical implementations.";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "portfolio, web development projects, React projects, frontend developer, Miroslava Hreško",
    },
    { name: "author", content: "Miroslava Hreško" },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/portfolio` },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/portfolio` },
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
      <h1>A selection of recent work</h1>
      <p>
        A few recent projects I&apos;ve been part of. I mostly work on the frontend, 
        but I&apos;m comfortable jumping into full-stack work when needed.
      </p>

      <section className="projects-grid">      
      <Project
        title="Marathonpedia"
        link={{
          url: "https://www.kosicemarathon.com/marathonpoint/",
          text: "View Marathonpedia"
        }}
        technologies={["React", "Typescript", "Chakra UI", "Strapi", "Supabase" ]}
      >
        <p>
          Marathon Point is a touchscreen kiosk built for the Košice Peace Marathon Museum. Visitors can explore nearly a century of history through an interactive timeline,
          winner galleries, photos, videos, and fun trivia. 
        </p>
        <p>
          I built the frontend from Figma designs, focusing on touch-friendly interactions that work well for all ages.
          This included integrating with Supabase and Strapi backends to let visitors browse marathon history, search
          past runners, and look up finish times.
        </p>
      </Project>

      <Project
        title="Regional Portal"
        link={{
          url: "https://cherrypeak.eu/en/projects/ksk-data-portal",
          text: "View Regional Portal",
        }}
        technologies={["React", "Typescript", "Next.js", "Tailwind CSS", "Strapi", "PostgreSQL", ".NET Core"]}
      >
        <p>
          A platform bringing regional data from the Košice Self-Governing Region into one place — 
          for citizens, investors, and policymakers. It connects multiple data sources and includes 
          an AI-powered map for exploring everything from investment zones to public transport. 
        </p>
        <p>
          I worked across both frontend and backend as part of a full-stack team.
        </p>
      </Project>

      <Project
        title="Meishi"
        link={{
          url: "https://meishi.cards/",
          text: "View Meishi"
        }}
        technologies={["React Vite", "Typescript", "AWS Amplify Auth", "Chakra UI"]}
      >
        <p>
          Meishi turns traditional business cards into augmented reality experiences — scan a card and it comes to life
          with interactive AR content. I joined the frontend team working on bug fixes and feature enhancements, making
          sure interactions felt smooth and consistent across devices.
        </p>
      </Project>

      <Project
        title="Web Component Library"
        technologies={["Lit", "Typescript", "Recharts"]}
      >
        <p>
          Part of a team building a design system for a banking institution. I implemented UI 
          components, debugged existing ones, and built chart components from scratch using 
          Recharts.
        </p>
      </Project>

      <Project
        title="Admin Portal for collector card platform"
        technologies={["React", "Typescript", "Next.js", "AWS Amplify Auth", "Chakra UI"]}
      >
        <p>
          Contributed to an AR-based collector card platform by migrating the admin portal from React Vite to Next.js —
          improving performance and unlocking server-side rendering in the process.
        </p>
      </Project>
      </section>
    </main>
  );
}
