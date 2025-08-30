import React, { useEffect, useRef, useState } from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

interface EducationItem {
  id: string
  degree: string
  institution: string
  location: string
  duration: string
  status: 'completed' | 'ongoing'
  highlights: string[]
  gpa?: string
}

const Education: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const educationData: EducationItem[] = [
    {
      id: 'mca',
      degree: 'Master of Computer Applications (MCA)',
      institution: 'University of Engineering & Management (UEM)',
      location: 'Kolkata, West Bengal',
      duration: 'June 2024 – Ongoing',
      status: 'ongoing',
      highlights: [
        'Advanced software development methodologies',
        'Data structures and algorithms specialization',
        'Project management and team leadership',
        'Research in emerging technologies'
      ]
    },
    {
      id: 'bca',
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Burdwan Institute of Management & Computer Science',
      location: 'Burdwan, West Bengal',
      duration: 'July 2021 – June 2024',
      status: 'completed',
      highlights: [
        'Comprehensive foundation in computer science',
        'Programming languages and software development',
        'Database management and web technologies',
        'Mathematics and logical reasoning'
      ],
      gpa: '3rd Position (Institute Level)'
    }
  ]

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const timelineItems = document.querySelectorAll('.timeline-item')
    timelineItems.forEach(item => {
      if (observerRef.current) {
        observerRef.current.observe(item)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic path in computer science and application development
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-0.5" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                className={`timeline-item relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row items-center gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium transform md:-translate-x-1/2 z-10">
                  {item.status === 'ongoing' && (
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    visibleItems.has(item.id) 
                      ? index % 2 === 0 
                        ? 'animate-slide-in' 
                        : 'animate-slide-in' 
                      : 'opacity-0'
                  }`}
                >
                  <div className="glass rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'ongoing' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {item.status === 'ongoing' ? 'Currently Enrolled' : 'Completed'}
                      </div>
                      
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>

                    {/* Degree Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.degree}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {item.institution}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.duration}
                        </div>
                      </div>
                    </div>

                    {/* GPA/Ranking */}
                    {item.gpa && (
                      <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                        <div className="flex items-center gap-2 text-accent font-semibold">
                          <Award className="w-4 h-4" />
                          {item.gpa}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Focus Areas:</h4>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Education Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up">
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Degrees Pursued</div>
            <div className="text-xs text-muted-foreground mt-1">BCA Completed, MCA Ongoing</div>
          </div>
          
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years of Study</div>
            <div className="text-xs text-muted-foreground mt-1">Computer Science Focus</div>
          </div>
          
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl font-bold text-green-500 mb-2">1st</div>
            <div className="text-sm text-muted-foreground">University Rank</div>
            <div className="text-xs text-muted-foreground mt-1">Burdwan University 2022</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education