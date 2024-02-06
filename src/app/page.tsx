import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex max-w-7xl items-center justify-start mx-auto h-24">
        <div className="mr-auto flex items-center gap-x-2">
          <Image
            src={"/logo.svg"}
            width={50}
            height={50}
            alt="SSH.Studio's Logo"
          />
          <span className="font-semibold text-sm">
            SSH.Studio
          </span>
        </div>
        <div className="ml-auto">
          <button className="text-sm font-semibold border-yellow-300/50 hover:border-yellow-300 duration-200 px-4 py-2 rounded-lg border-2">
            Contact Us
          </button>
        </div>
      </header>
      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[600px]">
        <svg
          height={600}
          width={600}
          className="absolute  animate-[spin_50s_linear_infinite] z-0 stroke-yellow-500/25"
          viewBox="0 0 800 800"
        >
          <g fill="none" stroke-linecap="round">
            <circle
              r="363"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="1939 2281"
              transform="rotate(360, 400, 400)"
              opacity="0.71"
            ></circle>
            <circle
              r="346.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="1762 2177"
              transform="rotate(343, 400, 400)"
              opacity="0.69"
            ></circle>
            <circle
              r="330"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="1595 2073"
              transform="rotate(326, 400, 400)"
              opacity="0.16"
            ></circle>
            <circle
              r="313.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="1435 1970"
              transform="rotate(309, 400, 400)"
              opacity="0.54"
            ></circle>
            <circle
              r="297"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="1284 1866"
              transform="rotate(291, 400, 400)"
              opacity="1.00"
            ></circle>
            <circle
              r="280.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="1141 1762"
              transform="rotate(274, 400, 400)"
              opacity="0.92"
            ></circle>
            <circle
              r="264"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="1007 1659"
              transform="rotate(257, 400, 400)"
              opacity="0.57"
            ></circle>
            <circle
              r="247.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="881 1555"
              transform="rotate(240, 400, 400)"
              opacity="0.86"
            ></circle>
            <circle
              r="231"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="764 1451"
              transform="rotate(223, 400, 400)"
              opacity="0.68"
            ></circle>
            <circle
              r="214.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="655 1348"
              transform="rotate(206, 400, 400)"
              opacity="0.90"
            ></circle>
            <circle
              r="198"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="554 1244"
              transform="rotate(189, 400, 400)"
              opacity="0.89"
            ></circle>
            <circle
              r="181.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="462 1140"
              transform="rotate(171, 400, 400)"
              opacity="0.16"
            ></circle>
            <circle
              r="165"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="378 1037"
              transform="rotate(154, 400, 400)"
              opacity="0.67"
            ></circle>
            <circle
              r="148.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="302 933"
              transform="rotate(137, 400, 400)"
              opacity="0.67"
            ></circle>
            <circle
              r="132"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="235 829"
              transform="rotate(120, 400, 400)"
              opacity="0.78"
            ></circle>
            <circle
              r="115.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="176 726"
              transform="rotate(103, 400, 400)"
              opacity="0.38"
            ></circle>
            <circle
              r="99"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="126 622"
              transform="rotate(86, 400, 400)"
              opacity="0.89"
            ></circle>
            <circle
              r="82.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="84 518"
              transform="rotate(69, 400, 400)"
              opacity="0.19"
            ></circle>
            <circle
              r="66"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="50 415"
              transform="rotate(51, 400, 400)"
              opacity="0.74"
            ></circle>
            <circle
              r="49.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="25 311"
              transform="rotate(34, 400, 400)"
              opacity="0.25"
            ></circle>
            <circle
              r="33"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="8 207"
              transform="rotate(17, 400, 400)"
              opacity="0.49"
            ></circle>
            <circle
              r="16.5"
              cx="400"
              cy="400"
              stroke-width="7"
              stroke-dasharray="0 104"
              opacity="0.79"
            ></circle>
          </g>
        </svg>
        <div className="flex gap-y-4 relative flex-col items-center justify-center">
          <h1 className="py-5 text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-yellow-600/10">
            Coming Soon
          </h1>
          <p className="font-bold">We will be Live Soon!</p>
        </div>
      </div>
    </>
  );
}
