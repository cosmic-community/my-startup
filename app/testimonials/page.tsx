import type { Metadata } from 'next'
import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'
import SectionHeading from '@/components/SectionHeading'
import EmptyState from '@/components/EmptyState'

export const metadata: Metadata = {
  title: 'Testimonials - My Startup',
  description: 'See what our customers are saying about My Startup. Real reviews from real users.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Testimonials"
          title="What Our Customers Say"
          description="Don't just take our word for it. Here's what real customers think about My Startup."
        />

        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <EmptyState
            emoji="⭐"
            title="No testimonials yet"
            description="Customer testimonials will appear here once they are added in Cosmic."
          />
        )}
      </div>
    </section>
  )
}