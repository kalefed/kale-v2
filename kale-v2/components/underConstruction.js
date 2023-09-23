import { dm_mono, josefin_sans } from "@/app/font";
import { FadeInUp } from "@/components/fadeInUp";
import Image from "next/image";
import construction from "..//public/images/construction.svg";

export default function Construction() {
  return (
    <FadeInUp>
      <div>
        <div className="h-[calc(100vh-65px)] flex flex-col justify-center items-center">
          <Image
            priority
            src={construction}
            height={120}
            width={120}
            alt="construction"
          />
          <h1
            className={`lg:text-3xl md:text-2xl text-xl text-center mt-5 ${josefin_sans.className}`}
          >
            sorry, this page is currently under construction!
          </h1>
          <p
            className={`md:text-md text-sm text-[#a8afb5] pb-5 ${dm_mono.className}`}
          >
            content is coming soon :))
          </p>
        </div>
      </div>
    </FadeInUp>
  );
}
