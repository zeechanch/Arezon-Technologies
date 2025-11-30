import { ReactNode } from 'react'

interface AboutSectionProps {
  heading: string
  highlight: string
  id?: string
  divider?: boolean
  children: ReactNode
}

export const AboutSection = ({
  heading,
  highlight,
  id,
  divider = true,
  children,
}: AboutSectionProps) => {
  return (
    <section className="px-1" id={id}>
      <h2 className="text-4xl md:text-5xl ml-2 pl-1.5 text-left tracking-wide pb-2 font-bold">
        {heading}
        <span className="text-primary">{highlight}</span>
      </h2>
      <div className="mx-auto my-3 md:mt-6">{children}</div>
      {divider && (
        <hr className="h-px my-8 bg-[#141414] brightness-200 mx-7 border-0" />
      )}
    </section>
  )
}

