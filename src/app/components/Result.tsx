"use client";

import Link from 'next/link';
import React from 'react'

export default function Result({ isTie, isWinner, playerChoose }: {
    isTie: boolean,
    isWinner: string,
    playerChoose: string
}) {
    let message = "";
    let headerMessage = "";

    if (isTie) {
        headerMessage = "NOBODY WINS";
        message = "THIS GAME IS TIE";
    }

    console.log(isWinner, playerChoose)

    if (isWinner) {
        headerMessage = isWinner === playerChoose.toUpperCase() ? "YOU WON" : "OH NO, You Lost...";
        message = isWinner + " WON THIS ROUND";
    }

    return (
        <>
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            <div className='container w-full bg-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-6'>
                <div className='container flex flex-col justify-center items-center space-y-6'>
                    <span className='text-xs text-white'>{headerMessage}</span>
                    <p className='text-3xl text-white'>{message}</p>
                    <div className='flex w-full sm:w-1/2 justify-center gap-4 items-center'>
                        <Link className="flex-1 bg-gray-300 py-2 px-10 text-xs text-center rounded-full font-semibold text-black hover:bg-[#b2b4b6]" href={"/"}>
                            Quit
                        </Link>
                        <Link className="flex-1 bg-blue-300 py-2 px-10 text-xs text-center rounded-full font-semibold text-black hover:bg-[#5899da]" href={"/start"}>
                            New Game
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
