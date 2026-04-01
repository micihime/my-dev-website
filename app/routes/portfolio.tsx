import type { MetaFunction } from "@netlify/remix-runtime";
import Project from "~/components/Project";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects & Portfolio" },
    {
      name: "description",
      content:
        "Explore my web development projects, view live demos and technical implementations.",
    },
    { property: "og:title", content: "Developer Portfolio | Mitchie" },
    {
      property: "og:description",
      content:
        "Collection of web development projects and applications",
    },
  ];
};

export default function Index() {
  return (
    <div className="content">
      <h1>A selection of recent work</h1>
      <p>
        I contribute to web application development using React for front-end and .NET Core for backend services. 
        My projects span both collaborative and individual efforts, with a focus on usability, performance, 
        and clean code.
      </p>

      <div className="projects-grid">      
      <Project
        title="Marathonpedia"
        link={{
          url: "https://www.kosicemarathon.com/marathonpoint/",
          text: "Link"
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
          text: "Link",
        }}
        technologies={["React", "Typescript", "Next.js", "Tailwind CSS", "Strapi", "PostgreSQL", ".NET Core"]}
      >
        <p>
          A platform that makes regional data from the Košice Self-Governing Region actually usable — for citizens,
          investors, and policymakers alike. It brings together data from multiple sources into one place, with an
          AI-powered map tool for exploring everything from investment zones to public transport.
        </p>
        <p>
          I worked across both frontend and backend as part of a full-stack team.
        </p>
      </Project>

      <Project
        title="Meishi"
        link={{
          url: "https://meishi.cards/",
          text: "Link"
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
          Worked with a team building a design system for a banking institution. I implemented UI components, debugged
          existing ones, and built chart components from scratch using Recharts.
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
      </div>
    </div>
  );
}
