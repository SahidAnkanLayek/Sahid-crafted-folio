import React, { useState, useEffect } from 'react'
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroBg from '@/assets/hero-bg.jpg'
import profilePhoto from '@/assets/profile-photo.jpg'

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const phrases = [
    'Full-Stack Developer',
    'Java Specialist', 
    'Node.js Expert',
    'React Enthusiast',
    'Problem Solver'
  ]

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    
    if (isTyping) {
      if (typewriterText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setTypewriterText(currentPhrase.slice(0, typewriterText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 1500)
        return () => clearTimeout(timeout)
      }
    } else {
      if (typewriterText.length > 0) {
        const timeout = setTimeout(() => {
          setTypewriterText(typewriterText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        setIsTyping(true)
      }
    }
  }, [typewriterText, isTyping, currentPhraseIndex, phrases])

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/assets/Sahid_Ankan_Layek_CV.pdf'
    link.download = 'Sahid_Ankan_Layek_CV.pdf'
    link.click()
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sahid Ankan Layek
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl lg:text-3xl text-white/90 font-medium">
                  <span className="text-accent">{typewriterText}</span>
                  <span className="animate-pulse text-accent">|</span>
                </h2>
              </div>

              <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                Full-stack developer specializing in Java, Node, and React. I build clean, robust products—from secure backends to polished UIs—that scale and delight users.
              </p>
            </div>

            {/* Location & Contact Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Kolkata, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 8509549177</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleDownloadCV}
                className="btn-hero px-8 py-3 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 text-lg bg-white/10 text-white border-white/30 hover:bg-white/20 dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20 backdrop-blur-sm"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/sahid-ankan-layek-12444b326/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://github.com/sahidankanlayek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:sahid.ankan.layek2020@gmail.com"
                className="p-3 glass hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="relative flex items-center justify-center animate-scale-in">
            <div className="relative group">
              {/* Background Glow */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse" />
              
              {/* Profile Photo Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-strong border-4 border-white/20 group-hover:scale-105 transition-all duration-500">
                  {/* Profile Photo */}
                  <img 
                    src={profilePhoto} 
                    alt="Sahid Ankan Layek - Full Stack Developer"
                    className="w-full h-full object-cover animate-fade-in"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                </div>
              </div>

              {/* Available for hire badge - positioned below the photo container */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg animate-bounce">
                Available for hire
              </div>

              {/* Floating Elements with Enhanced Animation */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/20 rounded-full animate-pulse backdrop-blur-sm border border-white/10" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full animate-pulse delay-1000 backdrop-blur-sm border border-white/10" />
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full animate-ping opacity-20" />
              <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full animate-ping delay-500 opacity-20" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('skills')}
            className="p-2 glass hover:bg-white/20 rounded-full transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero