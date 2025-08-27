"use client"
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Page = () => {
  const [watchlater, setwatchlater] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const res = await fetch('/api/watchlater', { method: 'GET', cache: 'no-store' })
        const data = await res.json()
        setwatchlater(Array.isArray(data?.result) ? data.result : [])
      } catch (error) {
        console.error('Failed to load watchlater', error)
      } finally {
        setLoading(false)
      }
    }
    getMoviesList()
  }, [])

  return (
    <div className='md:w-[90%] w-full md:p-3 md:mx-auto'>
      <div className='text-4xl font-semibold text-center mb-3  animate-pulse border-b-2 w-fit text-[#f84565] pb-3 mx-auto'>Your Watchlater Movies</div>
      <div className='flex flex-wrap pl-3 gap-3 mb-4'>

        {watchlater.map((item) => (
          <MovieCard key={item.movieid} movie={item} />
        ))}
      </div>
    </div>
  )
}

export default Page
