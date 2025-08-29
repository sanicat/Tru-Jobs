import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts'

// Types
type Period = 'Day' | 'Week' | 'Month'

interface DataPoint {
  label: string
  month?: string
  sent: number
  interview: number
}

// Placeholder datasets
const monthData: DataPoint[] = [
  { label: 'Jan', sent: 22, interview: 10 },
  { label: 'Feb', sent: 24, interview: 12 },
  { label: 'Mar', sent: 20, interview: 11 },
  { label: 'Apr', sent: 19, interview: 9 },
  { label: 'May', sent: 27, interview: 18 },
  { label: 'Jun', sent: 34, interview: 16 }, // peak
  { label: 'Jul', sent: 26, interview: 11 }, // dip begins
  { label: 'Aug', sent: 18, interview: 9 }, // lowest
  { label: 'Sep', sent: 28, interview: 17 }, // 2nd bump
  { label: 'Oct', sent: 30, interview: 18 },
  { label: 'Nov', sent: 24, interview: 17 },
  { label: 'Dec', sent: 22, interview: 10 },
]

// Lightweight alternative datasets just to demonstrate interaction
const weekData: DataPoint[] = [
  { label: 'W1', sent: 10, interview: 4 },
  { label: 'W2', sent: 12, interview: 5 },
  { label: 'W3', sent: 16, interview: 7 },
  { label: 'W4', sent: 14, interview: 6 },
]

const dayData: DataPoint[] = [
  { label: 'Mon', sent: 6, interview: 2 },
  { label: 'Tue', sent: 8, interview: 3 },
  { label: 'Wed', sent: 7, interview: 3 },
  { label: 'Thu', sent: 10, interview: 4 },
  { label: 'Fri', sent: 9, interview: 3 },
  { label: 'Sat', sent: 5, interview: 2 },
  { label: 'Sun', sent: 4, interview: 1 },
]

const ActiveDot = ({ cx, cy, fill }: { cx?: number; cy?: number; fill: string }) => {
  if (typeof cx !== 'number' || typeof cy !== 'number') return null
  return (
    <g>
      <circle cx={cx} cy={cy} r={4} fill={fill} />
      <circle cx={cx} cy={cy} r={7} fill={fill} opacity={0.15} />
    </g>
  )
}

const CustomTooltip = ({ active, label, payload }: any) => {
  if (!active || !payload || !payload.length) return null
  return (
    <div
      role="dialog"
      tabIndex={0}
      className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm outline-none"
    >
      <div className="text-xs font-medium text-gray-700 mb-1">{label}</div>
      <div className="flex items-center gap-3 text-xs">
        <div className="flex items-center gap-1 text-gray-700">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: '#22C55E' }} />
          <span>Sent: <b>{payload[0]?.value}</b></span>
        </div>
        <div className="flex items-center gap-1 text-gray-700">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: '#2563EB' }} />
          <span>Interview: <b>{payload[1]?.value}</b></span>
        </div>
      </div>
    </div>
  )
}

export default function ApplicationSummary() {
  const [period, setPeriod] = useState<Period>('Month')

  const data = useMemo(() => {
    if (period === 'Day') return dayData
    if (period === 'Week') return weekData
    return monthData
  }, [period])

  const isMonth = period === 'Month'

  return (
    <Card className="rounded-2xl border border-gray-200 shadow-sm bg-white h-[300px] min-h-[260px] flex flex-col">
      <div className="px-5 md:px-6 pt-4 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[18px] font-semibold text-gray-900">Application Summary</div>
            <div className="mt-2 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: '#22C55E' }} />
                <span>Sent</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: '#2563EB' }} />
                <span>Interview</span>
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
                  role="tab"
                  className={`h-8 rounded-full px-3 text-xs ${
                    active ? 'bg-[#2563EB] text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                  variant={active ? 'default' : 'outline'}
                  onClick={() => setPeriod(p)}
                >
                  {p}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 p-5 md:p-6 pt-2">
        <div className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 4 }}>
              <CartesianGrid stroke="#E5E7EB" vertical={false} />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 12, fill: '#6B7280' }}
                tickLine={false}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <YAxis
                domain={[0, 40]}
                ticks={[0, 10, 20, 30, 40]}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                tickLine={false}
                axisLine={{ stroke: '#E5E7EB' }}
                width={32}
                tickMargin={4}
              />
              <Tooltip cursor={{ stroke: '#E5E7EB' }} content={<CustomTooltip />} />

              {/* Sent: mint area + soft line */}
              <Area type="monotone" dataKey="sent" fill="rgba(34,197,94,0.15)" stroke="#22C55E" strokeWidth={2} />
              <Line type="monotone" dataKey="sent" stroke="#22C55E" strokeWidth={2} dot={<ActiveDot fill="#22C55E" />} />

              {/* Interview: blue line + light area */}
              <Area type="monotone" dataKey="interview" fill="rgba(37,99,235,0.10)" stroke="#2563EB" strokeWidth={2} />
              <Line type="monotone" dataKey="interview" stroke="#2563EB" strokeWidth={2} dot={<ActiveDot fill="#2563EB" />} />

              {/* Vertical reference line at Jun with a small badge if in Month view */}
              {isMonth && (
                <ReferenceLine
                  x="Jun"
                  stroke="#34D399"
                  strokeDasharray="3 3"
                  label={({ viewBox }: { viewBox?: unknown }) => {
                    // Always return an element to satisfy types
                    const jun = monthData.find((d) => d.label === 'Jun')
                    if (!viewBox || !jun) return <g />
                    const { x, y } = viewBox as any
                    return (
                      <g transform={`translate(${x}, ${y || 0})`}>
                        <foreignObject x={-12} y={-28} width={32} height={20}>
                          <div className="rounded-full bg-emerald-400 px-2 py-[2px] text-[10px] font-semibold text-white shadow-sm">34</div>
                        </foreignObject>
                      </g>
                    )
                  }}
                />
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}
