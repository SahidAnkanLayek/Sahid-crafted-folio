import React, { useState, useRef } from 'react'
import { Trophy, Award, Star, ChevronLeft, ChevronRight, ExternalLink, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface Achievement {
  id: string
  title: string
  organization: string
  date: string
  category: 'Academic' | 'Professional' | 'Certification'
  description: string
  impact?: string
  certificateUrl?: string
  icon: React.ReactNode
  color: string
}

const Achievements: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const achievements: Achievement[] = [
    {
      id: 'java-cert',
      title: 'Java Programming Certification',
      organization: 'Great Learning',
      date: 'September 2024',
      category: 'Certification',
      description: 'Successfully completed comprehensive Java programming course covering core concepts, OOP principles, and advanced Java features.',
      impact: 'Enhanced programming skills and gained deeper understanding of Java ecosystem',
      certificateUrl: '#',
      icon: <Award className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'fullstack-cert',
      title: 'Full Stack Web Development',
      organization: 'Bengal Coding Academy',
      date: 'Completion Certificate',
      category: 'Certification',
      description: 'Successfully completed industrial training on Full Stack Web Development covering modern web technologies and frameworks.',
      impact: 'Gained comprehensive understanding of end-to-end web development',
      certificateUrl: '#',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'aws-cert',
      title: 'AWS Essential Training for Developers',
      organization: 'LinkedIn Learning',
      date: 'August 2025',
      category: 'Certification',
      description: 'Completed 4h 8m comprehensive course covering Amazon Web Services fundamentals and developer tools.',
      impact: 'Enhanced cloud computing skills and AWS ecosystem knowledge',
      certificateUrl: '#',
      icon: <Award className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'internship-cert',
      title: 'AI & Web Development Internship',
      organization: 'Reconit.ai',
      date: 'June-August 2025',
      category: 'Professional',
      description: 'Completed internship focusing on Artificial Intelligence, Machine Learning, and Web Designing technologies.',
      impact: 'Gained practical experience in AI/ML and modern web design principles',
      certificateUrl: '#',
      icon: <Award className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'python-cert',
      title: 'Python (Basic) Certification',
      organization: 'HackerRank',
      date: 'January 2025',
      category: 'Certification',
      description: 'Passed HackerRank skill certification test demonstrating proficiency in Python programming fundamentals.',
      impact: 'Validated Python programming skills through industry-recognized assessment',
      certificateUrl: '#',
      icon: <Award className="w-6 h-6" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'bca-rank',
      title: '3rd Position in BCA',
      organization: 'Institute Level Excellence',
      date: 'June 2024',
      category: 'Academic',
      description: 'Achieved 3rd position among all BCA students at the institute level, demonstrating consistent academic excellence.',
      impact: 'Recognition for outstanding academic performance and dedication',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-amber-500 to-amber-600'
    },
    {
      id: 'university-rank',
      title: '1st Rank in BCA',
      organization: 'Burdwan University',
      date: 'December 2022',
      category: 'Academic',
      description: 'Achieved 1st rank in BCA at Burdwan University, marking exceptional academic achievement at the university level.',
      impact: 'Top performer across the entire university system',
      icon: <Star className="w-6 h-6" />,
      color: 'from-emerald-500 to-emerald-600'
    }
  ]

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
  }

  const prevAchievement = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
      case 'Professional': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Certification': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const currentAchievement = achievements[currentIndex]

  return (
    <section id="achievements" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-3xl font-bold mb-3">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, professional development, and continuous learning
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="space-y-4">
                {/* Achievement Header */}
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${achievement.color} text-white flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1 line-clamp-2">{achievement.title}</h3>
                    <div className="text-sm text-muted-foreground">
                      <div className="font-medium">{achievement.organization}</div>
                      <div>{achievement.date}</div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <Badge className={`${getCategoryColor(achievement.category)} text-xs`}>
                  {achievement.category}
                </Badge>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {achievement.description}
                </p>

                {/* Impact */}
                {achievement.impact && (
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-primary mb-1 text-sm">Impact & Recognition</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{achievement.impact}</p>
                  </div>
                )}

                {/* Certificate Link */}
                {achievement.certificateUrl && (
                  <Button asChild className="btn-hero text-xs py-2 w-full">
                    <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Certificate
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Summary */}
        <div className="grid grid-cols-3 gap-4 animate-fade-up">
          <div className="text-center glass rounded-lg p-3">
            <div className="w-8 h-8 mx-auto mb-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
              <Trophy className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-1">2</div>
            <div className="text-xs text-muted-foreground">Academic Awards</div>
          </div>
          
          <div className="text-center glass rounded-lg p-3">
            <div className="w-8 h-8 mx-auto mb-2 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-1">5</div>
            <div className="text-xs text-muted-foreground">Certifications</div>
          </div>
          
          <div className="text-center glass rounded-lg p-3">
            <div className="w-8 h-8 mx-auto mb-2 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-1">1st</div>
            <div className="text-xs text-muted-foreground">University Rank</div>
          </div>
        </div>

        {/* Add Achievement Button for Future Use */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground mb-4">
            Continuously striving for excellence and new achievements
          </p>
          <Button 
            variant="outline" 
            className="btn-ghost"
            onClick={() => alert('More achievements coming soon!')}
          >
            View All Achievements
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Achievements