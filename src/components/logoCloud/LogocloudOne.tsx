'use client'
import React from 'react'
import { useTheme } from "next-themes"

type Props = {}

const LogocloudOne = (props: Props) => {

    const {theme} =useTheme()
    const sectionClasses = `${theme === 'dark' ? 'text-[#fff] bg-shiptodayBlack w-full w-full flex justify-center' : 'bg-shiptodayGrayLight text-black w-full flex justify-center'}`;
    const titleClasses = `${theme === 'dark' ? 'text-xl font-medium text-shiptodayWhite': 'text-xl font-medium text-shiptodayBlack' }`

  return (
    <section className={sectionClasses}>
        <div className="py-8 sm:py-12 lg:py-16 w-[80%] border">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className={titleClasses}>Trusted by world className creators</h2>
                </div>

                <div className="grid items-center grid-cols-2 gap-10 mt-12 md:grid-cols-4 sm:gap-y-16">
                    <div>
                        <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-1.png" alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-2.png" alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-auto h-10 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-3.png" alt="" />
                    </div>

                    <div>
                        <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogocloudOne