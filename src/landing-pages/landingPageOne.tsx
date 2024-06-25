import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import HeroOne from "@/components/hero/HeroOne";
import LogocloudOne from "@/components/logoCloud/LogocloudOne";
import FeaturesOne from "@/components/features/FeaturesOne";

export default function LandingPageOne() {

  //how to use shadcn/ui -> install the component first, the copy the code from the docs and integrate
  return (
   <section className="w-[100%] flex justify-center">
        <div className="w-[100%] self-center">
            <HeroOne />
            <LogocloudOne />
            <FeaturesOne />
        </div>
   </section>
  );
}
