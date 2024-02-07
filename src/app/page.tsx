"use client";

import ContactUsPopup from "@/components/ContactUsPopup";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>SSH.Studio</title>
        <meta
          name="description"
          content="Official Site of SSH.studio"
        />
      </Head>
      <header className="flex max-w-7xl px-4 items-center justify-start mx-auto h-24">
        <div className="mr-auto flex items-center gap-x-2">
          <Image
            src={"/LOGO.svg"}
            width={50}
            height={50}
            alt="SSH.Studio's Logo"
          />
          <span className="font-semibold text-sm">
            SSH.Studio
          </span>
        </div>
        <div className="ml-auto">
          <ContactUsPopup />
        </div>
      </header>
      <div className="relative max-w-7xl overflow-hidden mx-auto flex flex-col items-center justify-center min-h-[600px]">
        <svg
          height={600}
          width={600}
          className="absolute max-w-96 max-h-96 md:max-h-full md:max-w-full animate-[spin_50s_linear_infinite] z-0 stroke-yellow-500/25"
          viewBox="0 0 800 800"
        >
          <g fill="none" strokeLinecap="round">
            <circle
              r="363"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="1939 2281"
              transform="rotate(360, 400, 400)"
              opacity="0.71"
            ></circle>
            <circle
              r="346.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="1762 2177"
              transform="rotate(343, 400, 400)"
              opacity="0.69"
            ></circle>
            <circle
              r="330"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="1595 2073"
              transform="rotate(326, 400, 400)"
              opacity="0.16"
            ></circle>
            <circle
              r="313.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="1435 1970"
              transform="rotate(309, 400, 400)"
              opacity="0.54"
            ></circle>
            <circle
              r="297"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="1284 1866"
              transform="rotate(291, 400, 400)"
              opacity="1.00"
            ></circle>
            <circle
              r="280.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="1141 1762"
              transform="rotate(274, 400, 400)"
              opacity="0.92"
            ></circle>
            <circle
              r="264"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="1007 1659"
              transform="rotate(257, 400, 400)"
              opacity="0.57"
            ></circle>
            <circle
              r="247.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="881 1555"
              transform="rotate(240, 400, 400)"
              opacity="0.86"
            ></circle>
            <circle
              r="231"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="764 1451"
              transform="rotate(223, 400, 400)"
              opacity="0.68"
            ></circle>
            <circle
              r="214.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="655 1348"
              transform="rotate(206, 400, 400)"
              opacity="0.90"
            ></circle>
            <circle
              r="198"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="554 1244"
              transform="rotate(189, 400, 400)"
              opacity="0.89"
            ></circle>
            <circle
              r="181.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="462 1140"
              transform="rotate(171, 400, 400)"
              opacity="0.16"
            ></circle>
            <circle
              r="165"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="378 1037"
              transform="rotate(154, 400, 400)"
              opacity="0.67"
            ></circle>
            <circle
              r="148.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="302 933"
              transform="rotate(137, 400, 400)"
              opacity="0.67"
            ></circle>
            <circle
              r="132"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="235 829"
              transform="rotate(120, 400, 400)"
              opacity="0.78"
            ></circle>
            <circle
              r="115.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="176 726"
              transform="rotate(103, 400, 400)"
              opacity="0.38"
            ></circle>
            <circle
              r="99"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="126 622"
              transform="rotate(86, 400, 400)"
              opacity="0.89"
            ></circle>
            <circle
              r="82.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="84 518"
              transform="rotate(69, 400, 400)"
              opacity="0.19"
            ></circle>
            <circle
              r="66"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="50 415"
              transform="rotate(51, 400, 400)"
              opacity="0.74"
            ></circle>
            <circle
              r="49.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="25 311"
              transform="rotate(34, 400, 400)"
              opacity="0.25"
            ></circle>
            <circle
              r="33"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="8 207"
              transform="rotate(17, 400, 400)"
              opacity="0.49"
            ></circle>
            <circle
              r="16.5"
              cx="400"
              cy="400"
              strokeWidth="7"
              strokeDasharray="0 104"
              opacity="0.79"
            ></circle>
          </g>
        </svg>
        <div className="flex gap-y-4 relative flex-col items-center justify-center">
          <h1 className="py-5 text-5xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-yellow-600/10">
            Coming Soon
          </h1>
          <p className="font-bold opacity-50">
            We will be live Soon!
          </p>
        </div>
      </div>
    </>
  );
}
