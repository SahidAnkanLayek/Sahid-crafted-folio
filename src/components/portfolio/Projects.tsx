import React, { useState, useRef, useEffect } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import chatAppImage from '@/assets/project-chat-app.jpg'
import ticTacToeImage from '@/assets/project-tictactoe.jpg'
import bengalCodingImage from '@/assets/project-bengal-coding.jpg'

interface Project {
  id: string
  title: string
  description: string
  features: string[]
  techStack: string[]
  liveDemo: string
  repository: string
  image: string
  category: 'Web App' | 'Game' | 'Education'
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 })
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: 'chat-app',
      title: 'Fullstack Chat & Video Calling App',
      description: 'Real-time messaging and video calling platform with advanced features.',
      features: [
        'Real-time messaging with typing indicators and reactions',
        '1-on-1 and group video calls with screen sharing and recording',
        'JWT authentication and protected routes',
        'Language exchange platform with 32 unique UI themes',
        'Global state management with Zustand',
        'Error handling on frontend and backend'
      ],
      techStack: ['React', 'Express', 'MongoDB', 'TailwindCSS', 'TanStack Query', 'Stream'],
      liveDemo: 'https://chatapp.demo',
      repository: 'https://github.com/SahidAnkanLayek/STREAMIFY.git',
      image: chatAppImage,
      category: 'Web App'
    },
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      description: 'React-based game with two-player mode and responsive design.',
      features: [
        'Two-player mode with auto win detection',
        'Reset functionality',
        'Responsive layout for all devices',
        'Smooth animations and transitions',
        'Score tracking system'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveDemo: 'https://github.com/SahidAnkanLayek/Tic-Tac-Toe-Player-vs-Computer/blob/main/assets/demo_game.png',
      repository: 'https://github.com/SahidAnkanLayek/tic-tac-grandeur.git',
      image: ticTacToeImage,
      category: 'Game'
    },
    {
      id: 'bengal-coding',
      title: 'Bengal Coding Academy (Contributor)',
      description: 'Contributed to a coding tuition website, enhancing UI and navigation.',
      features: [
        'Built and maintained web pages and components',
        'Improved clarity and navigation for better user experience',
        'Responsive design implementation',
        'Performance optimization',
        'Accessibility improvements'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveDemo: 'https://bejewelled-paprenjak-5b89bf.netlify.app/',
      repository: 'https://github.com/sahidankanlayek/bengal-coding',
      image: bengalCodingImage,
      category: 'Education'
    }
  ]

  const categories = ['All', 'Web App', 'Game', 'Education']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    )
  }

  const handleCardMouseMove = (e: React.MouseEvent, index: number) => {
    if (index !== currentProjectIndex) return
    
    const card = e.currentTarget as HTMLElement
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    setCardTilt({ x: rotateX, y: rotateY })
  }

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 })
  }

  useEffect(() => {
    if (filteredProjects.length > 0) {
      setCurrentProjectIndex(0)
    }
  }, [activeFilter, filteredProjects.length])

  const currentProject = filteredProjects[currentProjectIndex]

  return (
    <section id="projects" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-3xl font-bold mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`skill-chip ${activeFilter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group"
            >
              <div className="p-4">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg bg-muted mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Play className="h-3 w-3" />
                  </Button>
                  <Badge className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Details */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold line-clamp-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-muted">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-muted">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button asChild className="btn-hero flex-1 text-xs py-2">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="btn-ghost flex-1 text-xs py-2">
                      <a href={project.repository} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="glass-strong rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  <p className="text-muted-foreground">{selectedProject.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">All Features:</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="btn-hero">
                      <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" className="btn-ghost">
                      <a href={selectedProject.repository} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Project Button for Future Use */}
        <div className="text-center mt-12 animate-fade-up">
          <Button 
            variant="outline" 
            className="btn-ghost"
            onClick={() => alert('More projects coming soon!')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects