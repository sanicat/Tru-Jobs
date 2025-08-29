import { Card } from '@/components/ui/card'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const pieData = [
  { name: 'On-Site', value: 98, color: '#86EFAC' },
  { name: 'Remote', value: 64, color: '#93C5FD' },
  { name: 'Hybrid', value: 36, color: '#3B82F6' },
]

const CenterLabel = ({ cx, cy }: any) => {
  if (typeof cx !== 'number' || typeof cy !== 'number') return null
  return (
    <g>
      <text x={cx} y={cy - 2} textAnchor="middle" className="fill-gray-900" style={{ fontSize: 24, fontWeight: 700 }}>
        198
      </text>
      <text x={cx} y={cy + 16} textAnchor="middle" className="fill-gray-500" style={{ fontSize: 12 }}>
        Applications
      </text>
    </g>
  )
}

export default function ApplicationsTrends() {
  return (
    <Card className="rounded-2xl border border-gray-200 shadow-sm bg-white h-[300px] min-h-[260px] flex flex-col">
      <div className="px-5 md:px-6 pt-4 pb-0">
        <div className="text-[18px] font-semibold text-gray-900">Applications Trends</div>
      </div>
      <div className="flex-1 p-5 md:p-6 pt-2">
        <div className="grid grid-cols-[150px_1fr] h-full">
          {/* Donut */}
          <div className="flex items-center justify-center h-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={40}
                  outerRadius={56}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={2}
                  isAnimationActive
                  label={<CenterLabel />}
                  labelLine={false}
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-[auto_auto] gap-x-2 gap-y-2 text-sm text-gray-700">
              {pieData.map((item) => (
                <div className="contents" key={item.name}>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-right tabular-nums">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
