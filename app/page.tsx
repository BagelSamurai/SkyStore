import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-[4rem]">
      <div className="flex items-center justify-center text-center gap-10 mt-[10rem] px-[10rem]">
        <Image
          width={500}
          height={500}
          alt="airplane"
          src="/airplane.png"
          unoptimized={true}
        ></Image>
        <p className="text-5xl font-bold text-foreground">
          Your premier destination for seamless file storage & management.
          Welcome to <span className="underline">SkyStore</span>
        </p>
      </div>

      <div className="">
        {" "}
        <Link
          href="/dashboard"
          className="bg-primary text-background p-8 rounded-full uppercase"
        >
          Try it for free
        </Link>
      </div>
    </main>
  );
}
