import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Mitchie | Web Developer" },
    {
      name: "description",
      content:
        "Creating efficient, scalable web applications with a focus on user experience and modern development practices.",
    },
    {
      name: "keywords",
      content:
        "web developer, React developer, C#, frontend development",
    },
    { name: "author", content: "Mitchie" },
    { property: "og:title", content: "Mitchie" },
    {
      property: "og:description",
      content:
        "Creating efficient, scalable web applications with a focus on user experience.",
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
      </div>
      <div className="content">
        <p>
          Frontend Developer passionate about bringing designs to life with clean, responsive React code. 
          I thrive in collaborative environments with clear specifications and design systems. Looking for 
          a team-oriented role where quality code review and continuous learning are valued.
        </p>
        <p>Based in Prague, working remotely.</p>
        <p>Let&apos;s connect and build something great together!</p>
      </div>
    </>
  );
}
