import type { Metadata } from 'next'
import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import SectionHeading from '@/components/SectionHeading'
import EmptyState from '@/components/EmptyState'

export const metadata: Metadata = {
  title: 'Team - My Startup',
  description: 'Meet the talented team behind My Startup. Passionate people building amazing products.',
}

export default async function TeamPage() {
  const members = await getTeamMembers()

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our Team"
          title="The People Behind My Startup"
          description="We're a diverse team of passionate individuals dedicated to building the best product for our customers."
        />

        {members.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <EmptyState
            emoji="👥"
            title="No team members yet"
            description="Team members will appear here once they are added in Cosmic."
          />
        )}
      </div>
    </section>
  )
}