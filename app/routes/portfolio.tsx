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

      <Project
        title="Meishi"
        link={{
          url: "https://meishi.cards/",
          text: "Link"
        }}
        technologies={["React Vite", "Typescript", "AWS Amplify Auth", "Chakra UI"]}
      >
        <p>
          Meishi is a platform that transforms traditional business cards into augmented reality experiences. 
          Businesses can create branded card by choosing company colours and logo to generate their own personalised cards. 
          Scanning a Meishi card with the mobile app brings it to life with interactive AR content.
        </p>
        <p>
          I contributed to the frontend as part of a collaborative team, working on bug fixes and feature enhancements, 
          helping ensure smooth user interactions and a consistent experience across devices.
        </p>
      </Project>
      
      <Project
        title="Marathonpedia"
        link={{
          url: "https://www.kosicemarathon.com/marathonpoint/",
          text: "Link"
        }}
        technologies={["React", "Typescript", "Chakra UI", "Strapi", "Supabase" ]}
      >
        <p>
          Marathon Point Info Kiosk&apos;s Marathonpedia is an interactive touchscreen application built for the Košice Peace Marathon Museum, 
          dedicated to Europe&apos;s oldest marathon, established in 1924. The kiosk lets visitors explore nearly a century of marathon history 
          through an interactive timeline, winner galleries with detailed runner statistics, photo and video content, and fun facts and trivia. 
          A QR code integration allows quick event registration directly from the screen. 
        </p>
        <p>
          I was responsible for the frontend implementation, building the interface from Figma designs with a focus on smooth, touch-friendly 
          interactions suitable for all ages. My responsibilities included building the front-end interface in React, integrating with Supabase 
          and Strapi backends, and implementing data display functionality to enable visitors to explore marathon history, search past runners, 
          and view finish times.
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
          Regional Portal is a comprehensive online platform that makes regional data from the Košice Self-Governing Region accessible and actionable 
          for citizens, investors, and policymakers. The portal consolidates data from multiple sources into a single intuitive interface, featuring an 
          interactive AI-powered map tool that allows users to search, filter, and visualise geographic datasets - covering everything from investment 
          zones and housing to education facilities and public transport. 
        </p>
        <p>
          I worked as part of a collaborative team, my responsibilities spanned both front-end and backend development, contributing to a full-stack 
          solution for municipal information delivery.
        </p>
      </Project>

      <Project
        title="Web Component Library"
        technologies={["Lit", "Typescript", "Recharts"]}
      >
        <p>
          Worked as part of a team developing a design system for a banking institution. My responsibilities included implementing various UI components, 
          debugging existing functionality, and developing chart components from scratch using Recharts.
        </p>
      </Project>

      <Project
        title="Regional Portal"
        link={{
          url: "https://cherrypeak.eu/en/projects/ksk-data-portal",
          text: "Link,",
          additionalText: "if you're interested.",
        }}
        technologies={["React", "Typescript", "Next.js", "AWS Amplify Auth", "Chakra UI"]}
      >
        <p>
          Contributed to the technical evolution of an AR-based collector card platform. My primary responsibility was migrating the application from React Vite 
          to Next.js, improving performance and enabling server-side rendering capabilities.
        </p>
      </Project>
    </div>
  );
}
