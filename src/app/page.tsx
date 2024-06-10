import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <section>
        <MaxWidthWrapper className="pt-10 pb-20 lg:grid lg:grid-cols-3 sm:pb-32 
        lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 border border-red-900">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4 border border-black">
            hi
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start border border-green-900">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake1.png"/>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
