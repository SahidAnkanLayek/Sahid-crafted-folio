import React from 'react'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahid-ankan-layek-12444b326/',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'GitHub',
      href: 'https://github.com/sahidankanlayek',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'Email',
      href: 'mailto:sahid.ankan.layek2020@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ]

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-primary/5 border-t border-border/50">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 btn-hero rounded-full w-12 h-12 shadow-strong"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                SAL
              </div>
              <span className="font-semibold text-lg">Sahid Ankan Layek</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer passionate about creating innovative solutions. 
              Always learning, always growing, always coding.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>📍 Kolkata, India</p>
              <p>💼 Available for opportunities</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleQuickLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground text-sm">
              Follow me on social media or drop me a message. I'd love to hear from you!
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>
                © {currentYear} Sahid Ankan Layek. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Built with</span>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>using React • TypeScript • Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Credits */}
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Powered by React, Vite, Tailwind CSS, and modern web technologies
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
      </div>
    </footer>
  )
}

export default Footer