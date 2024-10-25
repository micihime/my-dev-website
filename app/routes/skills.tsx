import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [{ title: "Skills" }, { name: "description", content: "My skills" }];
};

export default function Index() {
  return (
    <div className="content">
      <p>
        I started my career focusing on backend development, where I honed my
        skills in building scalable applications with .NET and C#. I enjoyed the
        logic, structure, and problem-solving involved in backend work, but I
        always wanted to see the direct impact my code could have on users. This
        led me to frontend development, and now with React, I&apos;m creating
        interactive, dynamic web applications that bring ideas to life in a more
        tangible way.
      </p>
      <h3>Technical Stack</h3>
      <div className="values-list">
        <ul className="flexi">
          <li>
            <h3>Backend:</h3>
            .NET, C#, SQL
          </li>
          <li>
            <h3>Frontend:</h3>
            React, Remix, TypeScript, HTML, CSS
          </li>
          <li>
            <h3>Tools:</h3>
            Git, Visual Studio, Visual Studio Code, DevOps tools
          </li>
        </ul>
      </div>
    </div>
  );
}
