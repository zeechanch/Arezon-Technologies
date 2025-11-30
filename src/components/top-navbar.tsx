import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { Button } from '@/UI/shadcn/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/UI/shadcn/ui/sheet'
import { navLinks } from '@/constants/navlinks'
import { ModeToggle } from './mode-toggle'

export const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 88 // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight
      const startPosition = window.pageYOffset
      const distance = offsetPosition - startPosition
      const duration = 1000 // 1 second for smooth scroll
      let start: number | null = null

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * ease)

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  const handleNavClick = (link: { name: string; link: string }) => {
    const sectionMap: Record<string, string> = {
      Home: 'hero',
      About: 'about',
      'Contact Us': 'contact',
      Services: 'services',
    }

    const sectionId = sectionMap[link.name]

    if (location.pathname === '/' && sectionId) {
      // If we're on the home page, scroll to the section
      scrollToSection(sectionId)
      setIsMobileMenuOpen(false)
    } else if (sectionId) {
      // If we're on a different page, navigate to home with hash
      window.location.href = `/#${sectionId}`
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className="bg-background border-b z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          <div className="flex items-center py-2">
            <Link
              to="/"
              className="flex-shrink-0 flex gap-2 items-center justify-center"
            >
              <img src={'/arezon-logo.png'} className="size-20" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link)
                  }}
                  className="text-secondary-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </button>
              ))}
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild title="open sheet">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link)
                      }}
                      className="text-secondary-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium text-left"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
                <div className="p-2">
                  <ModeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
