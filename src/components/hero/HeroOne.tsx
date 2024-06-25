'use client'
import React from 'react'
import { useTheme } from "next-themes"




type Props = {}

const HeroOne = (props: Props) => {

  const {theme}=useTheme()
  const sectionClasses = `${theme === 'dark' ? 'text-[#fff] bg-shiptodayBlack w-full h-[90vh] w-full flex justify-center' : 'bg-shiptodayWhite text-black w-full h-[90vh] flex justify-center'}`;

  return (
        <div className={sectionClasses}>
        <section className="py-10 sm:py-16 lg:py-24 w-[80%] self-center">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-3xl font-bold  sm:text-6xl lg:text-6xl">
                            Collaborate remotely, with
                            <div className="relative inline-flex">
                                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-bg-blue-700"></span>
                                <h1 className="relative text-4xl font-bold  sm:text-6xl lg:text-6xl">ShipToday.</h1>
                            </div>
                        </h1>

                        <p className="mt-8 leading-[1.5rem] text-[1rem]  sm:text-[1rem]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                        <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-shiptodayOrange hover:text-shiptodayBlack hover:bg-shiptodayWhite focus:shiptodayOrange" role="button"> Start exploring </a>

                            <a href="#" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                                <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path fill="#ff4d0b" stroke="#ff4d0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Watch video
                            </a>
                        </div>
                    </div>

                    <div>
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>

  )
}

export default HeroOne