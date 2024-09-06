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
      <p>
        I started my career focusing on backend development, where I honed my skills in building scalable applications with .NET and C#. I enjoyed the logic, 
        structure, and problem-solving involved in backend work, but I always wanted to see the direct impact my code could have on users. This led me to 
        frontend development, and now with React, I’m creating interactive, dynamic web applications that bring ideas to life in a more tangible way.
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
        Over the years, I’ve developed strong backend skills with .NET and C#, working on API design, database management, and server-side logic. Recently, 
        I’ve expanded my expertise into the frontend world, mastering React to create visually appealing and highly interactive user interfaces. I believe in 
        full-stack development and enjoy taking projects from concept to deployment.
      </p>
      <p>
        I love web development because it allows me to combine my logical side with my creative side. There’s something incredibly satisfying about solving a 
        complex technical challenge and seeing that solution come to life in a way that people can interact with. It’s a blend of art and science that keeps me 
        inspired every day.
      </p>
      <p>
        Looking ahead, I’m excited to deepen my expertise in frontend development, exploring advanced JavaScript concepts and experimenting with design systems. 
        I also plan to continue strengthening my full-stack skills and potentially dive into new technologies like Node.js and cloud services. My ultimate goal 
        is to build applications that are not only functional but also delightful to use.
      </p>
      <p>
        When I’m not coding, I enjoy painting and exploring different forms of art, which helps me bring a creative perspective to my development work. I also 
        love hiking and spending time in nature, where I find inspiration and balance.
      </p>
      <p>
        I’m always open to exciting new opportunities and collaborations. Feel free to get in touch if you’d like to work together or simply share ideas.
      </p>
    </div>
  );
}
