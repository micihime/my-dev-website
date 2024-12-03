import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [{ title: "Skills" }, { name: "description", content: "My skills" }];
};

export default function Index() {
  return (
    <div className="content">
      <p>
        I love web development because it allows me to combine my logical side
        with my creative side. There&apos;s something incredibly satisfying
        about solving a complex technical challenge and seeing that solution
        come to life in a way that people can interact with. It&apos;s a blend
        of art and science that keeps me inspired every day.
      </p>
      <h3>Technical Stack</h3>
      <div className="values-list">
        <ul className="flexi">
          <li>
            <h3>Backend:</h3>
            <p>.NET, C#, SQL, TypeScript / JavaScript</p>
          </li>
          <li>
            <h3>Frontend:</h3>
            <p>React, Remix, TypeScript / JavaScript, HTML, CSS</p>
          </li>
          <li>
            <h3>Tools:</h3>
            <p>Git, Visual Studio, Visual Studio Code, DevOps tools</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
