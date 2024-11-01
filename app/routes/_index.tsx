import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Mitchie" },
    { name: "description", content: "Welcome to my website!" },
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
          Hi, I&apos;m Mitchie, a web developer with a passion for building
          efficient and creative solutions.
        </p>
        <p>
          I started my career focusing on backend development, where I refined
          my skills in building scalable applications with .NET and C#. I
          enjoyed the logic, structure, and problem-solving involved in backend
          work, but I always wanted to see the direct impact my code could have
          on users. This led me to frontend development, and now with React,
          I&apos;m creating interactive, dynamic web applications that bring
          ideas to life in a more tangible way.
        </p>
        <p>
          My ultimate goal is to build applications that are not only functional
          but also delightful to use.
        </p>
      </div>
    </>
  );
}
