"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Board from '../components/Board';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Result from '../components/Result';

const box = [
    {
        name: 1,
        value: 1
    },
    {
        name: 2,
        value: 2
    },
    {
        name: 3,
        value: 3
    },
    {
        name: 4,
        value: 4
    },
    {
        name: 5,
        value: 5
    },
    {
        name: 6,
        value: 6
    },
    {
        name: 7,
        value: 7
    },
    {
        name: 8,
        value: 8
    },
    {
        name: 9,
        value: 9
    }
];

export default function Page() {
    const searchParam = useSearchParams();
    const player1 = searchParam.get("player1");

    const [squares, setSquares] = useState<any[]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const [xIsNext, setXIsNext] = useState<boolean>(player1 === "x");
    const currentSquares = squares[currentMove];
    const [amountX, setAmountX] = useState<number>(0);
    const [amountO, setAmountO] = useState<number>(0);
    const [linesWinner, setLinesWinner] = useState<number[]>([]);
    const [isTie, setIsTie] = useState<boolean>(false);
    const [isWinner, setIsWinner] = useState<string>("");
    const [showResult, setShowResult] = useState<boolean>(false);

    const handlePlay = (nextSquares: string[]) => {
        const nextHistory = [...squares.slice(0, currentMove + 1), nextSquares];
        console.log(nextHistory, nextSquares);
        setSquares(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const handleClick = (i: number) => {
        if (currentSquares[i] || isWinner || isTie) {
            return;
        }

        const nextSquares = currentSquares.slice();

        if (xIsNext) {
            nextSquares[i] = "X";
            setAmountX((prevState) => prevState + 1);
            setXIsNext(false);
        } else {
            nextSquares[i] = "O";
            setAmountO((prevState) => prevState + 1);
            setXIsNext(true);
        }
        handlePlay(nextSquares);
    }

    const calculateWinner = (squares: string[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setLinesWinner(lines[i]);
                setIsWinner(squares[a]);
                return squares[a];
            }
        }

        if (currentSquares.filter((square: string) => square != null).length === 9) {
            setIsTie(true);
            return null;
        }

        return null;
    }

    useEffect(() => {
        calculateWinner(currentSquares);
        if (isWinner || isTie) {
            setShowResult(true);
        }
    }, [currentSquares, isWinner, isTie]);

    return (
        <main className="flex min-h-screen flex-col justify-center items-center relative">
            {showResult && <Result isTie={isTie} isWinner={isWinner} playerChoose={player1} />}
            <div className='container w-3/4 sm:w-1/4 space-y-4'>
                <div className='flex justify-between items-center'>
                    <Image src={"/xo.svg"} width={100} height={50} alt="xo"></Image>
                    <span className='py-4 px-14 bg-white text-sm text-center rounded-xl'>{xIsNext ? "X" : "O"} <span className='font-bold'>TURN</span></span>
                </div>
                <div className='container bg-white rounded-xl shadow-xl'>
                    <Board
                        box={box}
                        squares={currentSquares}
                        onClick={handleClick}
                        linesWinner={linesWinner}
                    />
                </div>
                <div className='w-full flex justify-between gap-4 items-center'>
                    <div className='bg-blue-400 p-2 w-full rounded-xl text-center flex flex-col'>
                        <span className='text-sm'>X ({player1 === "x" ? "You" : "CPU"})</span>
                        <span className='font-bold text-sm'>{amountX}</span>
                    </div>
                    <div className='bg-yellow-300 p-2 w-full rounded-xl text-center flex flex-col'>
                        <span className='text-sm'>O ({player1 === "o" ? "You" : "CPU"})</span>
                        <span className='font-bold text-sm'>{amountO}</span>
                    </div>
                </div>
                <Link className="w-full block bg-gray-300 py-2 text-sm text-center rounded-full font-semibold text-black hover:bg-[#b2b4b6]" href={"/start"}>
                    Reset Game
                </Link>
            </div>
        </main>
    )
}
