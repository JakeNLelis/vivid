'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SimiuLoader } from '@/components/simiu-loader'

export function NavigationLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setIsLoading(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [pathname])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const target = event.target as HTMLElement | null
      const link = target?.closest('a')
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return
      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname && url.hash) return

      event.preventDefault()
      setIsLoading(true)
      router.push(`${url.pathname}${url.search}${url.hash}`)
      timeoutRef.current = setTimeout(() => setIsLoading(false), 4000)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [router])

  return (
    <>
      {children}
      {isLoading && (
        <div className="simiu-navigation-loader" role="status" aria-live="polite" aria-label="Loading page">
          <SimiuLoader />
        </div>
      )}
    </>
  )
}
