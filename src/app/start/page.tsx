"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Page() {
    const [chooseValue, setChooseValue] = useState("x");

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
            <div className="container w-3/4 sm:w-3/4 xl:w-1/3 space-y-4">
                <h1 className="text-lg font-semibold text-center">Pick player 1st mark</h1>
                <div className='flex flex-col bg-white rounded-xl p-10 gap-10 justify-between'>
                    <div className='flex justify-around'>
                        {
                            options.map((option) => {
                                return (
                                    <div key={option.name} className='flex flex-col items-center'>
                                        <Image className='cursor-pointer' src={`/${option.value}.svg`} width={120} height={120} alt={option.value} onClick={() => setChooseValue(option.value)}></Image>
                                        <input type="radio" name="radio-1" id={`radio-${option.name}`} className="radio checked:bg-blue-500 w-4 h-4 border-none" value={option.value} checked={option.value === chooseValue} onChange={() => setChooseValue(option.value)} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <span className="text-center text-sm font-semibold">REMEMBER: {chooseValue.toUpperCase()} IS GOING FIRST</span>
                </div>
                <Link className="w-full block bg-[#4FC3F7] py-2 text-sm text-center rounded-full font-semibold text-gray-100 hover:bg-[#36a2d4]" href={{
                    pathname: "/game",
                    query: {
                        player1: chooseValue
                    }
                }} replace>
                    Start Game
                </Link>
            </div>
        </main>
    )
}
