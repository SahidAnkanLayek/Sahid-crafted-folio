import React, { useState } from 'react'
import { Code, Database, Server, Globe, Languages, Wrench } from 'lucide-react'

interface Skill {
  name: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  icon?: React.ReactNode
}

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const skills: Skill[] = [
    // Programming Languages
    { name: 'Java', category: 'Programming', level: 'Expert', icon: <Code className="w-4 h-4" /> },
    { name: 'JavaScript', category: 'Programming', level: 'Advanced', icon: <Code className="w-4 h-4" /> },
    { name: 'C++', category: 'Programming', level: 'Intermediate', icon: <Code className="w-4 h-4" /> },
    { name: 'C', category: 'Programming', level: 'Intermediate', icon: <Code className="w-4 h-4" /> },
    
    // Databases
    { name: 'MongoDB', category: 'Database', level: 'Advanced', icon: <Database className="w-4 h-4" /> },
    { name: 'MySQL', category: 'Database', level: 'Advanced', icon: <Database className="w-4 h-4" /> },
    { name: 'PostgreSQL', category: 'Database', level: 'Intermediate', icon: <Database className="w-4 h-4" /> },
    
    // Backend
    { name: 'Node.js', category: 'Backend', level: 'Advanced', icon: <Server className="w-4 h-4" /> },
    { name: 'Express', category: 'Backend', level: 'Advanced', icon: <Server className="w-4 h-4" /> },
    { name: 'OOP', category: 'Backend', level: 'Expert', icon: <Server className="w-4 h-4" /> },
    
    // Frontend
    { name: 'React', category: 'Frontend', level: 'Advanced', icon: <Globe className="w-4 h-4" /> },
    { name: 'Next.js', category: 'Frontend', level: 'Intermediate', icon: <Globe className="w-4 h-4" /> },
    { name: 'HTML/CSS', category: 'Frontend', level: 'Expert', icon: <Globe className="w-4 h-4" /> },
    
    // Tools
    { name: 'Git', category: 'Tools', level: 'Advanced', icon: <Wrench className="w-4 h-4" /> },
    { name: 'Postman', category: 'Tools', level: 'Advanced', icon: <Wrench className="w-4 h-4" /> },
    
    // Languages
    { name: 'English', category: 'Languages', level: 'Advanced', icon: <Languages className="w-4 h-4" /> },
    { name: 'Hindi', category: 'Languages', level: 'Expert', icon: <Languages className="w-4 h-4" /> },
    { name: 'Bengali', category: 'Languages', level: 'Expert', icon: <Languages className="w-4 h-4" /> },
  ]

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'Tools', 'Languages']

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter)

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-gradient-to-r from-green-500 to-emerald-400'
      case 'Advanced': return 'bg-gradient-to-r from-blue-500 to-cyan-400'
      case 'Intermediate': return 'bg-gradient-to-r from-yellow-500 to-orange-400'
      case 'Beginner': return 'bg-gradient-to-r from-gray-400 to-gray-500'
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500'
    }
  }

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 animate-fade-up px-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`skill-chip text-xs sm:text-sm ${activeFilter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid - Mobile optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass rounded-lg p-3 sm:p-4 hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 flex-col sm:flex-row w-full">
                  <div className="p-1.5 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="text-left w-full">
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground line-clamp-2">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground hidden sm:block">{skill.category}</p>
                  </div>
                </div>
              </div>

              {/* Skill Level */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Level</span>
                  <span className="font-semibold text-foreground">{skill.level}</span>
                </div>
                
                <div className="w-full bg-secondary rounded-full h-1.5 sm:h-2">
                  <div
                    className={`h-1.5 sm:h-2 rounded-full ${getLevelColor(skill.level)} transition-all duration-1000`}
                    style={{
                      width: skill.level === 'Expert' ? '95%' : 
                             skill.level === 'Advanced' ? '80%' : 
                             skill.level === 'Intermediate' ? '65%' : '40%'
                    }}
                  />
                </div>
              </div>

              {/* Skill Badge */}
              <div className="mt-3">
                <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium text-white ${
                  skill.level === 'Expert' ? 'bg-green-500' :
                  skill.level === 'Advanced' ? 'bg-blue-500' :
                  skill.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-gray-500'
                }`}>
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 animate-fade-up px-1">
          <div className="text-center glass rounded-lg p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
              {skills.filter(s => s.level === 'Expert').length}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Expert Level</div>
          </div>
          
          <div className="text-center glass rounded-lg p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
              {skills.filter(s => s.level === 'Advanced').length}
            </div>
            <div className="text-xs text-muted-foreground">Advanced Level</div>
          </div>
          
          <div className="text-center glass rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-500 mb-1">
              {skills.filter(s => s.category === 'Programming').length}
            </div>
            <div className="text-xs text-muted-foreground">Languages</div>
          </div>
          
          <div className="text-center glass rounded-lg p-4">
            <div className="text-2xl font-bold text-green-500 mb-1">
              3+
            </div>
            <div className="text-xs text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills