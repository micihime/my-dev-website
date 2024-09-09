import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "My projects" },
  ];
};

export default function Index() {
    return (
        <div className="content">
            <p>
                Over the years, I&apos;ve developed strong backend skills with .NET and C#, working on API design, database management, and server-side logic. Recently, 
                I&apos;ve expanded my expertise into the frontend world, mastering React to create visually appealing and highly interactive user interfaces. I believe in 
                full-stack development and enjoy taking projects from concept to deployment.
            </p>
            
            <div className="project">
                <h2>Randy – Your Personal Reminder Assistant</h2>
                <p>
                    Randy is not just another reminder app; it&apos;s your companion for a more mindful and present life. 
                    Whether you&apos;re looking to cultivate mindfulness, establish healthy habits, or simply stay on top of your daily tasks, 
                    Randy is here to support you in a unique and personalized way.
                </p>
                <p>
                    More info <a href="https://hey-randy.netlify.app/">here</a>.
                </p>
            </div>
            <div className="project">
                <h2>Adventures of 3 friends</h2>
                <p>
                    Join three adventurous friends on a journey full of fun, discovery, and excitement! 
                    This interactive children&apos;s book brings their story to life with engaging animations, 
                    captivating illustrations, and imaginative minigames. Explore the world of friendship, 
                    bravery, and teamwork as you dive into the pages of their adventure.
                </p>
                <p>
                    On the website, you can preview the book, enjoy some lively animations, and even play 
                    mini-games that let you experience the story in new ways. It&apos;s more than just a 
                    book — it&apos;s an immersive experience that encourages young readers to explore, learn, 
                    and play!
                </p>
                <p>
                    More info <a href="#">here</a>.
                </p>                
            </div>
            <div className="project">
                <h2>My Art Blog</h2>
                <p>
                    I&apos;m on a creative journey, learning and experimenting with the art of watercolor. 
                    Through my blog and Instagram account, I share my progress, insights, and techniques as 
                    I develop my skills. From early sketches to completed pieces, you&apos;ll get a behind-the-scenes 
                    look at my learning process, challenges, and inspirations. Join me as I explore the world 
                    of art, one brushstroke at a time, and discover how watercolor can transform simple moments
                    into beautiful creations!
                </p>
                <p>
                    More info <a href="https://willowy-kataifi-da516b.netlify.app">here</a>.
                </p>
            </div>
        </div>
    );
}