import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Mitchie | Full Stack Web Developer" },
    {
      name: "description",
      content:
        "Full Stack Developer specializing in .NET, C#, and React. Creating efficient, scalable web applications with a focus on user experience and modern development practices.",
    },
    {
      name: "keywords",
      content:
        "web developer, full stack developer, .NET developer, React developer, C#, frontend development, backend development",
    },
    { name: "author", content: "Mitchie" },
    { property: "og:title", content: "Mitchie | Full Stack Web Developer" },
    {
      property: "og:description",
      content:
        "Full Stack Developer specializing in .NET, C#, and React. Creating efficient, scalable web applications with a focus on user experience.",
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/img/profile.jpg" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="about-me">
        <img src="/img/profile.jpg" alt="my profile" width="150" height="150" />
        <h1>Miroslava Hreško</h1>
        {/* <h2>Crafting Innovative Web Experiences</h2> */}
      </div>
      <div className="content">
        <p>
          Hi, I&apos;m Mitchie, I&apos;m a full-stack developer specializing in
          C#/.NET on the backend and React on the frontend, building scalable
          and user-friendly web applications. I love building intuitive,
          user-friendly web applications and exploring the world of UI/UX
          design. With a passion for creativity and problem-solving, I strive to
          create digital experiences that are both functional and visually
          engaging.
        </p>
        <p>
          Beyond coding, I love exploring new places, experimenting in baking,
          and staying active through dance, running, and hiking. I try to bring
          curiosity and enthusiasm to everything I do.
        </p>
        <p>Let&apos;s connect and build something great together!</p>
      </div>
    </>
  );
}
