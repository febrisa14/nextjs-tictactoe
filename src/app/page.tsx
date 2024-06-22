import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container sm:w-1/2 space-y-4">
        <h1 className="text-6xl font-extrabold text-center">Tic Tac Toe</h1>
        <p className="text-center">Dive into the excitement now and experience
          the timeless joy of this classic game!</p>
        <Link className="w-full block bg-[#4FC3F7] py-2 text-sm text-center rounded-full font-semibold text-gray-100 hover:bg-[#36a2d4]" href={"/start"}>New Game</Link>
      </div>
    </main>
  );
}
