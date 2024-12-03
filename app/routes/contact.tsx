import type { MetaFunction } from "@netlify/remix-runtime";
import { IconMail } from "@tabler/icons-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact | Mitchie - Full Stack Developer" },
    {
      name: "description",
      content:
        "Get in touch for development opportunities, collaborations, or questions about my web development services.",
    },
    { property: "og:title", content: "Contact Mitchie | Web Developer" },
    {
      property: "og:description",
      content:
        "Connect with me for development opportunities and collaborations",
    },
  ];
};

export default function Index() {
  return (
    <div className="content">
      <div className="flexi">
        <div>
          <p>Let&apos;s Connect!</p>
          <p>
            If you&apos;re interested in collaborating, discussing ideas, or
            have an exciting opportunity in mind, don&apos;t hesitate to reach
            out. Let&apos;s create something great together!
            <a href="mailto:mitchie.code@gmail.com">
              <IconMail />
            </a>
          </p>
        </div>
        {/* <img src="/img/contact.jpg" alt="profile" className="profile-image" /> */}
      </div>
    </div>
  );
}
