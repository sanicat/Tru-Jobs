import * as React from 'react'
import { cn } from '@/lib/utils'

interface DropdownMenuContextValue {
  open: boolean
  setOpen: (v: boolean) => void
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue | null>(null)

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-dropdown-root]')) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div data-dropdown-root className="relative inline-block">{children}</div>
    </DropdownMenuContext.Provider>
  )
}

export const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, onClick, ...props }, ref) => {
    const ctx = React.useContext(DropdownMenuContext)
    if (!ctx) throw new Error('DropdownMenuTrigger must be used within DropdownMenu')
    return (
      <button
        ref={ref}
        className={cn('inline-flex items-center justify-center', className)}
        onClick={(e) => {
          onClick?.(e)
          ctx.setOpen(!ctx.open)
        }}
        aria-haspopup="menu"
        aria-expanded={ctx.open}
        {...props}
      />
    )
  }
)
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger'

export const DropdownMenuContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => {
    const ctx = React.useContext(DropdownMenuContext)
    if (!ctx) throw new Error('DropdownMenuContent must be used within DropdownMenu')
    if (!ctx.open) return null
    return (
      <div
        ref={ref}
        role="menu"
        className={cn(
          'absolute right-0 z-50 mt-2 min-w-[12rem] rounded-md border border-gray-200 bg-white p-1 shadow-md focus:outline-hidden',
          className
        )}
        style={{ ...style }}
        {...props}
      />
    )
  }
)
DropdownMenuContent.displayName = 'DropdownMenuContent'

export function DropdownMenuLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-2 py-1.5 text-xs font-medium text-gray-500', className)} {...props} />
}

export function DropdownMenuSeparator({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn('my-1 border-gray-200', className)} {...props} />
}

export const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="menuitem"
      className={cn(
        'flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm text-gray-700 outline-hidden hover:bg-gray-100',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
})
DropdownMenuItem.displayName = 'DropdownMenuItem'
