import React from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "This is about page",
    description: "This page will tell about nothing"
}

export default function about() {
  return (
    <div className='text-12xl bg-sky-500 text-black'>
      <h1 className={inter.className}>
      This is about contact
      </h1>
    </div>
  )
}
