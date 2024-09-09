import type { MetaFunction } from "@netlify/remix-runtime";
import { IconBulb, IconCode, IconSchool } from '@tabler/icons-react';

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "About me" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="values-list">
        <div className="content">
          <h2>My values</h2>
          <ul className="flexi">
            <li>
              <IconSchool size={50} />
              <h3>Continuous Learning:</h3> 
              <p>
                I&apos;m always eager to learn new tools, frameworks, and techniques to stay on top of the ever-changing tech landscape.
              </p>
            </li>
            <li>
              <IconCode size={50} />
              <h3>Quality:</h3> 
              <p>
                I believe in writing clean, maintainable code and creating applications that not only work well but also deliver a seamless user experience.
              </p>
            </li>
            <li>
              <IconBulb size={50} />
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