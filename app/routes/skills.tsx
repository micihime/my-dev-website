import type { MetaFunction } from "@netlify/remix-runtime";
import SkillList from "~/components/SkillList";

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
        With a background in both frontend and backend development, I enjoy
        creating intuitive and efficient web applications. My journey started in
        .NET and C#, but my passion for user experience led me to frontend
        development with React.
      </p>
      <SkillList />
      <p>
        Beyond technical skills, my experience in Toastmasters has strengthened
        my ability to communicate complex ideas clearly, making me an effective
        collaborator in any team.
      </p>
      {/* <p>
        I love web development because it allows me to combine my logical side
        with my creative side. Solving technical challenges and seeing the
        results come to life in an interactive way is very rewarding. It&apos;s
        a mix of problem-solving and design that keeps me engaged.
      </p> */}
    </div>
  );
}
