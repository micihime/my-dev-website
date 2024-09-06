import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Mitchie" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>From Code to Creativity: My Journey in Web Development</h1>
      <p>
        Hi, I’m Miroslava Hrešková, a web developer with a passion for building efficient and creative solutions. My journey began in backend development using 
        .NET and C#, and now I’m expanding into frontend development with React to build full-stack applications. I’m a problem solver who loves exploring new 
        technologies and pushing the boundaries of what’s possible in web development.
      </p>
      <ul>
        <li>
          <strong>Creativity:</strong> I enjoy finding creative solutions to complex problems.
        </li>
        <li>
          <strong>Continuous Learning:</strong> I’m always eager to learn new tools, frameworks, and techniques to stay on top of the ever-changing tech landscape.
        </li>
        <li>
          <strong>Collaboration:</strong> I thrive in environments where I can collaborate with others, share ideas, and learn from the collective knowledge of a team.
        </li>
        <li>
          <strong>Quality:</strong> I believe in writing clean, maintainable code and creating applications that not only work well but also deliver a seamless user experience.
        </li>
      </ul>
      <p>
        Looking ahead, I’m excited to deepen my expertise in frontend development, exploring advanced JavaScript concepts and experimenting with design systems. 
        I also plan to continue strengthening my full-stack skills and potentially dive into new technologies like Node.js and cloud services. My ultimate goal 
        is to build applications that are not only functional but also delightful to use.
      </p>
      <p>
        If you have endorsements from colleagues, mentors, or clients (you can pull these from LinkedIn if available), feature 1-2 quotes here to add credibility.
      </p>
    </div>
  );
}
