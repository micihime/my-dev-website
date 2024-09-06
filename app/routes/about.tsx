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
      <h1>From Code to Creativity: My Journey in Web Development</h1>
      <p>
        Hi, I’m Miroslava, a web developer with a strong foundation in backend engineering using .NET and C#. This year, I’ve expanded my skill set to 
        include frontend development with React, allowing me to craft end-to-end web solutions. I love solving complex problems and creating intuitive 
        user experiences. I’m always eager to learn, adapt, and innovate.
      </p>
      <p>
        I started my career focusing on backend development, where I honed my skills in building scalable applications with .NET and C#. I enjoyed the logic, 
        structure, and problem-solving involved in backend work, but I always wanted to see the direct impact my code could have on users. This led me to 
        frontend development, and now with React, I’m creating interactive, dynamic web applications that bring ideas to life in a more tangible way.
      </p>
      <p>
        I love web development because it allows me to combine my logical side with my creative side. There’s something incredibly satisfying about solving a 
        complex technical challenge and seeing that solution come to life in a way that people can interact with. It’s a blend of art and science that keeps me 
        inspired every day.
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