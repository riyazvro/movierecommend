"use client"
import React, { useState, useEffect } from 'react'

import FeatureSelection from './components/FeatureSelection'
import ErrorBoundary from './components/ErrorBoundary'
import { useSessionStorage } from 'usehooks-ts'
import { ArrowRight, XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'



export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [isopen, setisopen] = useSessionStorage("open", true)
  const router = useRouter()
  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!process.env.NEXT_PUBLIC_TMDB_API_KEY) {
    console.warn('TMDB API key not found. Please check your environment variables.');
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#f84565] mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-white mb-2">MovieTicket</h1>
          <p className="text-gray-400">Loading your movie experience...</p>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div>
        {isopen && <div className='md:w-[31.5%] max-md:w-[90%] max-md:mx-[5%] md:mx-[34%] flex rounded-3xl border px-4 relative gap-10 py-3'
          
        >
          <div className='flex max-md:gap-3 md:gap-4 cursor-pointer'
          onClick={() => { router.push("/movieoftheday"); setisopen(!isopen) }}
          >

            <div className="max-md:truncate max-md:w-[200px] text-gray-400 truncate">Check Out Today&apos;s Recommended Movie</div>
            <ArrowRight className='animate-ping duration-1000' />
          </div>
          <XIcon className='absolute top-3 right-5 cursor-pointer' onClick={() => { setisopen(!isopen) }} />
        </div>}
        <FeatureSelection />
      </div>
    </ErrorBoundary>
  )
}

