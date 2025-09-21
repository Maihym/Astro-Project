import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { Separator } from './ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  Clock,
  Search
} from 'lucide-react'
import { cn } from '../lib/utils'
import { 
  getBusinessInfo, 
  getContactInfo, 
  getCompanyInfo, 
  getHoursInfo 
} from '../config/business'
import BookingButton from './BookingButton'
import { ModeToggle } from './ModeToggle'
import { useState, useEffect, useMemo } from 'react'

interface HeaderProps {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const businessInfo = getBusinessInfo()
  const contactInfo = getContactInfo()
  const companyInfo = getCompanyInfo()
  const hoursInfo = getHoursInfo()

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]

  const serviceItems = [
    { label: 'Residential Wiring', href: '/services/residential-wiring' },
    { label: 'Commercial Electrical', href: '/services/commercial-electrical' },
    { label: 'Emergency Repairs', href: '/services/emergency-repairs' },
    { label: 'All Services', href: '/services' }
  ]

  // Search suggestions data
  const searchSuggestions = [
    // Services
    { type: 'service', title: 'Residential Wiring', description: 'Home electrical wiring and repairs', href: '/services/residential-wiring' },
    { type: 'service', title: 'Commercial Electrical', description: 'Business electrical services', href: '/services/commercial-electrical' },
    { type: 'service', title: 'Emergency Repairs', description: '24/7 emergency electrical repairs', href: '/services/emergency-repairs' },
    { type: 'service', title: 'Electrical Installation', description: 'New electrical installations', href: '/services' },
    { type: 'service', title: 'Electrical Maintenance', description: 'Regular electrical maintenance', href: '/services' },
    { type: 'service', title: 'Panel Upgrades', description: 'Electrical panel upgrades', href: '/services' },
    { type: 'service', title: 'Outlet Installation', description: 'New outlet and switch installation', href: '/services' },
    { type: 'service', title: 'Lighting Installation', description: 'Indoor and outdoor lighting', href: '/services' },
    
    // Locations
    { type: 'location', title: 'Cerritos', description: 'Electrical services in Cerritos, CA', href: '/cities/cerritos' },
    { type: 'location', title: 'La Mirada', description: 'Electrical services in La Mirada, CA', href: '/cities/la-mirada' },
    { type: 'location', title: 'Whittier', description: 'Electrical services in Whittier, CA', href: '/cities/whittier' },
    
    // Pages
    { type: 'page', title: 'About Us', description: 'Learn about our electrical company', href: '/about' },
    { type: 'page', title: 'Contact', description: 'Get in touch with our team', href: '/contact' },
    { type: 'page', title: 'Free Quote', description: 'Request a free electrical quote', href: '/contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Debounced search effect
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const timeoutId = setTimeout(() => {
      const filtered = searchSuggestions.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(filtered.slice(0, 8)) // Limit to 8 results
      setIsSearching(false)
    }, 300) // 300ms debounce

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to first result or search page
      if (searchResults.length > 0) {
        window.location.href = searchResults[0].href
      } else {
        // Fallback to search page with query
        window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
      }
    }
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  const handleResultClick = (href: string) => {
    window.location.href = href
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      {/* Top Bar with Contact Info */}
      <div className="hidden lg:block bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href={`tel:${contactInfo.main.phone.replace(/\D/g, '')}`}
                className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer"
                title={`Call ${contactInfo.main.phone}`}
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">{contactInfo.main.phone}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.main.email}`}
                className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer"
                title={`Email ${contactInfo.main.email}`}
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>{contactInfo.main.email}</span>
              </a>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{hoursInfo.regular.weekdays}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">{companyInfo.license}</span>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex h-20 sm:h-24 md:h-28 lg:h-32 xl:h-40 items-center justify-between">
          {/* Logo and Company Name */}
          <a href="./" className="flex items-center space-x-4 p-2 hover:opacity-80 transition-opacity">
            <img 
              src={businessInfo.branding.logo} 
              alt={`${companyInfo.name} Logo`} 
              className="logo-responsive w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">{companyInfo.name}</h1>
              <p className="text-sm text-muted-foreground">{companyInfo.tagline}</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-12 px-6 py-3 text-base">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {serviceItems.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href={service.href}
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.label}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12 w-12">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Search services, locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-base"
                      autoFocus
                    />
                  </div>
                  
                  {/* Real-time search results */}
                  {searchQuery.trim() && (
                    <div className="max-h-80 overflow-y-auto border rounded-md">
                      {isSearching ? (
                        <div className="p-4 text-center text-muted-foreground">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
                          Searching...
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="p-2">
                          {searchResults.map((result, index) => (
                            <button
                              key={index}
                              onClick={() => handleResultClick(result.href)}
                              className="w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 mt-1">
                                  {result.type === 'service' && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                                  {result.type === 'location' && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                                  {result.type === 'page' && <div className="w-2 h-2 bg-purple-500 rounded-full"></div>}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-sm">{result.title}</div>
                                  <div className="text-xs text-muted-foreground mt-1">{result.description}</div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 text-center text-muted-foreground">
                          No results found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsSearchOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={!searchQuery.trim()}>
                      Search
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            <BookingButton type="freeQuote" variant="outline" size="default">
              Free Quote
            </BookingButton>
            <BookingButton type="serviceCall" size="default">
              Book Service
            </BookingButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Search services, locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-base"
                      autoFocus
                    />
                  </div>
                  
                  {/* Real-time search results */}
                  {searchQuery.trim() && (
                    <div className="max-h-80 overflow-y-auto border rounded-md">
                      {isSearching ? (
                        <div className="p-4 text-center text-muted-foreground">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
                          Searching...
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="p-2">
                          {searchResults.map((result, index) => (
                            <button
                              key={index}
                              onClick={() => handleResultClick(result.href)}
                              className="w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 mt-1">
                                  {result.type === 'service' && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                                  {result.type === 'location' && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                                  {result.type === 'page' && <div className="w-2 h-2 bg-purple-500 rounded-full"></div>}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-sm">{result.title}</div>
                                  <div className="text-xs text-muted-foreground mt-1">{result.description}</div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 text-center text-muted-foreground">
                          No results found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsSearchOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={!searchQuery.trim()}>
                      Search
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            <ModeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Logo */}
                  <a 
                    href="./" 
                    className="flex items-center space-x-4 p-4 pb-4 border-b hover:opacity-80 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <img 
                      src={businessInfo.branding.logo} 
                      alt={`${companyInfo.name} Logo`} 
                      className="h-16 sm:h-20 md:h-24 w-auto p-2"
                    />
                    <div>
                      <h2 className="text-lg font-bold">{companyInfo.name}</h2>
                      <p className="text-sm text-muted-foreground">{companyInfo.tagline}</p>
                    </div>
                  </a>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-2">
                    {navigationItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-base font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    
                    <Separator className="my-2" />
                    
                    <div className="px-4 py-3">
                      <h3 className="text-base font-semibold mb-3">Services</h3>
                      <div className="space-y-2">
                        {serviceItems.map((service) => (
                          <a
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-base text-muted-foreground rounded-md hover:bg-accent hover:text-accent-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>

                  <Separator />

                  {/* Mobile Contact Info */}
                  <div className="space-y-3">
                    <a 
                      href={`tel:${contactInfo.main.phone.replace(/\D/g, '')}`}
                      className="flex items-center space-x-2 text-sm hover:text-primary transition-colors cursor-pointer"
                      title={`Call ${contactInfo.main.phone}`}
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{contactInfo.main.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${contactInfo.main.email}`}
                      className="flex items-center space-x-2 text-sm hover:text-primary transition-colors cursor-pointer"
                      title={`Email ${contactInfo.main.email}`}
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{contactInfo.main.email}</span>
                    </a>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.main.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-2 text-sm hover:text-primary transition-colors cursor-pointer"
                      title={`View ${contactInfo.main.address.full} on Google Maps`}
                    >
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <span>{contactInfo.main.address.full}</span>
                    </a>
                  </div>

                  <Separator />

                  {/* Mobile Booking Buttons */}
                  <div className="space-y-2">
                    <BookingButton 
                      type="freeQuote" 
                      variant="outline" 
                      className="w-full"
                    >
                      Free Quote
                    </BookingButton>
                    <BookingButton 
                      type="serviceCall" 
                      className="w-full"
                    >
                      Book Service
                    </BookingButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
