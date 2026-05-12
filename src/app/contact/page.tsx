'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Button from '@/components/shared/Button'

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const services = [
  'AI Services',
  'Web App Development',
  'Website Creation',
  'NOTE System',
  'Other',
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@note.co.tz', href: 'mailto:hello@note.co.tz' },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+255 748 415 599',
    href: 'tel:+255748415599',
  },
  { icon: MapPin, label: 'Location', value: 'Dar es Salaam, Tanzania', href: undefined },
]

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required.'
  if (!data.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!data.service) errors.service = 'Please select a service.'
  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message = 'Please provide a message (at least 20 characters).'
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    // Construct mailto link
    const subject = encodeURIComponent(`[noteTech] Inquiry from ${form.name} — ${form.service}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:hello@note.co.tz?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-amber/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-green/4 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-amber font-mono text-sm uppercase tracking-widest mb-4">
            Get in Touch
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-tight mb-5">
            Contact Us
          </h1>
          <p className="text-slate-300 text-xl max-w-xl mx-auto leading-relaxed">
            Have a project in mind? We&apos;d love to hear from you. Let&apos;s build something
            great together.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-brand-navy mb-3">
                  Let&apos;s talk
                </h2>
                <p className="text-brand-muted leading-relaxed">
                  Whether you need a quote, a demo of the NOTE system, or just want to explore
                  what&apos;s possible — reach out. We respond within 24 hours.
                </p>
              </div>

              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-amber/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-amber" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-brand-dark font-medium hover:text-brand-amber transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-brand-dark font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp card */}
              <a
                href="https://wa.me/255748415599?text=Hello%20noteTech!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 border border-green-100 rounded-2xl p-5 hover:bg-green-100 transition-colors group"
                aria-label="Chat with us on WhatsApp"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                    <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0012.05 0zm0 21.785a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-800 group-hover:text-green-900">
                    Chat on WhatsApp
                  </p>
                  <p className="text-green-600 text-sm">Fastest response — usually within minutes</p>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
                    <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-brand-muted">
                      Your email client should have opened. We&apos;ll respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-brand-amber font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">
                      Send Us a Message
                    </h2>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-brand-dark mb-1.5"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className={`w-full px-4 py-3 rounded-xl border text-brand-dark placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber/50 transition-all ${
                            errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'
                          }`}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-red-500 text-xs" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-brand-dark mb-1.5"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`w-full px-4 py-3 rounded-xl border text-brand-dark placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber/50 transition-all ${
                            errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'
                          }`}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-red-500 text-xs" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Service row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-brand-dark mb-1.5"
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+255 712 345 678"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-brand-dark placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber/50 transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-semibold text-brand-dark mb-1.5"
                        >
                          Service Interest <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.service}
                          aria-describedby={errors.service ? 'service-error' : undefined}
                          className={`w-full px-4 py-3 rounded-xl border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber/50 transition-all ${
                            errors.service
                              ? 'border-red-400 bg-red-50'
                              : 'border-slate-200 bg-white'
                          }`}
                        >
                          <option value="" disabled>
                            Select a service...
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p
                            id="service-error"
                            className="mt-1 text-red-500 text-xs"
                            role="alert"
                          >
                            {errors.service}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-brand-dark mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project, goals, and any questions you have..."
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-brand-dark placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber/50 transition-all resize-none ${
                          errors.message ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'
                        }`}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="mt-1 text-red-500 text-xs"
                          role="alert"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                      Send Message <Send className="w-4 h-4" />
                    </Button>

                    <p className="text-xs text-brand-muted text-center">
                      We typically respond within 24 hours during business days.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
