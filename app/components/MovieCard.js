"use client"
import { BookAudioIcon, FileAudio2Icon, FileAudioIcon, HeadphonesIcon, LanguagesIcon, Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie }) => {
    const router = useRouter()
    const [imageError, setImageError] = useState(false)
    // Array of movie IDs to exclude
    const excludedMovieIds = [715287, 993234, 1280461, 259872, 611251, 1470086, 226674, 460229,1127648,1242011,1506456]
    
    // Check if movie is adult content
    if (movie.adult === true || movie.adult === "true") {
        return null;
    }
    
    // Check if movie should be excluded
    if (excludedMovieIds.includes(movie.id)) {
        return null;
    }

    const handleImageError = () => {
        setImageError(true)
    }
    const movieid=movie.id || movie.movieid
    return (
        <div className='flex flex-col justify-between outline bg-gray-900 p-2 rounded-2xl hover:scale-105 transition-all duration-200 py-4 px-4 w-[250px] max-md:w-[47%] max-md:p-2 max-md:outline-1'>
            <div className='flex justify-center'>
                <Image 
                    width={200} 
                    height={300} 
                    onClick={() => { router.push(`/movies/${movieid}`) }} 
                    className='shadow-[#f84565] h-60 w-full shadow rounded-lg object-cover object-right-bottom cursor-pointer'
                    src={
                        !imageError && movie.poster_path
                            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                            : "/no-image.png"
                    }
                    alt={movie.title || 'Movie poster'}
                    onError={handleImageError}
                    priority={false}
                    loading="lazy"
                />
            </div>
            <p className='font-semibold truncate mt-2 text-center'>{movie.title}</p>
            <div className='flex  justify-around gap-5 items-center'>
                <p className='text-sm mt-2'>{new Date(movie.release_date).getFullYear()}  </p>
                <p className='text-sm mt-2 flex gap-3 items-center'><HeadphonesIcon/> {movie.original_language.toUpperCase()}</p>
            </div>

            {movie.genres && movie.genres.length > 0 && (
                <h1 className='flex gap-4'>
                    {movie.genres.map((genre) => genre.name).join('   |   ')}
                </h1>
            )}
            <div className='flex justify-between items-center mt-2' >
                <button onClick={() => { router.push(`/movies/${movieid}`) }} className='max-md:p-1 max-md:rounded-xl max-md:font-semibold max-md:text-[14px] max-md: text-black rounded-2xl cursor-pointer  bg-[#f84565] px-4 py-2 font-semibold hover:bg-[#f84565]/80'>View More</button>
                <div className='flex gap-1'>
                    <Star className='text-amber-400 object-fill fill-amber-400' />
                    {movie.vote_average.toFixed(1)}
                </div>
            </div>
        </div>
    );
}

export default MovieCard
