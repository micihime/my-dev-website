import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "My projects" },
  ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <p>
                A simple contact form with fields like name, email, and message, or you can provide your email address with a call to action to 
                reach out for collaborations or opportunities.
            </p>
        </div>
    );
}