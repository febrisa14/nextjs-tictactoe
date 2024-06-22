import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container w-3/4 sm:w-1/3 space-y-4 flex flex-col items-center">
        <svg width="244" height="118" viewBox="0 0 244 118" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M74.1435 16.9085L86.0996 4.9524C92.7028 -1.65079 103.409 -1.6508 110.012 4.95238C116.615 11.5556 116.615 22.2614 110.012 28.8646L98.0557 40.8208L110.012 52.7769C116.615 59.3801 116.615 70.086 110.012 76.6892C103.409 83.2923 92.7028 83.2923 86.0996 76.6891L74.1435 64.733L62.1874 76.6891C55.5842 83.2923 44.8783 83.2923 38.2751 76.6891C31.672 70.0859 31.672 59.38 38.2751 52.7769L50.2312 40.8208L38.2751 28.8647C31.672 22.2615 31.672 11.5556 38.2751 4.95245C44.8783 -1.65073 55.5842 -1.65072 62.1874 4.95246L74.1435 16.9085Z" fill="url(#paint0_linear_221_2906)" />
          <g filter="url(#filter0_f_221_2906)">
            <ellipse cx="74.3892" cy="82.7199" rx="44" ry="5.28" fill="#2F8DDE" />
          </g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M169.893 81.5367C192.406 81.5367 210.655 63.2868 210.655 40.7745C210.655 18.2622 192.406 0.0123291 169.893 0.0123291C147.381 0.0123291 129.131 18.2622 129.131 40.7745C129.131 63.2868 147.381 81.5367 169.893 81.5367ZM169.893 53.003C176.647 53.003 182.122 47.5281 182.122 40.7744C182.122 34.0207 176.647 28.5457 169.893 28.5457C163.14 28.5457 157.665 34.0207 157.665 40.7744C157.665 47.5281 163.14 53.003 169.893 53.003Z" fill="url(#paint1_linear_221_2906)" />
          <g filter="url(#filter1_f_221_2906)">
            <ellipse cx="169.611" cy="82.7102" rx="44" ry="5.28" fill="#F8A00B" />
          </g>
          <defs>
            <filter id="filter0_f_221_2906" x="0.38916" y="47.4399" width="148" height="70.5601" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_221_2906" />
            </filter>
            <filter id="filter1_f_221_2906" x="95.6113" y="47.4302" width="148" height="70.5601" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_221_2906" />
            </filter>
            <linearGradient id="paint0_linear_221_2906" x1="33.3228" y1="0" x2="64.2007" y2="97.6873" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4FC3F7" />
              <stop offset="1" stop-color="#2979FF" />
            </linearGradient>
            <linearGradient id="paint1_linear_221_2906" x1="129.131" y1="0.0123291" x2="159.965" y2="97.5595" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFD54F" />
              <stop offset="1" stop-color="#FB8C00" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center">Tic Tac Toe</h1>
        <p className="text-center text-sm">Dive into the excitement now and experience
          the timeless joy of this classic game!</p>
        <Link className="w-full block bg-[#4FC3F7] py-2 text-sm text-center rounded-full font-semibold text-gray-100 hover:bg-[#36a2d4]" href={"/start"}>New Game</Link>
      </div>
    </main>
  );
}
