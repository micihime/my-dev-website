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
                I started my career focusing on backend development, where I honed my skills in building scalable applications with .NET and C#. I enjoyed the logic, 
                structure, and problem-solving involved in backend work, but I always wanted to see the direct impact my code could have on users. This led me to 
                frontend development, and now with React, I’m creating interactive, dynamic web applications that bring ideas to life in a more tangible way.
            </p>
            <p>
                Technical Stack:
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
            <p>
                I love web development because it allows me to combine my logical side with my creative side. There’s something incredibly satisfying about solving a 
                complex technical challenge and seeing that solution come to life in a way that people can interact with. It’s a blend of art and science that keeps me 
                inspired every day.
            </p>
            <p>
                When I’m not coding, I enjoy painting and exploring different forms of art, which helps me bring a creative perspective to my development work. I also 
                love hiking and spending time in nature, where I find inspiration and balance.
            </p>
        </div>
    );
}