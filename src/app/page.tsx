'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* ✨ New content block for "Site in Progress" */}
        <div className="text-center sm:text-left">
          <h1 className="font-mono text-2xl font-boldmb-2">
            🚧 Site in Progress
          </h1>
          <p className="font-mono max-w-lg  mt-3">
            This website is currently under active development. We're working on features like user
            management, lead tracking, and admin dashboards.
          </p>
          <p className="font-mono text-gray-600 dark:text-gray-300 mt-3">
            To test or preview the application, please login.
          </p>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              href="/login"
              className="inline-block mt-4 rounded-full bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </main>

     
    </div>
  );
}
