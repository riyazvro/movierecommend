"use client"
import React, { useState, useContext } from 'react'
import { useRouter, usePathname } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import { ListTodoIcon, MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const pathname = usePathname();
  const isAdmin = pathname?.includes("/admin");
  const [isOpen, setisOpen] = useState(false);
  const { user, isLoaded } = useUser();
  const [searchbaropen, setsearchbaropen] = useState(false)
  const [search, setsearch] = useState("")
  const [searchResults, setsearchResults] = useState(null)
  const [searchresopen, setsearchresopen] = useState(true)
  const router = useRouter()
  const searchMovies = async (search) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${search}&language=en-US&page=1&include_adult=false`
    );
    const data = await res.json();
    // console.log(data.results);
    setsearchResults(data.results)
  };
  return (
    <>
      {!isAdmin && <nav className='md:mb-14 mb-10'>
        <div className='fixed  backdrop-blur-2xl flex justify-between items-center  top-0 left-0 right-0 z-50 bg-transparent md:px-16 lg:px-10  mb-3 p-3 max-md:px-3'>
          <Link href="/" onClick={() => setisOpen(false)}>
            <Image
              width={100}
              height={100}
              src={"/logo.svg"}
              alt='logo'
              className="md:w-60 max-md:w-40"
              priority={true}
              loading="eager"
              fetchPriority="high"
              onLoad={() => {
                // Logo loaded successfully
              }}
              onError={(e) => {
                console.warn('Logo failed to load:', e);
              }}
            />
          </Link>
          <div className={`flex items-center  md:rounded-4xl   px-4 py-2 md:outline   backdrop-blur max-md:absolute max-md:top-14 max-md:left-0 max-md:h-screen  max-md:flex-col max-md:w-[500px] max-md:bg-black  ${isOpen ? "max-md:w-[100px] justify-center items-center" : "max-md:w-0 max-md:left-[-500px]"}`}>
            <XIcon onClick={() => setisOpen(false)} className='max-md:block hidden w-10 h-10 cursor-pointer mb-10 absolute right-[90px] top-3 hover:text-gray-700' />
            <div className='max-md:mt-40 md:text-[16px] lg:text-[20px] md:gap- text-xl  flex max-md:flex-col backdrop-blur-lg max-md:absolute max-md:top-10 max-md:right-[250px]'>

              <Link onClick={() => { scrollTo(0, 0); setisOpen(false) }} className=' hover:bg-[#171717]  md:px-3 px-5 py-2 rounded-xl ' href="/">Home</Link>
              <Link onClick={() => { scrollTo(0, 0); setisOpen(false) }} className=' hover:bg-[#171717]  md:px-3 px-3 py-2 rounded-xl' href="/watchlater">WatchLater</Link>
              <Link onClick={() => { scrollTo(0, 0); setisOpen(false) }} className=' hover:bg-[#171717]  md:px-3 px-3 py-2 rounded-xl' href="/favorites">Favorites</Link>
              <Link onClick={() => { scrollTo(0, 0); setisOpen(false) }} className=' hover:bg-[#171717]  md:px-3 px-3 py-2 rounded-xl' href="/movieoftheday">Today&apos;s Movie</Link>

            </div>
          </div>
          <div className='flex justify-center items-center md:gap-4 md:w-[15%]'>
            <div className='flex gap-4'>

              {searchbaropen &&

                <input type="text"
                  value={search}
                  placeholder='Search Movies ...'
                  onChange={(E) => setsearch(E.target.value)}
                  className=' max-md:top-16  md:right-[15.5%] px-4 md:w-[170px] max-md:left-[18px] rounded-xl h-10 w-[80%] backdrop-blur-2xl absolute top-6  border' />
              }

              <SearchIcon onClick={() => {
                if (searchbaropen) {
                  if (search.length == 0) {
                    setsearchbaropen(!searchbaropen)

                  }

                  searchMovies(search)
                }
                else {
                  setsearchbaropen(!searchbaropen)
                }
              }} className='w-8 h-8 max-md:mr-3 cursor-pointer ' />

            </div>
            {isLoaded && (
              user ? (
                <div className="flex items-center gap-2">
                  <UserButton />
                  <Link href="/favorites" className="flex items-center gap-1 px-3 py-2 bg-[#f84565] text-black rounded-lg hover:bg-[#f84565]/80">
                    <ListTodoIcon className="w-4 h-4" />
                    <span className="hidden md:inline">Favorites</span>
                  </Link>
                </div>
              ) : (
                <SignInButton mode="modal">
                  <button className='px-4 py-2 cursor-pointer bg-primary max-md:h-10 max-md:font-light max-md:text-[20px] max-md:px-2 max-md:rounded-xl text-2xl font-bold hover:outline-1 hover:outline-white hover:bg-primary/80 text-black rounded-3xl bg-[#f84565] outline outline-black'>Log In</button>
                </SignInButton>
              )
            )}

            {/* login button */}
            <MenuIcon onClick={() => setisOpen(!isOpen)} className="max-md:ml-4 md:hidden sm:block w-8 h-8 cursor-pointer hover:text-gray-700" />
          </div>

          {searchResults && <div className={`${searchbaropen ? "" : "hidden"} pt-5 rounded-2xl absolute top-24 md:right-20 max-md:w-[90%] max-md:left-4 flex flex-col gap-3 md:w-1/4 p-2 bg-[#414141]`} onBlur={() => { setsearchbaropen(!searchbaropen); setsearch(""); setsearchResults(null) }}>
            <XIcon onClick={() => { setsearchbaropen(!searchbaropen); setsearch(""); setsearchResults(null) }} className='cursor-pointer ml-[90%]' />
            {searchResults?.slice(0, 10)
              // ?.filter(item =>
              //   item.original_title?.toLowerCase().includes(search.toLowerCase())
              // )
              .map(item => (
                <div
                  key={item.id}
                  className='flex gap-2 items-center h-14 max-md:w-[100%] cursor-pointer border rounded-2xl px-4 py-1'
                  onClick={() => {
                    router.push(`/movies/${item.id}`);
                    setsearch("");
                    setsearchResults(null);
                    setsearchbaropen(!searchbaropen)
                  }}
                >
                  <Image
                    src={
                      item.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                        : "/no-image.png"
                    }
                    width={50}
                    height={50}
                    alt='movie'
                    className='w-15 h-10 rounded-[4px]'
                  />
                  <h1 className='overflow-ellipsis overflow-hidden whitespace-nowrap'>{item.title}</h1>
                </div>
              ))}
          </div>}

        </div>
      </nav>}
    </>
  )
}

export default Navbar
