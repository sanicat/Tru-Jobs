import { useState } from 'react'
import Header from '@/components/Header'
import SidebarNav from '@/components/SidebarNav'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
      {/* Header */}
      <Header onToggleSidebar={() => setOpen((v) => !v)} />

      {/* Body with sidebar */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[240px_1fr] gap-6 px-4 py-6">
        {/* Sidebar */}
        <aside className={`${open ? 'block' : 'hidden'} md:block`}>
          <SidebarNav />
        </aside>

        {/* Main content */}
        <main className="pb-10 overflow-x-hidden overflow-y-hidden">{children}</main>
      </div>
    </div>
  )
}
