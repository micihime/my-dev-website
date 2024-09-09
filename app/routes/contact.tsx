import type { MetaFunction } from "@netlify/remix-runtime";
import { IconMail } from "@tabler/icons-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "My projects" },
  ];
};

export default function Index() {
  return (
    <div className="contact">
      <div className="content">
        <h2>Contact</h2>
        <div className="flexi">
          <p>
            I&apos;m always open to exciting new opportunities and collaborations. Feel free to get in touch if you’d like to work together or simply share ideas.
            <a href="mailto:mitchie.code@gmail.com"><IconMail /></a>
          </p>
          <img src="obrazky/mapa.png" alt="mapka" />
        </div>
      </div>
    </div>
  );
}