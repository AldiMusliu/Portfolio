import { poppins } from "./fonts";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={`${poppins.className} flex flex-col items-center justify-center h-screen bg-black`}
    >
      <h1 className="text-6xl font-bold text-primary animate-pulse">404</h1>
      <p className="font-semibold text-[18px] mb-3 text-center text-[#cdd1d6] leading-7 animate-fadeIn">
        Page Not Found
      </p>
      <p className="font-normal text-sm text-[#A5A5A5] w-[380px] md:w-[480px] text-center mb-14 leading-5 animate-fadeInDelay">
        Sorry, the page you're looking for doesn't exist. Please check the URL
        or go back to the homepage.
      </p>
      <Link href="/">
        <div className="font-semibold text-primary text-sm hover:text-white hover:bg-primary transition-all duration-300 px-4 py-2 rounded-md">
          Back to Home
        </div>
      </Link>
    </div>
  );
}
