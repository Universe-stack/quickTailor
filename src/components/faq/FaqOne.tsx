'use client'
import React from 'react'
import {useTheme} from "next-themes"

type Props = {}

const FaqOne = (props: Props) => {
    const {theme} = useTheme()
    const sectionClasses = `${theme === 'dark' ? 'text-[#fff] bg-shiptodayBlack w-full w-full flex justify-center' : 'bg-shiptodayGrayLight text-black w-full flex justify-center'}`;
    const titleClasses = `${theme === 'dark' ? 'text-xl font-semibold text-shiptodayWhite':'text-xl font-semibold text-shiptodayBlack'}`
    const pgClasses = `${theme === 'dark' ? 'mt-3 text-base text-shiptodayGray opacity-80':'mt-3 text-base text-shiptodayBlack'}`
    const headerClasses = `${theme === 'dark' ? 'mt-6 text-3xl font-bold leading-tight text-shiptodayWhite sm:text-4xl lg:text-5xl':'mt-6 text-3xl font-bold leading-tight text-shiptodayBlack sm:text-4xl lg:text-5xl'}`
    
  return (
    <section className={sectionClasses}>
        <div className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${titleClasses}`}>Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                        <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                            <span className="flex text-lg font-semibold text-black"> How to create an account? </span>

                            <svg className="w-6 h-6 text-gray-400 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-shiptodayBlack">
                            <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-shiptodayOrange transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                            <span className="flex text-lg font-semibold text-black"> How can I make payment using Paypal? </span>

                            <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-shiptodayOrange transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <div className="">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                <span className="flex text-lg font-semibold text-black"> Can I cancel my plan? </span>

                                <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-shiptodayOrange transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                            <span className="flex text-lg font-semibold text-black"> How can I reach to support? </span>

                            <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-shiptodayOrange transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-shiptodayOrange transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
            </div>
        </div>

    </section>
  )
}

export default FaqOne