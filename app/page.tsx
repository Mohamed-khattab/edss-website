import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  )
}
