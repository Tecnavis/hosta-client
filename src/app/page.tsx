import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'
import Promotion from '@/components/Home/Promotion'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Properties />
      {/* <FeaturedProperty /> */}
      <Testimonial />
      {/* <BlogSmall /> */}
      <GetInTouch />
      <FAQ />
      <Promotion />
    </main>
  )
}
