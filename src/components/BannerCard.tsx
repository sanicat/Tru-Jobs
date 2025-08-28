import { Button } from '@/components/ui/button'
import * as React from 'react'

export interface BannerCardProps {
  title: string
  description: string
  ctaLabel: string
  onClick?: () => void
  gradient?: string // Tailwind gradient classes
  illustration?: React.ReactNode
}

export default function BannerCard({ title, description, ctaLabel, onClick, gradient = 'bg-gradient-to-r from-teal-100 to-cyan-100', illustration }: BannerCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${gradient} p-6 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md`}> 
      <div className="flex min-h-[140px] items-center justify-between gap-6">
        <div className="max-w-[60%]">
          <div className="text-[18px] font-semibold text-gray-900">{title}</div>
          <p className="mt-1 text-[14px] text-gray-700">{description}</p>
          <Button aria-label={ctaLabel} onClick={onClick} className="mt-4 rounded-full bg-blue-600 px-5 py-2 text-sm hover:bg-blue-700">
            {ctaLabel}
          </Button>
        </div>
        {illustration && (
          <div aria-hidden className="ml-auto shrink-0">
            {illustration}
          </div>
        )}
      </div>
    </div>
  )
}
