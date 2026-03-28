import SkillList from "../components/SkillList";

// TODO: add route - not real route yet, taken from old remix app
export default function Index() {
  return (
    <div className="content">
      <h1>Skills</h1>
      <p>
        With a background in both frontend and backend development, I enjoy
        building intuitive and efficient web applications. My journey began with
        .NET and C#, but my passion for user experience led me to focus on
        frontend development with React. Beyond technical skills, my experience
        in Toastmasters has strengthened my ability to communicate clearly,
        making me an effective collaborator in any team.
      </p>
      <SkillList />
      <p>
        I love web development because it allows me to combine my logical side
        with my creative side. Solving technical challenges and seeing the
        results come to life in an interactive way is very rewarding. It&apos;s
        a mix of problem-solving and design that keeps me engaged.
      </p>
    </div>
  );
}
