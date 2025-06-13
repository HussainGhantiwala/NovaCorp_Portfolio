"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Remove from DOM after transition completes
      setTimeout(() => {
        setShouldRender(false)
      }, 500)
    }, 1000) // Reduced loading time

    return () => clearTimeout(timer)
  }, [])

  // Don't render at all once loading is complete
  if (!shouldRender) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <div className="mb-4 animate-pulse">
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text font-mono text-3xl font-bold text-transparent">
            NOVA CORP
          </span>
        </div>
        <div className="flex justify-center space-x-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary"></div>
        </div>
      </div>
    </div>
  )
}
