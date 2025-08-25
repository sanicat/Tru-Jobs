import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-[5px] border border-border bg-white px-[18px] py-3 text-base font-normal text-text-tertiary placeholder:text-text-tertiary focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div className="absolute right-[18px] top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }