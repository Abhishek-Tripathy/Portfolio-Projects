import Bio from './components/Bio'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skill from './components/Skill'
import WorkExperience from './components/WorkExperience'

function App() {
  

  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skill />
        <WorkExperience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
