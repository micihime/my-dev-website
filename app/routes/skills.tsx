import type { MetaFunction } from "@netlify/remix-runtime";
import Skill from "~/components/Skill";

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
    <div className="content">
      <p>
        I love web development because it allows me to combine my logical side
        with my creative side. Solving technical challenges and seeing the
        results come to life in an interactive way is very rewarding. It&apos;s
        a mix of problem-solving and design that keeps me engaged.
      </p>
      <h3>Technical Stack</h3>
      <div className="values-list">
        <ul className="flexi">
          <Skill
            title="Backend"
            details=".NET, C#, SQL, TypeScript / JavaScript"
          />
          <Skill
            title="Frontend"
            details="React, Remix, TypeScript / JavaScript, HTML, CSS"
          />
          <Skill
            title="Soft skills"
            details="Problem-solving, adaptability, communication, teamwork"
          />
        </ul>
      </div>
      <p>
        With a background in both frontend and backend development, I enjoy
        creating intuitive and efficient web applications. My journey started in
        .NET and C#, but my passion for user experience led me to frontend
        development with React. I value clean code, maintainable architecture,
        and seamless user interactions. Beyond technical skills, my experience
        in Toastmasters has strengthened my ability to communicate complex ideas
        clearly, making me an effective collaborator in any team.
      </p>
    </div>
  );
}
