import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "About me" },
  ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <p>
                Over the years, I’ve developed strong backend skills with .NET and C#, working on API design, database management, and server-side logic. Recently, 
                I’ve expanded my expertise into the frontend world, mastering React to create visually appealing and highly interactive user interfaces. I believe in 
                full-stack development and enjoy taking projects from concept to deployment.
            </p>
            <p>
                Technical Stack: Break this into categories (Backend, Frontend, Tools) with relevant technologies.
            </p>
            <ul>
                <li>
                    <strong>Backend:</strong> .NET, C#, SQL, API Design
                </li>
                <li>
                    <strong>Frontend:</strong> React, JavaScript, HTML, CSS
                </li>
                <li>
                    <strong>Tools:</strong> Git, Visual Studio, DevOps tools
                </li>
            </ul>
        </div>
    );
}