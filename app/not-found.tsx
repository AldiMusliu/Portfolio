import Image from "next/image";
import Error404 from "../../public/assets/images/error404.png";
import { poppins } from "./fonts";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={`${poppins.className} flex flex-col items-center justify-center h-screen `}
    >
      <div className="relative mb-12">
        <div className="bg-lightpurple w-[200px] h-[200px] rounded-full"></div>
        {/* <Image
          src={Error404}
          alt=""
          width={500}
          height={500}
          className="absolute top-8 right-6 w-[132px] h-auto"
        /> */}
      </div>
      <p className="font-semibold text-[18px] mb-3 text-center text-[#333D49] leading-7">
        Desc
      </p>
      <p className="font-normal text-sm text-[#A5A5A5] w-[380px] md:w-[480px] text-center mb-14 leading-5">
        Details
      </p>
      <Link href="/dashboard" className="font-semibold text-[#E82B75] text-sm">
        Back
      </Link>
    </div>
  );
}
