import { Bell, ChevronDown, Search } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar } from '@/components/ui/avatar'
import logoUrl from '@/assets/tru-jobs-logo.svg'

type HeaderProps = {
  onToggleSidebar?: () => void
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 h-[72px] border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center gap-4 px-4">
        {/* Mobile: hamburger to toggle sidebar */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white text-gray-700 hover:bg-gray-50 md:hidden"
          aria-label="Toggle sidebar"
          onClick={onToggleSidebar}
        >
          {/* simple three lines icon */}
          <span className="block h-0.5 w-5 bg-gray-700" />
          <span className="mt-1 block h-0.5 w-5 bg-gray-700" />
          <span className="mt-1 block h-0.5 w-5 bg-gray-700" />
        </button>
        {/* Left: Logo */}
        <a href="/jobseeker/dashboard" className="flex shrink-0 items-center gap-2">
          <img src={logoUrl} alt="Tru-Jobs" className="h-7 w-auto" />
        </a>

        {/* Center: Search (fixed size, aligned near right) */}
        <div className="hidden flex-1 md:flex justify-end">
          <div className="flex w-[500px] h-10 items-center gap-2 rounded-md border border-gray-300 bg-white px-3">
            {/* Country dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-gray-700">
                <span className="fi fi-us" aria-hidden="true"></span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuLabel>Select Country</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><span className="fi fi-us mr-2" />United States</DropdownMenuItem>
                <DropdownMenuItem><span className="fi fi-gb mr-2" />United Kingdom</DropdownMenuItem>
                <DropdownMenuItem><span className="fi fi-in mr-2" />India</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search input */}
            <div className="relative flex-1 h-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, keyword, company"
                className="h-full w-full rounded-md border border-transparent pl-9 pr-3 text-sm outline-hidden focus:border-transparent focus:ring-0"
              />
            </div>
          </div>
        </div>

        {/* Right: actions */}
        <div className="ml-auto flex items-center gap-4">
          {/* Collapsed search for small screens */}
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white text-gray-700 hover:bg-gray-50 md:hidden">
            <Search className="h-5 w-5" />
          </button>

          {/* Notification bell with badge */}
          <div className="relative">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white text-gray-700 hover:bg-gray-50">
              <Bell className="h-5 w-5" />
            </button>
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-blue-600 px-1 text-[11px] font-semibold leading-none text-white">3</span>
          </div>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
              <Avatar fallback="JS" size="md" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
