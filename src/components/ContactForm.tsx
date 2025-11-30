import { useState, FormEvent } from 'react'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { Button } from '@/UI/shadcn/ui/button'
import { Input } from '@/UI/shadcn/ui/input'
import { cn } from '@/lib/utils'

interface ContactButtonProps {
  text: string
  icon: React.ReactNode
  isOutline?: boolean
  onClick?: () => void
  className?: string
}

const ContactButton = ({ text, icon, isOutline = false, onClick, className }: ContactButtonProps) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      variant={isOutline ? 'outline' : 'default'}
      className={cn(
        'flex items-center gap-2 min-w-0 md:min-w-[220px] justify-center text-sm md:text-base',
        isOutline && 'w-full',
        className
      )}
    >
      {icon}
      {text}
    </Button>
  )
}

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setName(formData.get('name') as string)
    setEmail(formData.get('email') as string)
    setText(formData.get('text') as string)
    
    // Here you can add your form submission logic
    console.log({ name, email, text })
  }

  return (
    <section className="mx-auto mt-10 w-full px-4 md:px-0 md:max-w-[60%]">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <ContactButton
            text="VIA SUPPORT CHAT"
            icon={<MdMessage className="text-lg md:text-2xl" />}
            className="w-full md:flex-1 text-white"
          />
          <ContactButton 
            text="VIA CALL" 
            icon={<FaPhoneAlt className="text-lg md:text-2xl" />}
            className="w-full md:flex-1 text-white"
          />
        </div>
        <ContactButton
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail className="text-lg md:text-2xl" />}
        />

        <form onSubmit={onSubmit} className="flex flex-col gap-4 md:gap-5 pb-5">
          <div className="flex flex-col w-full relative">
            <label
              htmlFor="name"
              className="text-xs md:text-sm absolute -top-3 left-2 bg-background px-2"
            >
              Name
            </label>
            <Input type="text" name="name" id="name" className="h-10 text-sm md:text-base" />
          </div>
          <div className="flex flex-col w-full relative">
            <label
              htmlFor="email"
              className="text-xs md:text-sm absolute -top-3 left-2 bg-background px-2"
            >
              Email
            </label>
            <Input type="email" name="email" id="email" className="h-10 text-sm md:text-base" />
          </div>
          <div className="flex flex-col w-full relative">
            <label
              htmlFor="text"
              className="text-xs md:text-sm absolute -top-3 left-2 bg-background px-2"
            >
              Text
            </label>
            <textarea
              name="text"
              id="text"
              rows={6}
              className={cn(
                'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm md:text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none',
                'md:min-h-[200px]'
              )}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="w-full md:w-auto text-white">SUBMIT BUTTON</Button>
          </div>
        </form>
      </div>
      
    </section>
  )
}

