import { HeroAr } from '@/components/sections/ar/HeroAr'
import { ServicesAr } from '@/components/sections/ar/ServicesAr'
import { StatsAr } from '@/components/sections/ar/StatsAr'
import { CaseStudiesAr } from '@/components/sections/ar/CaseStudiesAr'
import { TestimonialsAr } from '@/components/sections/ar/TestimonialsAr'
import { CTAAr } from '@/components/sections/ar/CTAAr'

export default function ArabicHomePage() {
  return (
    <>
      <HeroAr />
      <ServicesAr />
      <StatsAr />
      <CaseStudiesAr />
      <TestimonialsAr />
      <CTAAr />
    </>
  )
}
