import type { MetaFunction } from "@netlify/remix-runtime";
import Project from "~/components/Project";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects & Portfolio | Mitchie - Full Stack Developer" },
    {
      name: "description",
      content:
        "Explore my web development projects showcasing .NET, React, and full-stack applications. View live demos and technical implementations.",
    },
    { property: "og:title", content: "Developer Portfolio | Mitchie" },
    {
      property: "og:description",
      content:
        "Collection of full-stack web development projects and applications",
    },
  ];
};

export default function Index() {
  return (
    <div className="content">
      <Project
        title="Randy – Your Personal Reminder Assistant"
        link={{
          url: "https://hey-randy.netlify.app/",
          text: "Read more",
          additionalText:
            "about Randy today and start making the most of your moments!",
        }}
        sourceCodeUrl="https://github.com/micihime/RandomReminderApp"
        // imageUrl="/img/projects/randy-screenshot.jpg"
        // technologies={[".NET MAUI", "C#"]}
      >
        <p>
          Unlike traditional reminder apps that notify you at fixed times, Randy
          adds an element of surprise to your routine. You set the time
          interval, and Randy will randomly choose moments within that window to
          remind you. This unpredictability helps you stay present and engaged,
          making Randy perfect for mindfulness exercises, habit formation, or
          any activity where a little randomness can boost your awareness and
          focus.
        </p>
        {/* <p>Whether you&apos;re a mindfulness enthusiast, someone working on forming new habits, or just need a little help remembering important tasks, Randy is the perfect companion to keep you on track in a fun and unexpected way.</p> */}
      </Project>

      <Project
        title="Adventures of 3 friends"
        link={{
          url: "https://everwhisper-forest.netlify.app",
          text: "Here",
          additionalText: "you can find out all about it.",
        }}
        sourceCodeUrl="https://github.com/micihime/my-book"
        // imageUrl="/img/projects/adventure-book.jpg"
        // technologies={["React", "Typescript", "CSS Animations"]}
      >
        <p>
          Join three adventurous friends on a journey full of fun, discovery,
          and excitement! This interactive children&apos;s book brings their
          story to life with engaging animations, captivating illustrations, and
          imaginative minigames. Explore the world of friendship, bravery, and
          teamwork as you dive into the pages of their adventure.
        </p>
        <p>
          On the website, you can preview the book, enjoy some lively
          animations, and even play mini-games that let you experience the story
          in new ways. It&apos;s more than just a book — it&apos;s an immersive
          experience that encourages young readers to explore, learn, and play!
        </p>
      </Project>

      <Project
        title="My Art Blog"
        link={{
          url: "https://luminify.netlify.app",
          text: "Link,",
          additionalText: "if you're interested.",
        }}
        sourceCodeUrl="https://github.com/micihime/my-art-website"
        // imageUrl="/img/projects/art-blog.jpg"
        // technologies={["React", "Typescript", "Netlify CMS"]}
      >
        <p>
          I&apos;m on a creative journey, learning and experimenting with the
          art of watercolor. Through my blog and Instagram account, I share my
          progress, insights, and techniques as I develop my skills. From early
          sketches to completed pieces, you&apos;ll get a behind-the-scenes look
          at my learning process, challenges, and inspirations.
        </p>
        <p>
          Join me as I explore the world of art, one brushstroke at a time, and
          discover how watercolor can transform simple moments into beautiful
          creations!
        </p>
      </Project>
    </div>
  );
}
