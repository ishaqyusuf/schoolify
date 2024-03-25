"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@repo/utils";
import screen1Light from "@/public/screens/screen-1-light.png";
import screen1 from "@/public/screens/screen-1.png";
import screen2Light from "@/public/screens/screen-2-light.png";
import screen2 from "@/public/screens/screen-2.png";
import screen3Light from "@/public/screens/screen-3-light.png";
import screen3 from "@/public/screens/screen-3.png";
import screen4Light from "@/public/screens/screen-4-light.png";
import screen4 from "@/public/screens/screen-4.png";
import screen5Light from "@/public/screens/screen-5-light.png";
import screen5 from "@/public/screens/screen-5.png";
import { AdaptiveImage } from "./adaptive-image";
import { BlurryCircle } from "./blurry-circle";
import { CardStack } from "./card-stack";

export function Screens() {
  const router = useRouter();

  const [activeApp, setActiveApp] = useState("midday");

  // const isDesktop = useMediaQuery("(min-width: 768px)");
  const renderActiveApp = () => {
    switch (activeApp) {
      case "midday":
        return (
          <div className={cn("relative")}>
            <BlurryCircle className="absolute -top-2 right-[320px]  hidden bg-[#FFECBB] md:block dark:bg-[#FFECBB]/40" />
            <BlurryCircle className="absolute -bottom-6 left-6 hidden bg-[#FFECBB]/50 md:block dark:bg-[#FFECBB]/20" />
            <BlurryCircle className="absolute -bottom-[60px] right-0 -z-10 hidden bg-[#3633D0]/5 md:block dark:bg-[#3633D0]/10" />
            <CardStack
              items={[
                {
                  id: 1,
                  name: "Overview",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Dashboard - Overview"
                      darkSrc={screen1}
                      lightSrc={screen1Light}
                      width={1031}
                      height={670}
                      priority
                    />
                  ),
                },
                {
                  id: 2,
                  name: "Tracker",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Dashboard - Tracker"
                      darkSrc={screen2}
                      lightSrc={screen2Light}
                      width={1031}
                      height={670}
                    />
                  ),
                },
                {
                  id: 3,
                  name: "Inbox",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Dashboard - Inbox"
                      darkSrc={screen3}
                      lightSrc={screen3Light}
                      width={1031}
                      height={670}
                    />
                  ),
                },
                {
                  id: 4,
                  name: "Vault",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Dashboard - Vault"
                      darkSrc={screen4}
                      lightSrc={screen4Light}
                      width={1031}
                      height={670}
                    />
                  ),
                },
                {
                  id: 5,
                  name: "Dashboard - Transactions",
                  content: (
                    <AdaptiveImage
                      quality={100}
                      alt="Dashboard - Transactions"
                      darkSrc={screen5}
                      lightSrc={screen5Light}
                      width={1031}
                      height={670}
                    />
                  ),
                },
              ]}
            />
          </div>
        );
      case "cal":
        return <></>;
      default:
        return null;
    }
  };
  return (
    <div className="mt-12 flex flex-col items-center justify-center md:mt-14">
      {renderActiveApp()}

      <div className="mt-8">{/* <Dock apps={apps} /> */}</div>
    </div>
  );
}
