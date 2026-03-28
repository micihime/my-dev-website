import Header from "./components/Header"
import Footer from "./components/Footer"
import autoportrait from "./assets/autoportrait.jpg"

function App() {
  return (
    <>
      <Header />
      <div className="about-me">
        <img src={autoportrait} alt="my profile" width="150" height="150" />
        <h1>Miroslava Hreško</h1>
      </div>
      <div className="content">
        <p>
          Frontend Developer passionate about bringing designs to life with clean, responsive React code. 
          I thrive in collaborative environments with clear specifications and design systems. Looking for 
          a team-oriented role where quality code review and continuous learning are valued.
        </p>
        <p>Based in Prague, working remotely.</p>
        <p>Let&apos;s connect and build something great together!</p>
      </div>
      <Footer />
    </>
  )
}

export default App
