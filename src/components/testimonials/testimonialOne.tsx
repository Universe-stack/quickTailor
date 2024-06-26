'use client'
import React from 'react'
import { useTheme } from 'next-themes'

type Props = {}

const TestimonialOne = (props: Props) => {
    const {theme} = useTheme()
    const sectionClasses = `${theme === 'dark' ? 'text-[#fff] bg-shiptodayBlack w-full w-full flex justify-center px-6' : 'bg-shiptodayWhite text-black w-full flex justify-center px-6'}`;
    const titleClasses = `${theme === 'dark' ? 'text-xl font-semibold text-shiptodayWhite':'text-xl font-semibold text-shiptodayBlack'}`
    const pgClasses = `${theme === 'dark' ? 'mt-3 text-base text-shiptodayGray opacity-80':'mt-3 text-base text-shiptodayBlack'}`
    const headerClasses = `${theme === 'dark' ? 'mt-6 text-3xl font-bold leading-tight text-shiptodayWhite sm:text-4xl lg:text-5xl':'mt-6 text-3xl font-bold leading-tight text-shiptodayBlack sm:text-4xl lg:text-5xl'}`
    
  return (
    <section className={sectionClasses}>
        <div className="w-full py-10 sm:py-16 lg:py-24 relative">
            <div className='absolute inset-0 bg-[url("https://res.cloudinary.com/dck5v2kub/image/upload/v1719372560/orange_people_xuwgpu.jpg")] bg-cover bg-center rounded-[2.5rem]'>
                <div className='absolute inset-0 bg-shiptodayBlack opacity-90 top-0 left-0 right-0 bottom-0 rounded-[2.5rem]'></div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
                <div className=" max-w-2xl mx-auto text-center mb-[8rem] w-full flex flex-col">
                    <h2 className={`absolute top-6 mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-shiptodayWhite z-50 self-center`}>What people say about us</h2>
                    <p className={` absolute top-[6rem] max-w-lg mx-auto mt-4 text-base leading-relaxed text-shiptodayGrayLight z-50 self-center` }>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3 relative">
                    <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                        <div className="flex flex-col justify-between flex-1 p-8">
                            <div className="flex-1">
                                <blockquote>
                                    <p className="text-lg text-gray-800">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                                </blockquote>
                            </div>

                            <div className="mt-8">
                                <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                <div className="flex items-center">
                                    <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg" alt="" />
                                    <div className="ml-3">
                                        <p className="text-base font-semibold text-gray-800 truncate">Devon Lane</p>
                                        <p className="text-base text-gray-500 truncate">President of Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                        <div className="flex flex-col justify-between flex-1 p-8">
                            <div className="flex-1">
                                <blockquote>
                                    <p className="text-lg text-gray-800">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                </blockquote>
                            </div>

                            <div className="mt-8">
                                <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                <div className="flex items-center">
                                    <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg" alt="" />
                                    <div className="min-w-0 ml-3">
                                        <p className="text-base font-semibold text-gray-800 truncate">Ronald Richards</p>
                                        <p className="text-base text-gray-500 truncate">Marketing Coordinator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                        <div className="flex flex-col justify-between flex-1 p-8">
                            <div className="flex-1">
                                <blockquote>
                                    <p className="text-lg text-gray-800">“This is a top quality product. No need to think twice before making it live on web.”</p>
                                </blockquote>
                            </div>

                            <div className="mt-8">
                                <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                <div className="flex items-center">
                                    <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg" alt="" />
                                    <div className="min-w-0 ml-3">
                                        <p className="text-base font-semibold text-gray-800 truncate">Jane Cooper</p>
                                        <p className="text-base text-gray-500 truncate">Dog Trainer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                        <div className="flex flex-col justify-between flex-1 p-8">
                            <div className="flex-1">
                                <blockquote>
                                    <p className="text-lg text-gray-800">“Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.”</p>
                                </blockquote>
                            </div>

                            <div className="mt-8">
                                <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                <div className="flex items-center">
                                    <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg" alt="" />
                                    <div className="min-w-0 ml-3">
                                        <p className="text-base font-semibold text-gray-800 truncate">Theresa Webb</p>
                                        <p className="text-base text-gray-500 truncate">Web Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                        <div className="flex flex-col justify-between flex-1 p-8">
                            <div className="flex-1">
                                <blockquote>
                                    <p className="text-lg text-gray-800">“My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                                </blockquote>
                            </div>

                            <div className="mt-8">
                                <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                <div className="flex items-center">
                                    <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg" alt="" />
                                    <div className="min-w-0 ml-3">
                                        <p className="text-base font-semibold text-gray-800 truncate">Darlene Robertson</p>
                                        <p className="text-base text-gray-500 truncate">Medical Assistant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                        <div className="flex flex-col justify-between flex-1 p-8">
                            <div className="flex-1">
                                <blockquote>
                                    <p className="text-lg text-gray-800">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                                </blockquote>
                            </div>

                            <div className="mt-8">
                                <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                <div className="flex items-center">
                                    <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg" alt="" />
                                    <div className="min-w-0 ml-3">
                                        <p className="text-base font-semibold text-gray-800 truncate">Floyd Miles</p>
                                        <p className="text-base text-gray-500 truncate">Nursing Assistant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default TestimonialOne