import React from 'react'

type Props = {}

const LogocloudOne = (props: Props) => {
  return (
    <section className="py-8 bg-white sm:py-12 lg:py-16">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-xl font-medium text-gray-900">Trusted by world className creators</h2>
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
    </section>
  )
}

export default LogocloudOne