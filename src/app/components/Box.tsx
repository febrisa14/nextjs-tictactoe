import React from 'react'

export default function Box({ name, value, onClick, linesWinner }:
    {
        name: number,
        value: string,
        onClick: () => void,
        linesWinner: number[],
    }
) {
    const removeBorder = () => {
        switch (name) {
            case 1:
                return "border-l-0 border-t-0";
            case 4:
                return 'border-l-0';
            case 7:
                return "border-l-0 border-b-0";
            case 3:
                return "border-r-0 border-t-0";
            case 6:
                return "border-r-0";
            case 9:
                return "border-r-0 border-b-0";
            case 2:
                return "border-t-0";
            case 8:
                return "border-b-0";
        }
    }

    const findRotateLine = () => {
        switch (true) {
            case linesWinner.includes(0) && linesWinner.includes(1) && linesWinner.includes(2):
            case linesWinner.includes(3) && linesWinner.includes(4) && linesWinner.includes(5):
            case linesWinner.includes(6) && linesWinner.includes(7) && linesWinner.includes(8):
                return "rotate-180";
            case linesWinner.includes(0) && linesWinner.includes(3) && linesWinner.includes(6):
            case linesWinner.includes(1) && linesWinner.includes(4) && linesWinner.includes(7):
            case linesWinner.includes(2) && linesWinner.includes(5) && linesWinner.includes(8):
                return "rotate-90";
            case linesWinner.includes(0) && linesWinner.includes(4) && linesWinner.includes(8):
                return "rotate-45";
            case linesWinner.includes(2) && linesWinner.includes(4) && linesWinner.includes(6):
                return "-rotate-45";
            default:
                return "";
        }
    }

    return (
        <button onClick={onClick} className={`border-gray-300 border flex items-center justify-center h-20 ${removeBorder()} relative`}>
            <span className={`text-5xl font-semibold ${value === 'X' ? 'text-blue-400' : 'text-yellow-400'}`}>{value}</span>
            {
                linesWinner?.includes(name - 1) && <div className={`absolute w-full h-1 bg-black ${findRotateLine()}`}></div>
            }
        </button>
    )
}
