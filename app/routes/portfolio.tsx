import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "My projects" },
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
                Title: Name of the project.
                Description: A brief explanation of what the project is about, your role, the technologies used, and any creative or technical challenges you solved.
                Links: If available, include links to a live demo or the GitHub repository.
            </p>
            <p>
                Title: Name of the project.
                Description: A brief explanation of what the project is about, your role, the technologies used, and any creative or technical challenges you solved.
                Links: If available, include links to a live demo or the GitHub repository.
            </p>
            <p>
                Title: Name of the project.
                Description: A brief explanation of what the project is about, your role, the technologies used, and any creative or technical challenges you solved.
                Links: If available, include links to a live demo or the GitHub repository.
            </p>
        </div>
    );
}