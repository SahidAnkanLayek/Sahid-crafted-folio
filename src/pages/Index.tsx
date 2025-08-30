import { useScrollSpy } from '@/hooks/useScrollSpy'
import Header from '@/components/portfolio/Header'
import Hero from '@/components/portfolio/Hero'
import Skills from '@/components/portfolio/Skills'
import Projects from '@/components/portfolio/Projects'
import Education from '@/components/portfolio/Education'
import Mentorship from '@/components/portfolio/Mentorship'
import Achievements from '@/components/portfolio/Achievements'
import Contact from '@/components/portfolio/Contact'
import Footer from '@/components/portfolio/Footer'

const Index = () => {
  const sectionIds = ['home', 'skills', 'projects', 'education', 'mentorship', 'achievements', 'contact']
  const currentSection = useScrollSpy(sectionIds)

  return (
    <div className="min-h-screen bg-background">
      <Header currentSection={currentSection} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Mentorship />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
};

export default Index;
