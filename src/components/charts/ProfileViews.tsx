import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

type Period = 'Day' | 'Week' | 'Month'

type Datum = { day: string; recruiter: number; user: number }

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

const weekData: Datum[] = [
  { day: 'Sun', recruiter: 45, user: 68 },
  { day: 'Mon', recruiter: 52, user: 74 },
  { day: 'Tue', recruiter: 48, user: 66 },
  { day: 'Wed', recruiter: 40, user: 60 },
  { day: 'Thu', recruiter: 55, user: 72 },
  { day: 'Fri', recruiter: 50, user: 78 },
  { day: 'Sat', recruiter: 38, user: 64 },
]

const dayData: Datum[] = days.map((d, i) => ({ day: d, recruiter: 15 + (i * 3) % 20, user: 20 + (i * 5) % 30 }))
const monthData: Datum[] = days.map((d, i) => ({ day: d, recruiter: 30 + (i * 7) % 40, user: 40 + (i * 9) % 50 }))

function TooltipContent({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null
  const rec = payload.find((p: any) => p.dataKey === 'recruiter')
  const usr = payload.find((p: any) => p.dataKey === 'user')
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm text-sm">
      <div className="mb-1 text-xs font-medium text-gray-700">{label}</div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-gray-700">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: '#2563EB' }} />
          <span>Recruiter: <b>{rec?.value ?? 0}</b></span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: '#86EFAC' }} />
          <span>User: <b>{usr?.value ?? 0}</b></span>
        </div>
      </div>
    </div>
  )
}

export default function ProfileViews() {
  const [period, setPeriod] = useState<Period>('Week')
  const data = useMemo(() => {
    if (period === 'Day') return dayData
    if (period === 'Month') return monthData
    return weekData
  }, [period])

  return (
    <Card className="rounded-2xl border border-gray-200 shadow-sm bg-white p-4 md:p-5 h-[300px]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <div className="text-[18px] font-semibold text-gray-900">Profile Views</div>
          {/* Legend */}
          <div className="mt-2 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: '#2563EB' }} />
              <span>Recruiter</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: '#86EFAC' }} />
              <span>User</span>
            </div>
          </div>
        </div>

        {/* Segmented control */}
        <div className="inline-flex rounded-full bg-gray-100 p-1 gap-1" role="tablist" aria-label="Select time range">
          {(['Day', 'Week', 'Month'] as Period[]).map((p) => {
            const active = p === period
            return (
              <Button
                key={p}
                size="sm"
                aria-label={`Show ${p.toLowerCase()} data`}
                aria-pressed={active}
                role="tab"
                className={`h-8 rounded-full px-3 text-xs ${active ? 'bg-[#2563EB] text-white' : 'bg-gray-100 text-gray-700'}`}
                variant={active ? 'default' : 'outline'}
                onClick={() => setPeriod(p)}
              >
                {p}
              </Button>
            )
          })}
        </div>
      </div>

      <div className="mt-3 h-[210px] min-h-[210px]" role="img" aria-label="Bar chart of profile views by day showing recruiter and user counts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={20}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={{ stroke: '#E5E7EB' }} tickLine={false} />
            <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={{ stroke: '#E5E7EB' }} tickLine={false} />
            <Tooltip content={<TooltipContent />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
            <Bar dataKey="recruiter" fill="#2563EB" radius={[6,6,0,0]} barSize={24} />
            <Bar dataKey="user" fill="#86EFAC" radius={[6,6,0,0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
