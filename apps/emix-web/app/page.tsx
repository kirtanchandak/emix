import { Benefits } from "@/components/Home/Benefits";
import { Highlight } from "@/components/ui/hero-highlight";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Pricing from "@/components/Home/Pricing";
import Image from "next/image";
import heroImg from "../assets/hero-img.png";
import FAQ from "@/components/Home/FAQ";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="md:pt-16 pt-8 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl text-center font-bold tracking-tight sm:text-5xl md:text-6xl">
                Easily Generate <br />
                <span className="text-[#48426D]">Email MJML Code</span>
              </h1>
              <p className="text-base md:text-md text-center font-medium text-muted-foreground">
                Struggling with email MJML code? Our tool handles it for you.
                Describe what you want, and watch as{" "}
                <Highlight className="">
                  AI instantly generates the MJML.
                </Highlight>{" "}
                Save time and focus on your content, not the code.
              </p>
              <div className="flex flex-col items-center justify-center">
                <ul className=" space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="text-[#312C51]" />
                    <span className="text-sm md:text-base">
                      AI generates email MJML code in seconds
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="text-[#312C51]" />
                    <span className="text-sm md:text-base">
                      No coding experience required
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="text-[#312C51]" />
                    <span className="text-sm md:text-base">
                      Customize your email with ease
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="text-[#312C51]" />
                    <span className="text-sm md:text-base">
                      Export your MJML code with one click
                    </span>
                  </li>
                </ul>

                {/* Call to action button */}
                <div className="mt-6">
                  <button className="bg-[#312C51] hover:bg-[#312C51]/90 text-xl text-white py-3 px-6 rounded-md">
                    Build Easily Now
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={heroImg}
                height={200}
                width={390}
                alt="hero-img"
                className="h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits and Pricing sections */}
        <Benefits />

        <div className="flex items-center justify-center">
          <div className="w-3/4">
            <MediaPlayer
              title=""
              src="https://youtu.be/e7JVH3nYgpY"
              playsInline
            >
              <MediaProvider />
              <PlyrLayout icons={plyrLayoutIcons} />
            </MediaPlayer>
          </div>
        </div>

        <Pricing />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
