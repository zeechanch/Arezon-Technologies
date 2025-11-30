import { ContactHeader } from '@/components/ContactHeader'
import { ContactForm } from '@/components/ContactForm'

export const Contact = () => {
  return (
    <div id="contact" className="px-10 py-12">
      <ContactHeader />
      <ContactForm />
    </div>
  )
}
