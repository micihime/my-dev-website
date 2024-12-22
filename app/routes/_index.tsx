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
        <h1>From Code to Creativity:</h1>
        <h2>My Journey in Web Development</h2>
      </div>
      <div className="content">
        <p>
          Hi, I'm Mitchie, a web developer with a passion for building efficient and creative solutions.
        </p>
        <p>
          My journey began in backend development, where I built scalable applications using .NET and C#. I loved the precision of writing logic, solving intricate problems, and creating systems that worked seamlessly behind the scenes. It gave me a strong foundation in understanding how applications function.
        </p>
        <p>
          But something was missing. While I enjoyed crafting solid backends, I longed to see the immediate impact my work had on users. I wanted to bridge the gap between the invisible logic of code and the interactive world users see and feel.
        </p>
        <p>
          This curiosity led me to frontend development, and I found a new creative outlet in tools like React. Building dynamic and interactive interfaces gave me a sense of fulfillment. I could now bring ideas to life—not just functionally, but in ways that connect with people directly.
        </p>
        <p>
          Today, I focus on creating web applications that are both functional and delightful to use. My journey from backend structure to frontend creativity has taught me to blend the best of both worlds: solid architecture and engaging user experiences.
        </p>
        <p>
          This is just the beginning—I’m excited to see where the next steps in my journey will take me.
        </p>
      </div>
    </>
  );
}
