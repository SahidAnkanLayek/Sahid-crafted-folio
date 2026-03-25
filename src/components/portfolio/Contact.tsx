import React, { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Linkedin, Github } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Initialize EmailJS
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const { name, email, message } = formData

    if (!name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name",
        variant: "destructive"
      })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      })
      return false
    }

    if (!message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message",
        variant: "destructive"
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      // Send email via EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'sahid.ankan.layek2020@gmail.com',
          message: formData.message,
          reply_to: formData.email
        }
      )

      if (response.status === 200) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })

        toast({
          title: "Message Sent Successfully!",
          description: "Your message has been sent to my email. I'll get back to you soon!"
        })

        // Reset submitted state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'

      toast({
        title: "Error Sending Message",
        description: errorMessage,
        variant: "destructive"
      })

      console.error('Email error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'sahid.ankan.layek2020@gmail.com',
      href: 'mailto:sahid.ankan.layek2020@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 8509549177',
      href: 'tel:+918509549177'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Kolkata, India',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahid-ankan-layek-12444b326/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/sahidankanlayek',
      color: 'hover:text-gray-600'
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Let's discuss opportunities, collaborations, or any questions you might have
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Contact Information */}
          <div className="flex flex-col h-full animate-slide-in">
            <div className="glass rounded-xl p-4 sm:p-6 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, whether it's a full-time position,
                freelance project, or collaboration. Feel free to reach out if you'd like to work together
                or just want to say hello!
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm sm:text-base">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs sm:text-sm break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-xs sm:text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 sm:p-3 glass hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
              <div className="glass rounded-xl p-3 sm:p-4 text-center">
                <div className="text-lg sm:text-xl font-bold text-primary mb-1">&lt; 24h</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
              <div className="glass rounded-xl p-3 sm:p-4 text-center">
                <div className="text-lg sm:text-xl font-bold text-accent mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Professional</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up h-full">
            <form onSubmit={handleSubmit} className="glass rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-5 h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h3>

              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs sm:text-sm font-medium text-foreground">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="glass border-border/50 focus:border-primary h-9 sm:h-10 text-sm"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-foreground">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="glass border-border/50 focus:border-primary h-9 sm:h-10 text-sm"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2 flex-1">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-foreground">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  rows={4}
                  className="glass border-border/50 focus:border-primary resize-none text-sm h-24 sm:h-32"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-2 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitted ? 'btn-accent' : 'btn-hero'
                  } relative overflow-hidden`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Form Note */}
              <p className="text-xs text-muted-foreground text-center">
                <Check className="w-3 h-3 inline mr-1 text-primary" />
                Your message will be sent directly to my inbox. I'll get back to you soon!
              </p>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently open to new opportunities and interesting projects.
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="btn-hero"
              >
                <a href="mailto:sahid.ankan.layek2020@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Directly
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-ghost"
              >
                <a href="/assets/Sahid_Ankan_Layek_CV.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact