import { Avatar } from '@/components/ui/avatar'
import { LayoutDashboard, Briefcase, FileText, Bell, Settings, Pencil, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import profileImg from '@/assets/User_Profile/profile-1.png'

export default function SidebarNav() {
  return (
    <aside className="w-16 md:w-[240px] sticky top-[72px] self-start overflow-y-auto max-h-[calc(100vh-72px)]">
      <div className="rounded-xl border bg-white p-3 md:p-4">
        {/* Profile section */}
        <div className="relative mb-4 flex flex-col items-center text-center">
          <button
            aria-label="Edit profile"
            className="absolute right-0 top-0 rounded-md p-1 text-gray-500 hover:bg-gray-50"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <Avatar src={profileImg} fallback="RM" size="lg" className="mb-3" />
          <div className="text-base font-semibold">Rebekha Mikelson</div>
          <div className="text-sm text-gray-500">UX/UI Designer</div>
          <div className="mt-3">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Open to Opportunities
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <SidebarItem to="/jobseeker/dashboard" icon={<LayoutDashboard className="h-4 w-4" />}>Dashboard</SidebarItem>
          <SidebarItem to="/jobs" icon={<Briefcase className="h-4 w-4" />}>Jobs</SidebarItem>
          <SidebarItem to="/resume" icon={<FileText className="h-4 w-4" />}>Resume</SidebarItem>
          <SidebarItem to="/alerts" icon={<Bell className="h-4 w-4" />}>Job Alerts</SidebarItem>
          <SidebarItem to="/settings" icon={<Settings className="h-4 w-4" />}>Settings</SidebarItem>
        </nav>

        {/* Divider */}
        <div className="my-4 border-b" />

        {/* Bottom info cards */}
        <div className="space-y-3 text-sm hidden md:block">
          <div className="flex items-start gap-3 rounded-lg border bg-gray-50 p-3">
            <div className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <div className="font-medium">Resume</div>
              <div className="text-gray-500">Last updated 7 days back</div>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border bg-gray-50 p-3">
            <div className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <div className="font-medium">Appeared on</div>
              <div className="text-gray-500">25 searches this week</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

function SidebarItem({ to, icon, children }: { to: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-center md:justify-start gap-0 md:gap-2 rounded-lg px-3 py-2 text-[16px] font-medium transition-colors ${
          isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
        }`
      }
      aria-label={String(children)}
    >
      <span className="shrink-0 text-current">{icon}</span>
      <span className="hidden md:inline">{children}</span>
    </NavLink>
  )
}
