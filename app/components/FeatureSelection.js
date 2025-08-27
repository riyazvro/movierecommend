"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import BlurCircle from './BlurCircle'
import { useRouter } from 'next/navigation'
// import { moviepage } from '../assets/assets'
import MovieCard from './MovieCard'
import toast from 'react-hot-toast'
import { useSessionStorage } from 'usehooks-ts'
import { measureAsyncTime, monitorApiCall } from '../lib/debug'

const FeatureSelection = () => {
  const router = useRouter();
  const [moviepage, setmoviepage] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageno, setpageno] = useSessionStorage('pageno', 1)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
        if (!apiKey) {
          throw new Error('TMDB API key not found')
        }
        
        const res = await measureAsyncTime(`Fetch movies page ${pageno}`, () =>
          monitorApiCall(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageno}`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json'
            }
          })
        )
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        
        const data = await res.json()
        setmoviepage(data.results || [])
      } catch (err) {
        console.error('Error fetching movies:', err)
        setError(err.message)
        toast.error('Failed to load movies')
      } finally {
        setLoading(false)
      }
    }

    // Add a small delay to prevent rapid API calls
    const timeoutId = setTimeout(fetchData, 100)
    return () => clearTimeout(timeoutId)
  }, [pageno])

  if (loading) {
    return (
      <div className='md:p-4 mt-10 max-md:w-full'>
        <div className='flex justify-center items-center h-64'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#f84565]'></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='md:p-4 mt-10 max-md:w-full'>
        <div className='flex justify-center items-center h-64'>
          <p className='text-red-500'>Error loading movies: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='md:p-4  max-md:w-full' id='moviepage'>
      <div className=' flex justify-between  md:mx-auto pt-4 max-md:w-full max-md:px-4'>
        <BlurCircle top="20%" left="10%" />
        <h1 className='text-[#f84565] font-semibold text-3xl md:ml-22'>Popular Movies</h1>
      </div>
      <BlurCircle left='-100px' bottom='-150px' />
      <div className='flex flex-wrap gap-4 max-md:justify-center justify-center w-[100%] mx-auto p-4 max-md:w-full'>
        {moviepage.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>
      <div className='flex justify-center items-center gap-4'>
        <Link href='/'>
          <button onClick={() => {
            if (pageno <= 1) {
              toast.error("This is the first page")
            } else {
              setpageno(pageno - 1)
            }
          }} className='bg-[#f84565] hover:bg-[#f84565]/80 px-3 py-2 text-black font-semibold rounded-2xl cursor-pointer flex gap-2 w-30 justify-center items-center'><ArrowLeft /> Previous</button>
        </Link>
        <button className='bg-[#f84565] px-5 py-2 text-black font-semibold rounded-xl '>
          {pageno}
        </button>
        <Link href='/'>
          <button onClick={() => {
            setpageno(pageno + 1)
          }} className='bg-[#f84565] hover:bg-[#f84565]/80 px-3 py-2 text-black font-semibold rounded-2xl cursor-pointer flex gap-2 w-30 justify-center items-center'>Next<ArrowRight /></button>
        </Link>
      </div>
    </div>
  )
}

export default FeatureSelection
