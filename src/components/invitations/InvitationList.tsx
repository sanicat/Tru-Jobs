import { Card } from '@/components/ui/card'
import { useId } from 'react'

export type InvitationItem = {
  id: string
  title: string
  company: string
  remote?: boolean
  logo: string
  timeAgo: string
}

interface InvitationListProps {
  items: InvitationItem[]
}

export default function InvitationList({ items }: InvitationListProps) {
  const headingId = useId()
  return (
    <Card className="rounded-2xl border border-gray-200 shadow-sm bg-white p-2 md:p-3 h-[300px]">
      <div className="mb-1.5 flex items-center justify-between">
        <h3 id={headingId} className="text-[18px] font-semibold text-gray-900">Invitation to apply</h3>
        <a href="#" aria-label="View all invitations" className="text-sm text-blue-600 font-medium hover:underline">View all</a>
      </div>

      <div aria-labelledby={headingId} className="space-y-1.5">
        {items.map((item) => (
          <div
            key={item.id}
            role="button"
            aria-label={`Open job invitation ${item.title} at ${item.company}`}
            className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 hover:bg-white hover:shadow-sm transition"
          >
            <div className="flex items-center min-h-[52px]">
              <img src={item.logo} alt="Company logo" className="w-8 h-8 rounded-md object-cover" />
              <div className="ml-2">
                <div className="text-[14px] leading-tight font-semibold text-gray-900">{item.title}</div>
                <div className="text-sm">
                  <span className="text-blue-600">{item.company}</span>
                  <span className="text-gray-500">{item.remote ? ' - Remote' : ''}</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500">{item.timeAgo}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
