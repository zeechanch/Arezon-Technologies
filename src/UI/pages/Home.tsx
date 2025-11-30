import { useEffect } from 'react'
import TopProduct from '../organisms/TopProduct'
import { AboutUs } from '@/components/AboutUs'
import { Contact } from './Contact'
import { Hero } from './Hero'
import { Layout } from './Layout'
import { Services } from './Services'

export const Home = () => {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
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
      }, 300)
    }
  }, [])

  return (
    <Layout>
      <div className="container p-8 min-h-screen overflow-hidden">
        <Hero />
        {/* Top 1 Product showcase section  */}
        <TopProduct />
        <Services />
        <AboutUs />
        <Contact />
        
      </div>
    </Layout>
  )
}
