'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Send, 
  CheckCircle, Clock, MessageSquare,
  Linkedin, Twitter, Facebook
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'راسلنا',
    description: 'نرد خلال 24 ساعة',
    value: 'ceo@edss-group.com',
    href: 'mailto:ceo@edss-group.com',
  },
  {
    icon: Phone,
    title: 'اتصل بنا',
    description: 'من الإثنين إلى الجمعة 9ص - 6م',
    value: '+20 109 999 9999',
    href: 'tel:+201099999999',
  },
  {
    icon: MapPin,
    title: 'زورنا',
    description: 'مقرنا الرئيسي',
    value: 'ديستريكت 5، القاهرة الجديدة، مصر',
    href: '#map',
  },
]

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
]

const services = [
  'تطوير البرمجيات',
  'حلول الشبكات',
  'الأنظمة الذكية',
  'تكامل الأنظمة',
  'استشارات',
  'أخرى',
]

export default function ContactPageAr() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroWords = [
    { text: 'لنبدأ', gradient: false },
    { text: 'حوارًا', gradient: true },
  ]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.contact-hero-pill', { opacity: 0, y: 20, duration: 0.5 })
        .from('.contact-hero-title span', { opacity: 0, y: 40, duration: 0.7, stagger: 0.08 }, '-=0.2')
        .from('.contact-hero-lead', { opacity: 0, y: 20, duration: 0.55 }, '-=0.25')

      gsap.to('.contact-orb', {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      })
    },
    { scope: pageRef }
  )

  return (
    <div ref={pageRef}>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light" />
        <div className="contact-orb absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="contact-orb absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />

        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="contact-hero-pill inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              تواصل معنا
            </span>
            <h1 className="contact-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {heroWords.map((word, index) => (
                <span
                  key={word.text}
                  className={`inline-block ${word.gradient ? 'gradient-text' : ''}`}
                >
                  {word.text}
                  {index < heroWords.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>
            <p className="contact-hero-lead text-lg md:text-xl text-muted-foreground leading-relaxed">
              لديك فكرة أو مشروع؟ يسعدنا سماعك. تواصل معنا ودعنا نصنع شيئًا رائعًا.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-border">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                <p className="font-medium text-primary">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                أرسل لنا رسالة
              </h2>
              <p className="text-muted-foreground mb-8">
                املأ النموذج وسنعود إليك في أقرب وقت.
              </p>

              {isSubmitted ? (
                <motion.div
                  className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    تم إرسال الرسالة بنجاح!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    شكرًا لتواصلك. سنرد خلال 24 ساعة.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    إرسال رسالة أخرى
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="محمد أحمد"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        اسم الشركة
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="اسم الشركة"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        الخدمة المطلوبة
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">اختر خدمة</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      رسالتك *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="أخبرنا عن مشروعك..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        جارٍ الإرسال...
                      </>
                    ) : (
                      <>
                        إرسال الرسالة
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-card rounded-2xl border border-border p-8 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  لماذا تختارنا؟
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">استجابة سريعة</h4>
                      <p className="text-sm text-muted-foreground">
                        نرد على جميع الاستفسارات خلال 24 ساعة.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">استشارة مجانية</h4>
                      <p className="text-sm text-muted-foreground">
                        احصل على نصيحة خبراء مجانًا لمشروعك.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">سجل نجاح مثبت</h4>
                      <p className="text-sm text-muted-foreground">
                        أكثر من 150 مشروعًا ناجحًا.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  تواصل معنا
                </h3>
                <p className="text-muted-foreground mb-6">
                  تابعنا على وسائل التواصل لمزيد من التحديثات والأخبار.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="map" className="section-padding bg-muted">
        <div className="container-wide">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              موقعنا
            </h2>
            <p className="text-muted-foreground">
              زرنا في مقرنا بالقاهرة الجديدة، مصر
            </p>
          </motion.div>

          <motion.div
            className="aspect-[21/9] rounded-2xl bg-card border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  مقر EDSS الرئيسي
                </h3>
                <p className="text-muted-foreground">
                  ديستريكت 5، القاهرة الجديدة، القاهرة، مصر
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
