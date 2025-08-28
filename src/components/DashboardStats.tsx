import { FileText, Users } from 'lucide-react'

export interface DashboardStatsProps {
  resumeLastUpdatedDays: number
  searchesThisWeek: number
}

export default function DashboardStats({ resumeLastUpdatedDays, searchesThisWeek }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div className="flex items-start gap-3 rounded-lg border bg-gray-50 p-4">
        <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
          <FileText className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">Resume</div>
          <div className="text-sm text-gray-500">Last updated {resumeLastUpdatedDays} days back</div>
        </div>
      </div>
      <div className="flex items-start gap-3 rounded-lg border bg-gray-50 p-4">
        <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Users className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">Appeared on</div>
          <div className="text-sm text-gray-500">{searchesThisWeek} searches this week</div>
        </div>
      </div>
    </div>
  )
}
