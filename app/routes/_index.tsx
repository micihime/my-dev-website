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
      <div className="o-mne">
        <div className="obsah">
          <img src="obrazky/profil.jpg" alt="moje fotka" width="150" />
          <h1>From Code to Creativity: My Journey in Web Development</h1>
          <p>
            Hi, I&apos;m Miroslava Hrešková, a web developer with a passion for building efficient and creative solutions. My journey began in backend development using 
            .NET and C#, and now I&apos;m expanding into frontend development with React to build full-stack applications. I&apos;m a problem solver who loves exploring new 
            technologies and pushing the boundaries of what&apos;s possible in web development.
          </p>
        </div>
      </div>
      <p>
        Looking ahead, I&apos;m excited to deepen my expertise in frontend development, exploring advanced JavaScript concepts and experimenting with design systems. 
        I also plan to continue strengthening my full-stack skills and potentially dive into new technologies like Node.js and cloud services. My ultimate goal 
        is to build applications that are not only functional but also delightful to use.
      </p>
    </>
  );
}
