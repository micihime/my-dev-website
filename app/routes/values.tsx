import type { MetaFunction } from "@netlify/remix-runtime";
import { IconBulb, IconCode, IconSchool } from "@tabler/icons-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Values" },
    { name: "description", content: "My Core Values" },
  ];
};

export default function Index() {
  return (
    <div className="content">
      <h1>My Core Values</h1>
      <p>
        I love web development because it allows me to combine my logical side
        with my creative side. There&apos;s something incredibly satisfying
        about solving a complex technical challenge and seeing that solution
        come to life in a way that people can interact with. It&apos;s a blend
        of art and science that keeps me inspired every day.
      </p>
      <div className="values-list">
        <ul className="flexi">
          <li>
            <IconSchool size={50} />
            <h3>Continuous Learning:</h3>
            <p>
              I&apos;m always eager to learn new tools, frameworks, and
              techniques to stay on top of the ever-changing tech landscape.
            </p>
          </li>
          <li>
            <IconBulb size={50} />
            <h3>Creativity:</h3>
            <p>
              Creativity is at the heart of problem-solving. While coding may
              seem purely technical, I view it as a form of art where there are
              multiple ways to approach a solution, and the challenge is finding
              the one that&apos;s both elegant and efficient.
            </p>
          </li>
          <li>
            <IconCode size={50} />
            <h3>Quality:</h3>
            <p>
              I believe in writing clean, maintainable code and creating
              applications that not only work well but also deliver a seamless
              user experience.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
