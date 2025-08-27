"use client"
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Page = () => {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const res = await fetch('/api/favorite', { method: 'GET', cache: 'no-store' })
        const data = await res.json()
        setFavorites(Array.isArray(data?.result) ? data.result : [])
        // console.log(favorites[0]);
        
      } catch (error) {
        console.error('Failed to load favorites', error)
      } finally {
        setLoading(false)
      }
    }
    getMoviesList()
  }, [])

  return (
    <div className='md:w-[90%] mx-auto'>
      <div className='text-4xl font-semibold text-center mb-3  animate-pulse border-b-2 w-fit text-[#f84565] pb-3 mx-auto'>Your Favorite Movies</div>
      <div className='flex flex-wrap gap-3 mb-4'>

        {favorites.map((item) => (
          <MovieCard key={item.movieid} movie={item} />
        ))}
      </div>
    </div>
  )
}

export default Page
