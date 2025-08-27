"use client"
import React, { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link'; // import Link

const Footer = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isAdmin = pathname?.includes("/admin");
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <>
      {!isAdmin && (
        <footer className="bg-black text-white py-8 mt-auto">
          <div className="container mx-auto px-4 md:px-16 lg:px-36">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Movie Recomendation WebApp</h3>
                <p className="text-gray-300 mb-4">
                  Check and Favorite movies here
                </p>
                <div className="flex space-x-4">
                  <Link href="https://github.com/riyazvro" target='_blank' className="text-gray-300 hover:text-white">Github</Link>
                  <Link href="https://x.com/Riyaz63023" target='_blank' className="text-gray-300 hover:text-white">Twitter</Link>
                  <Link href="https://www.instagram.com/riyaz._op/" target='_blank' className="text-gray-300 hover:text-white">Instagram</Link>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/aboutdev" className="text-gray-300 hover:text-white">About TheDeveloper</Link>
                  </li>
                  <li>
                    <Link href="/movieoftheday" className="text-gray-300 hover:text-white">Today&apos;s Movie</Link>
                  </li>
                  <li>
                    <Link href="/favorites" className="text-gray-300 hover:text-white">Favorites</Link>
                  </li>
                  <li>
                    <Link href="/watchlater" className="text-gray-300 hover:text-white">Watchlater</Link>
                  </li>
                </ul>
              </div>
              
              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-300 hover:text-white">Help Center</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300">
                © 2024 Movie Recommendation App. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}

export default Footer
