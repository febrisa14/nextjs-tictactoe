import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Page() {
    const options: { name: string, value: string }[] = [
        {
            name: "x",
            value: "x"
        },
        {
            name: "o",
            value: "o"
        }
    ]

    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="container w-3/4 sm:w-1/4 space-y-4">
                <h1 className="text-lg font-semibold text-center">Pick player 1st mark</h1>
                <div className='flex flex-col bg-white rounded-xl p-10 gap-10 justify-between'>
                    <div className='flex justify-around'>
                        {
                            options.map((option) => {
                                return (
                                    <div key={option.name} className='flex flex-col items-center'>
                                        <Image src={`/${option.value}.svg`} width={120} height={120} alt={option.value}></Image>
                                        <input type="radio" name="radio-1" className="radio checked:bg-blue-500 w-4 h-4 border-none" value={option.value} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <span className="text-center text-sm font-semibold">REMEMBER: X IS GOING FIRST</span>
                </div>
                <Link className="w-full block bg-[#4FC3F7] py-2 text-sm text-center rounded-full font-semibold text-gray-100 hover:bg-[#36a2d4]" href={"/game"}>
                    Start Game
                </Link>
            </div>
        </main>
    )
}
