import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import DashboardLayout from '@/layouts/DashboardLayout'
import ApplicationSummary from '@/components/charts/ApplicationSummary'
import ApplicationsTrends from '@/components/charts/ApplicationsTrends'
import InvitationList, { type InvitationItem } from '@/components/invitations/InvitationList'
import ProfileViews from '@/components/charts/ProfileViews'
import { ArrowUpRight, ArrowDownRight, Users, MapPin, CheckCircle, Clock, XCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import bgBanner1 from '@/assets/mid-baner_bg-1.svg'
import bgBanner2 from '@/assets/mid-baner_bg-2.svg'
import companyLogo1 from '@/assets/Company_Logo-1.png'
import companyLogo2 from '@/assets/Company_Logo-2.png'

type Trend = 'up' | 'down'

interface WidgetItem {
  title: string
  value: number
  change: number // percent change
  trend: Trend
  iconBg: string
  cardBg: string
}

export default function JobSeekerDashboard() {
  const recScrollRef = useRef<HTMLDivElement | null>(null)

  // Attach non-passive wheel listener to allow preventDefault safely
  useEffect(() => {
    const el = recScrollRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const widgets: WidgetItem[] = [
    { title: 'Applied Jobs', value: 300, change: 5, trend: 'up', iconBg: 'bg-orange-500', cardBg: 'bg-orange-50' },
    { title: 'Job Invites', value: 218, change: 3.2, trend: 'up', iconBg: 'bg-sky-500', cardBg: 'bg-sky-50' },
    { title: 'Interviews', value: 126, change: 2, trend: 'down', iconBg: 'bg-amber-500', cardBg: 'bg-amber-50' },
    { title: 'Profile Views', value: 776, change: 8, trend: 'up', iconBg: 'bg-green-600', cardBg: 'bg-green-50' },
    { title: 'Saved Jobs', value: 118, change: 3.2, trend: 'up', iconBg: 'bg-blue-500', cardBg: 'bg-blue-50' },
  ]

  // Sample invitations
  const invitations: InvitationItem[] = [
    { id: '1', title: 'UX Designer', company: 'Senfore', remote: true, logo: companyLogo1, timeAgo: '1d ago' },
    { id: '2', title: 'Product Designer', company: 'Octane', remote: true, logo: companyLogo2, timeAgo: '3d ago' },
    { id: '3', title: 'UX Researcher', company: 'Techify', remote: true, logo: companyLogo1, timeAgo: '5d ago' },
  ]

  const jobs = [
    {
      company: 'Octaine',
      role: 'UX Designer',
      badges: ['Full Time', '3+ Yrs', 'UX Design'],
      location: 'Hyderabad',
      posted: '1d ago',
      logo: companyLogo1,
    },
    {
      company: 'Techify',
      role: 'UI Designer',
      badges: ['Full Time', '2+ Yrs', 'UX Design'],
      location: 'Bangalore',
      posted: '1d ago',
      logo: companyLogo2,
    },
    {
      company: 'Zesta',
      role: 'UI Developer',
      badges: ['Full Time', '3+ Yrs', 'Web UI'],
      location: 'Chennai',
      posted: '1d ago',
      logo: companyLogo1,
    },
  ]

  // Build a test carousel list: duplicate existing jobs until we have at least 8 cards, cap at 10.
  // TODO: Replace with backend data (remove duplication) when API is integrated.
  const minCards = 8
  const maxCards = 10
  const buildRecJobs = () => {
    const base = jobs
    const baseLen = base.length
    if (baseLen === 0) return [] as typeof base
    const total = Math.min(Math.max(baseLen, minCards), maxCards)
    return Array.from({ length: total }, (_, i) => base[i % baseLen])
  }
  const recJobs = buildRecJobs()

  type ApplyStatus = 'Active' | 'Pending' | 'Rejected'
  interface AppliedJob {
    company: string
    title: string
    type: string
    location: string
    salary: string
    date: string
    status: ApplyStatus
    icon: string
  }

  const appliedJobs: AppliedJob[] = [
    { company: 'Up', title: 'Networking Engineer', type: 'Remote', location: 'Washington', salary: '5L–8L/year', date: 'Feb 2, 2019 19:28', status: 'Active', icon: companyLogo1 },
    { company: 'Techify', title: 'Product Designer', type: 'Full Time', location: 'Dhaka', salary: '8L–12L/year', date: 'Mar 9, 2019 10:15', status: 'Pending', icon: companyLogo2 },
    { company: 'Apple', title: 'Junior Graphic Designer', type: 'Temporary', location: 'Brazil', salary: '12L–16L/year', date: 'Apr 14, 2019 17:45', status: 'Active', icon: companyLogo1 },
    { company: 'Octaine', title: 'UX Designer', type: 'Remote', location: 'Hyderabad', salary: '10L–14L/year', date: 'May 20, 2019 12:20', status: 'Rejected', icon: companyLogo2 },
    { company: 'Zesta', title: 'UI Developer', type: 'Contract', location: 'Chennai', salary: '9L–13L/year', date: 'Jun 1, 2019 09:30', status: 'Active', icon: companyLogo1 },
    { company: 'Nova Labs', title: 'Full-Stack Developer', type: 'Full Time', location: 'Mumbai', salary: '14L–20L/year', date: 'Jun 6, 2019 18:10', status: 'Pending', icon: companyLogo2 },
    { company: 'PixelWorks', title: 'Interaction Designer', type: 'Remote', location: 'Kolkata', salary: '6L–9L/year', date: 'Jun 12, 2019 08:05', status: 'Rejected', icon: companyLogo1 },
    { company: 'CodeSphere', title: 'UI Engineer', type: 'Full Time', location: 'Noida', salary: '11L–15L/year', date: 'Jun 18, 2019 16:25', status: 'Active', icon: companyLogo2 },
    { company: 'BrightAI', title: 'Product Designer', type: 'Full Time', location: 'Delhi', salary: '9L–12L/year', date: 'Jun 22, 2019 11:00', status: 'Pending', icon: companyLogo1 },
    { company: 'Quantum Inc', title: 'Frontend Developer', type: 'Remote', location: 'Remote', salary: '10L–14L/year', date: 'Jun 25, 2019 14:45', status: 'Active', icon: companyLogo2 },
  ]

  return (
    <DashboardLayout>
      {/* Page title */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {/* Widgets: responsive grid */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {widgets.map((w) => (
          <WidgetCard key={w.title} item={w} />
        ))}
      </div>

      {/* Quick insights and actions */}
      <Card className="mb-6 rounded-xl p-4 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <div className="text-base font-semibold">Welcome back, Rebekha</div>
            <p className="text-sm text-gray-600">Here’s what’s happening with your job search.</p>
          </div>
          <div className="flex gap-2">
            <button aria-label="Update resume" className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50">Update Resume</button>
            <button aria-label="Search jobs" className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">Search Jobs</button>
          </div>
        </div>
      </Card>

      {/* Mid Banners: equal height responsive grid */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Banner */}
        <div className="group overflow-hidden rounded-xl shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:shadow-md">
          <div
            className="h-full min-h-[180px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgBanner1})` }}
            aria-label="Expert-Built Resumes banner"
          >
            <div className="p-6 flex flex-col justify-between h-full text-gray-900">
              <div>
                <div className="text-[18px] font-semibold">Expert-Built Resumes</div>
                <p className="mt-1 text-[14px] opacity-80">Crafted from scratch by professionals.</p>
              </div>
              <div className="mt-4">
                <Button variant="outline" className="rounded-full bg-white/90 text-blue-700 hover:bg-white" aria-label="View Details">View Details</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Banner */}
        <div className="group overflow-hidden rounded-xl shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:shadow-md">
          <div
            className="h-full min-h-[180px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgBanner2})` }}
            aria-label="Stand Out to Employers banner"
          >
            <div className="p-6 flex flex-col justify-between h-full text-gray-900">
              <div>
                <div className="text-[18px] font-semibold">Stand Out to Employers</div>
                <p className="mt-1 text-[14px] opacity-80">Shine above other applicants.</p>
              </div>
              <div className="mt-4">
                <Button variant="outline" className="rounded-full bg-white/90 text-blue-700 hover:bg-white" aria-label="Know More">Know More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="mb-6 -mx-4 px-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recommended Jobs</h2>
          <a href="#" className="text-sm text-blue-600 font-medium hover:underline">View all</a>
        </div>

        {/* Horizontal scroll with peeking 4th card on lg+ */}
        <div
          ref={recScrollRef}
          className="scrollbar-light overflow-x-auto scroll-smooth pb-2"
        >
          <div className="flex gap-4 pr-6">
            {recJobs.map((j, idx) => (
              <div
                key={idx}
                className="shrink-0 bg-white rounded-[12px] border border-gray-200 p-4 flex flex-col justify-between shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] transition-all duration-300
                w-[77%] sm:w-[58%] md:w-[calc(100%/2.6)] lg:w-[calc(100%/3.625)]"
              >
                {/* Top row */}
                <div className="mb-3 flex items-start justify-between">
                  <img src={j.logo} alt={`${j.company} logo`} className="h-10 w-10 rounded-md object-cover" />
                  <span className="text-xs text-gray-500">{j.posted}</span>
                </div>
                {/* Job info */}
                <div className="mb-2">
                  <div className="text-base font-semibold text-gray-900">{j.role}</div>
                  <div className="text-sm text-gray-500">{j.company}</div>
                </div>
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {j.badges.map((b) => (
                    <span key={b} className="bg-gray-100 text-[10px] text-gray-600 px-1.5 py-0.5 rounded-full font-medium">{b}</span>
                  ))}
                </div>
                {/* Bottom row */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-700">
                    <MapPin className="h-3.5 w-3.5 text-gray-500" />
                    <span>{j.location}</span>
                  </div>
                  <a href="#" className="text-sm text-blue-600 font-medium hover:underline">View More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Applies */}
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Applies</h2>
        <a href="#" aria-label="View all recent applies" className="text-sm font-medium text-blue-600 hover:underline">View all</a>
      </div>
      <Card className="rounded-xl p-0 shadow-sm">
        <div className="overflow-hidden rounded-xl">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#8CB9F2] text-gray-900">
                <TableHead className="w-[48%] first:rounded-tl-xl">Job</TableHead>
                <TableHead className="hidden md:table-cell">Date Applied</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="text-right first:rounded-tr-xl hidden md:table-cell">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appliedJobs.slice(0, 5).map((r, i) => (
                <TableRow key={i} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-start gap-3">
                      <img src={r.icon} alt={`${r.company} icon`} className="h-10 w-10 rounded-md object-cover" />
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 truncate">{r.title}</div>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                          <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">{r.type}</span>
                          <span className="flex items-center gap-1 whitespace-nowrap"><MapPin className="h-4 w-4 text-gray-500" /> {r.location}</span>
                          <span className="text-gray-500 whitespace-nowrap">{r.salary}</span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell whitespace-nowrap">{r.date}</TableCell>
                  <TableCell className="hidden sm:table-cell whitespace-nowrap">
                    {r.status === 'Active' && (
                      <span className="inline-flex items-center gap-1 text-green-600"><CheckCircle className="h-4 w-4" /> Active</span>
                    )}
                    {r.status === 'Pending' && (
                      <span className="inline-flex items-center gap-1 text-gray-500"><Clock className="h-4 w-4" /> Pending</span>
                    )}
                    {r.status === 'Rejected' && (
                      <span className="inline-flex items-center gap-1 text-red-600"><XCircle className="h-4 w-4" /> Rejected</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right hidden md:table-cell">
                    <a href="#" className="text-blue-600 hover:underline">View Details</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Analytics */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ApplicationSummary />
        </div>
        <div className="lg:col-span-1">
          <ApplicationsTrends />
        </div>
      </div>

      {/* Invitations + Profile Views */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <InvitationList items={invitations} />
        </div>
        <div className="lg:col-span-2">
          <ProfileViews />
        </div>
      </div>
    </DashboardLayout>
  )
}

function WidgetCard({ item }: { item: WidgetItem }) {
  const isUp = item.trend === 'up'
  const TrendIcon = isUp ? ArrowUpRight : ArrowDownRight
  const trendColor = isUp ? 'text-green-600' : 'text-red-600'

  return (
    <Card
      className={`group ${item.cardBg} rounded-2xl p-5 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md`}
      aria-label={`${item.title} widget`}
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.iconBg} text-white`}>
          <Users className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-3">
        <div className="text-[28px] font-bold leading-tight text-gray-900">{item.value}</div>
        <div className="text-sm font-semibold text-gray-700">{item.title}</div>
      </div>
      <div className="mt-2 flex items-center gap-1 text-xs text-gray-600">
        <TrendIcon className={`h-4 w-4 ${trendColor}`} aria-hidden="true" />
        <span className={`${trendColor} font-semibold`}>{isUp ? '+' : '-'}{item.change}%</span>
        <span className="text-gray-500">Last Week</span>
      </div>
    </Card>
  )
}

// removed banner illustration; background images now applied directly per spec
