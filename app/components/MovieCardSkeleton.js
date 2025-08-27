"use client"
import React from 'react'

export default function MovieCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-[250px] h-[375px] bg-gray-200 rounded-lg mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  )
}
