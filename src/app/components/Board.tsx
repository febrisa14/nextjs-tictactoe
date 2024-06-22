import React from 'react'
import Box from './Box';

type BoxType = {
    name: number
    value: number
}

export default function Board({ box, squares, onClick, linesWinner }:
    {
        box: BoxType[],
        squares: string[],
        onClick: (i: number) => void,
        linesWinner: number[],
    }
) {
    return (
        <div className='grid grid-cols-3 p-6'>
            {
                box.length > 0 && box.map((item, key) => {
                    return (
                        <Box
                            key={key}
                            name={item.name}
                            value={squares[key]}
                            onClick={() => onClick(key)}
                            linesWinner={linesWinner}
                        />
                    )
                })
            }
        </div>
    )
}
