import { AboutSection } from './AboutSection'
import { DevCard } from './DevCard'
import { WobbleCard } from '@/UI/aceternity/wobble-card'

interface Dev {
  name: string
  pos: string
  avatar: string
  content?: string
  contact?: number
  github?: string
}

const devs: Array<Dev> = [
  {
    name: 'Zeeshan M',
    content:
      "A visionary developer committed to building digital products that combine innovation with real-world functionality.",
    pos: 'Founder, Senior Developer',
    contact: 942683245106065448,
    github: 'PranoyMajumdar',
    avatar:
      'public/zeeshan1.JPG',
  },
  {
    name: 'Maida T',
    pos: 'Co-founder, Developer',
    content:
      "A creative technologist passionate about building solutions that empower people and businesses.",
    contact: 739454321661313025,
    github: 'ArnavK-09',
    avatar: 'public/maida.jpg',
  },
]

export const AboutUs = () => {
  return (
    <AboutSection
      id="about"
      heading="About "
      highlight="Us"
      divider={false}
    >
      <div className="overflow-x-auto md:overflow-hidden md:p-5 md:gap-5 md:grid md:grid-cols-2 flex py-5">
        {devs.map((dev, index) => (
          <WobbleCard
            key={index}
            containerClassName="min-w-[90%] md:min-w-full !bg-transparent border border-border dark:border-white/30"
            className="px-4 py-8"
          >
            <DevCard {...dev} />
          </WobbleCard>
        ))}
      </div>
    </AboutSection>
  )
}

