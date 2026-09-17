import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, ExternalLink, Copy, Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [lastMessage, setLastMessage] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const getMailtoUrl = (data) => {
    const subject = encodeURIComponent(data.subject || 'Portfolio Inquiry')
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )
    return `mailto:ashishsamal889521@gmail.com?subject=${subject}&body=${body}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const submittedData = { ...formData }
    setLastMessage(submittedData)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // Open email client with pre-filled content
      const url = getMailtoUrl(submittedData)
      window.open(url, '_blank')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 600)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ashishsamal889521@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'ashishsamal889521@gmail.com',
      href: 'mailto:ashishsamal889521@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone / Contact',
      value: '+91 720579819',
      href: 'tel:+91720579819',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/ashishranjansamal',
      href: 'https://linkedin.com/in/ashishranjansamal/',
    },
    {
      icon: GithubIcon,
      label: 'GitHub Repositories',
      value: 'github.com/1MRGD',
      href: 'https://github.com/1MRGD',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhubaneswar, Odisha, India',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-transparent relative w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Let's Connect
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-base md:text-lg px-2">
            Ready to discuss AI/ML engineering roles, data analytics pipelines, or entry-level opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start w-full">
          {/* Contact Details (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="bg-[#121215]/85 backdrop-blur-md border border-white/10 p-5 sm:p-8 rounded-2xl space-y-5 sm:space-y-6 shadow-xl shadow-black/60">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Direct Contact Channels</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Feel free to reach out via email, phone, or LinkedIn. I am actively available for software developer and analytics roles.
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3 pt-2">
                {contactInfo.map((info, idx) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={idx}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#18181f] border border-white/10 hover:border-white/30 hover:bg-[#202028] transition-all group active:scale-98"
                    >
                      <div className="p-2 rounded-lg bg-black border border-white/20 group-hover:border-white/40 transition-colors shrink-0">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex flex-col min-w-0 overflow-hidden">
                        <span className="text-[9px] sm:text-[10px] text-gray-500 font-mono">{info.label}</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white truncate">
                          {info.value}
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form (Right 7 cols) */}
          <div className="lg:col-span-7 bg-[#121215]/85 backdrop-blur-md border border-white/10 p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl shadow-black/60 w-full">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-gray-400 mb-5 sm:mb-6">Leave your details and message below to initiate contact directly.</p>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-xl bg-[#18181f] border border-white/20 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg sm:text-xl font-bold text-white">Message Ready to Send!</h4>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Your email client has been prompted with your message prefilled. If it didn't open automatically, use the buttons below:
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  {lastMessage && (
                    <a
                      href={getMailtoUrl(lastMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors"
                    >
                      <span>Open in Email App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#22222b] border border-white/15 text-white font-medium text-xs sm:text-sm hover:bg-[#2c2c38] transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-gray-400" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-gray-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    Write Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs sm:text-sm text-zinc-300 font-medium">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#18181f] border border-white/15 text-white text-sm sm:text-base placeholder-zinc-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/10 hover:border-white/25 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs sm:text-sm text-zinc-300 font-medium">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#18181f] border border-white/15 text-white text-sm sm:text-base placeholder-zinc-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/10 hover:border-white/25 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs sm:text-sm text-zinc-300 font-medium">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#18181f] border border-white/15 text-white text-sm sm:text-base placeholder-zinc-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/10 hover:border-white/25 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs sm:text-sm text-zinc-300 font-medium">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#18181f] border border-white/15 text-white text-sm sm:text-base placeholder-zinc-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/10 hover:border-white/25 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-sm sm:text-base transition-all duration-200 disabled:opacity-50 cursor-pointer shadow-lg shadow-white/10 active:scale-[0.99] flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-black transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

                <div className="pt-1 text-center">
                  <p className="text-[11px] sm:text-xs text-zinc-400">
                    Prefer standard email?{' '}
                    <a
                      href="mailto:ashishsamal889521@gmail.com"
                      className="text-white underline hover:text-sky-300 transition-colors"
                    >
                      ashishsamal889521@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

