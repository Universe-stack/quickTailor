'use client'
import React from 'react'
import { useTheme } from 'next-themes'

type Props = {}

const CtaTwo = (props: Props) => {
    const {theme} = useTheme()
    const sectionClasses = `${theme === 'dark' ? 'text-[#fff] bg-shiptodayBlue w-full w-full flex justify-center py-8 mb-10 rounder-[2rem]' : 'bg-shiptodayBlue text-black w-full flex justify-center py-8 mb-10  rounded rounded-[2rem]'}`;
    const titleClasses = `${theme === 'dark' ? 'text-xl font-semibold text-shiptodayWhite':'text-xl font-semibold text-shiptodayBlack'}`
    const pgClasses = `${theme === 'dark' ? 'mt-3 text-base text-shiptodayGray opacity-80':'mt-3 text-base text-shiptodayBlack'}`
    const headerClasses = `${theme === 'dark' ? 'mt-6 text-3xl font-bold leading-tight text-shiptodayWhite sm:text-4xl lg:text-5xl':'mt-6 text-3xl font-bold leading-tight text-shiptodayBlack sm:text-4xl lg:text-5xl'}`
    
  return (
    <section className={sectionClasses}>
        <div className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h2 className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${titleClasses}`}>Get full access to ShipToday</h2>
                    <p className="mt-4 text-2xl font-medium">130+ Hand Crafted Coded Blocks</p>

                    <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
                        <a href="#" title="" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-shiptodayBlack border border-transparent rounded-md sm:w-auto hover:bg-blue-700 focus:bg-blue-700" role="button"> Try For Free </a>

                        <a href="#" title="" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button">
                            <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Contact Sales
                        </a>
                    </div>

                    <p className="mt-6 text-base text-black">Already have an account? <a href="#" title="" className="text-shiptodayBlack transition-all duration-200 hover:text-shiptodayWhite focus:text-blue-700 hover:underline">Log in</a></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CtaTwo