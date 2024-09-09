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
        Hi, I&apos;m Miroslava, a web developer with a strong foundation in backend engineering using .NET and C#. This year, I&apos;ve expanded my skill set to 
        include frontend development with React, allowing me to craft end-to-end web solutions. I love solving complex problems and creating intuitive 
        user experiences. I&apos;m always eager to learn, adapt, and innovate.
      </p>
      <div className="values-list">
        <div className="obsah">
          <h2>Moje zájmy</h2>
          <ul className="flexi">
            <li>
              <img src="obrazky/007-sports.svg" alt="hobby 1" />
              <h3>Continuous Learning:</h3> 
              <p>
                I&apos;m always eager to learn new tools, frameworks, and techniques to stay on top of the ever-changing tech landscape.
              </p>
            </li>
            <li>
              <img src="obrazky/015-photo-camera.svg" alt="hobby 2" />
              <h3>Quality:</h3> 
              <p>
                I believe in writing clean, maintainable code and creating applications that not only work well but also deliver a seamless user experience.
              </p>
            </li>
            <li>
              <img src="obrazky/027-drum-set.svg" alt="hobby 3" />
              <h3>Creativity:</h3> 
              <p>
                I enjoy finding creative solutions to complex problems.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p>
        I&apos;m always open to exciting new opportunities and collaborations. Feel free to get in touch if you&apos;d like to work together or simply share ideas.
      </p>
    </div>
  );
}