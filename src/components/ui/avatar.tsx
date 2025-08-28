import * as React from 'react'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
} as const

export function Avatar({ src, alt, fallback, size = 'md', className = '', ...props }: AvatarProps) {
  const [error, setError] = React.useState(false)
  const sizeCls = sizeMap[size]

  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-600 ${sizeCls} ${className}`}
      {...props}
    >
      {src && !error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt || ''}
          className="h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="select-none font-medium">{fallback?.slice(0, 2) || '?'}</span>
      )}
    </div>
  )
}

export default Avatar
