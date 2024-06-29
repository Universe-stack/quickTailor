'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import PriceCompareOne from '@/components/ui/price-compareOne'
import CtaTwo from '@/components/cta/CtaTwo'


type Props = {}

const PricingOne = (props: Props) => {
    const {theme} = useTheme()
    const sectionClasses = `${theme === 'dark' ? 'text-[#fff] bg-shiptodayBlack w-full w-full flex justify-center px-6 flex-col' : 'bg-shiptodayWhite text-black w-full flex justify-center px-6 flex-col'}`;
    const titleClasses = `${theme === 'dark' ? 'text-xl font-semibold text-shiptodayWhite':'text-xl font-semibold text-shiptodayBlack'}`
    const pgClasses = `${theme === 'dark' ? ' text-base text-shiptodayGray opacity-80':'text-base text-shiptodayBlack'}`
    const headerClasses = `${theme === 'dark' ? 'mt-6 text-3xl font-bold leading-tight text-shiptodayWhite sm:text-4xl lg:text-5xl':'mt-6 text-3xl font-bold leading-tight text-shiptodayBlack sm:text-4xl lg:text-5xl'}`
    
  return (
    <section className={sectionClasses}>
        <div className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className={`text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl ${titleClasses}`}>Pricing & Plans</h2>
                    <p className={`max-w-md mx-auto text-base leading-relaxed ${pgClasses} mt-3`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="mt-10">
                    <div className="flex items-center justify-center space-x-2.5">
                        <span className={`text-base font-medium ${pgClasses}`}> Monthly </span>

                        <button type="button" className="relative inline-flex flex-shrink-0 h-6 py-0.5 transition-colors duration-200 ease-in-out bg-transparent border-2 border-blue-600 rounded-full cursor-pointer w-12 focus:outline-none mt-2" role="switch">
                            <span aria-hidden="true" className="inline-block w-4 h-4 transition duration-200 ease-in-out translate-x-6 bg-blue-600 rounded-full shadow pointer-events-none"></span>
                        </button>

                        <span className={`text-base font-medium ${pgClasses}`}> Yearly </span>
                    </div>
                </div>

                <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 mt-14 md:gap-9">
                    <div className="overflow-hidden bg-transparent border-2 border-shiptodayGray rounded-md">
                        <div className="p-6 md:py-8 md:px-9">
                            <h3 className={`text-xl font-semibold ${titleClasses}`}>Personal</h3>
                            <p className={`text-sm  ${pgClasses}`}>All the basic features to boost your freelance career</p>

                            <div className="flex items-end mt-5">
                                <div className="flex items-start">
                                    <span className={`text-xl font-medium ${titleClasses}`}> $ </span>
                                    <p className="text-6xl font-medium tracking-tight">39</p>
                                </div>
                                <span className={`ml-0.5 text-lg ${titleClasses}`}> / month </span>
                            </div>

                            <a
                                href="#"
                                title=""
                                className={`inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold transition-all duration-200 bg-transparent border-2 rounded-full border-shiptodayBlack hover:bg-shiptodayOrange hover:text-white focus:text-white focus:bg-shiptodayBlack `}
                                role=""
                            >
                                Start 14 Days Free Trial
                            </a>

                            <ul className={`flex flex-col mt-8 space-y-4 `}>
                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className={`text-base font-medium ${pgClasses}`}> 1 Domain License </span>
                                    <svg className="w-4 h-4 ml-0.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className={`text-base font-medium ${pgClasses}`}> Full Celebration Library </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className={`text-base font-medium ${pgClasses}`}> 120+ Coded Blocks </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <strike className={`text-base font-medium ${pgClasses}`}> Design Files Included </strike>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <strike className={`text-base font-medium ${pgClasses}`}> Premium Support </strike>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-shiptodayBlue border-2 border-shiptodayGray rounded-md">
                        <div className="p-6 md:py-8 md:px-9">
                            <h3 className={`text-xl font-semibold ${titleClasses}`}>Agency</h3>
                            <p className={`text-sm  ${pgClasses}`}>All the basic features to boost your freelance career</p>

                            <div className="flex items-end mt-5">
                                <div className="flex items-start">
                                    <span className={`text-xl font-medium ${titleClasses}`}> $ </span>
                                    <p className="text-6xl font-medium tracking-tight">35</p>
                                </div>
                                <span className={`ml-0.5 text-lg ${titleClasses}`}> / month </span>
                            </div>

                            <a
                                href="#"
                                title=""
                                className={`inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold transition-all duration-200 bg-transparent border-2 rounded-full border-shiptodayBlack hover:bg-shiptodayOrange hover:text-white focus:text-white focus:bg-shiptodayBlack `}
                                role=""
                            >
                                Start 14 Days Free Trial
                            </a>

                            <ul className={`flex flex-col mt-8 space-y-4 `}>
                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className={`text-base font-medium ${pgClasses}`}> 1 Domain License </span>
                                    <svg className="w-4 h-4 ml-0.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className={`text-base font-medium ${pgClasses}`}> Full Celebration Library </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className={`text-base font-medium ${pgClasses}`}> 120+ Coded Blocks </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <strike className={`text-base font-medium ${pgClasses}`}> Design Files Included </strike>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-shiptodayOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <strike className={`text-base font-medium ${pgClasses}`}> Premium Support </strike>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PriceCompareOne />
        <CtaTwo />
    </section>
  )
}

export default PricingOne