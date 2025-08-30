import React from 'react'
import { Users, Code, BookOpen, Award, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Mentorship: React.FC = () => {
  const mentorshipTopics = [
    'Java Programming',
    'JavaScript Fundamentals',
    'React Development',
    'Database Design',
    'Problem Solving',
    'Code Review',
    'Project Architecture',
    'Best Practices'
  ]

  const achievements = [
    { icon: <Users className="w-6 h-6" />, label: '50+', description: 'Students Mentored' },
    { icon: <Code className="w-6 h-6" />, label: '200+', description: 'Problems Solved' },
    { icon: <BookOpen className="w-6 h-6" />, label: '10+', description: 'Months Experience' },
    { icon: <Award className="w-6 h-6" />, label: '95%', description: 'Success Rate' }
  ]

  return (
    <section id="mentorship" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-3xl font-bold mb-3">
            Mentorship & <span className="text-gradient">Teaching</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and helping the next generation of developers grow
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main Mentorship Card */}
          <div className="glass rounded-xl p-4 shadow-medium hover:shadow-strong transition-all duration-300 mb-6 animate-scale-in">
            <div className="grid lg:grid-cols-2 gap-4 items-center">
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-xl">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bengal Coding Academy</h3>
                    <p className="text-accent font-semibold text-sm">Mentor & Technical Guide</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">August 2024 – May 2025</span>
                  </div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Currently Active</span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  As a mentor at Bengal Coding Academy, I assist students in their software engineering journey by 
                  resolving complex coding challenges, providing code reviews, and guiding them through best practices.
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-primary text-sm">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      Providing personalized coding assistance and debugging support
                    </li>
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      Conducting code reviews and suggesting improvements
                    </li>
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      Mentoring students on project architecture and design patterns
                    </li>
                  </ul>
                </div>

                <Button asChild className="btn-accent text-xs py-2">
                  <a href="https://bengalcodingacademy.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit Academy
                  </a>
                </Button>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="relative z-10 glass-strong rounded-xl p-4 bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white">
                      <Code className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-sm">Coding Mentor</h4>
                    <p className="text-xs text-muted-foreground">
                      Helping students master software engineering concepts
                    </p>
                  </div>
                </div>
                
                {/* Background Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-primary/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>

          {/* Topics Covered */}
          <div className="mb-6 animate-fade-up">
            <h3 className="text-lg font-bold mb-3 text-center">Topics I Mentor On</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {mentorshipTopics.map((topic, index) => (
                <Badge
                  key={topic}
                  variant="secondary"
                  className="px-3 py-1 text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          {/* Mentorship Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-up">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="text-center glass rounded-lg p-3 hover:shadow-medium transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-8 h-8 mb-2 bg-primary/10 rounded-lg text-primary">
                  {achievement.icon}
                </div>
                <div className="text-lg font-bold text-primary mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-up">
            <div className="glass rounded-xl p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold mb-4">Looking for Mentorship?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're a beginner starting your coding journey or an experienced developer looking to level up, 
                I'm here to help you achieve your goals.
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mentorship