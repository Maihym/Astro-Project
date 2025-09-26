import { Button } from './ui/button'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from 'lucide-react'
import { cn } from '../lib/utils'
import { 
  getBusinessInfo, 
  getContactInfo, 
  getCompanyInfo, 
  getHoursInfo, 
  getSocialLinks 
} from '../config/business'

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const businessInfo = getBusinessInfo()
  const contactInfo = getContactInfo()
  const companyInfo = getCompanyInfo()
  const hoursInfo = getHoursInfo()
  const socialLinks = getSocialLinks()

  const services = [
    { name: 'Residential Wiring', href: '/services/residential-wiring' },
    { name: 'Commercial Electrical', href: '/services/commercial-electrical' },
    { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
    { name: 'Electrical Inspections', href: '/services' },
    { name: 'Panel Upgrades', href: '/services' },
    { name: 'Lighting Installation', href: '/services' }
  ]

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/electrical-faq' },
    { label: 'Get Free Quote', href: '/quote' },
    { label: 'Emergency Service', href: '/emergency' }
  ]

  const socialLinkComponents = [
    { icon: Facebook, href: socialLinks.facebook || '#', label: 'Facebook' },
    { icon: Twitter, href: socialLinks.twitter || '#', label: 'Twitter' },
    { icon: Instagram, href: socialLinks.instagram || '#', label: 'Instagram' },
    { icon: Linkedin, href: socialLinks.linkedin || '#', label: 'LinkedIn' }
  ].filter(social => social.href !== '#') // Only show social links that have actual URLs

  return (
    <footer className={cn("bg-muted/30 border-t", className)}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/" className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src={businessInfo.branding.logo} 
                alt={`${companyInfo.name} Logo`} 
                className="h-12 w-auto"
              />
              <span className="text-3xl sm:text-xl font-bold">{companyInfo.name}</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-3">
              {socialLinkComponents.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className="h-12 w-12 sm:h-8 sm:w-8 p-0 hover:bg-primary/10"
                    asChild
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="h-8 w-8 sm:h-4 sm:w-4" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <a 
                    href={service.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href={`tel:${contactInfo.main.phone}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {contactInfo.main.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href={`mailto:${contactInfo.main.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {contactInfo.main.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>{contactInfo.main.address.street}</div>
                  <div>{contactInfo.main.address.city}, {contactInfo.main.address.state} {contactInfo.main.address.zip}</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>24/7 Emergency Service</div>
                  <div>Mon-Fri: {hoursInfo.weekday}</div>
                  <div>Sat: {hoursInfo.saturday}</div>
                  <div>Sun: {hoursInfo.sunday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Newsletter Signup */}
        <div className="py-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest electrical tips and service updates.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a 
              href="/privacy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}