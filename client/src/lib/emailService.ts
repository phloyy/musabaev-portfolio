import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

interface ContactForm {
  name: string
  service: string
  description: string
  contact: string
  timeline: string
}

export async function sendContactForm(data: ContactForm) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn('EmailJS not configured, logging form data:', data)
    return { success: true, demo: true }
  }
  
  const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    from_name: data.name,
    service_type: data.service,
    project_description: data.description,
    contact_info: data.contact,
    timeline: data.timeline,
  }, PUBLIC_KEY)
  
  return { success: true, result }
}
