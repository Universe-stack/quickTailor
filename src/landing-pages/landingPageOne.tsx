import Image from "next/image";
import HeroOne from "@/components/hero/HeroOne";
import LogocloudOne from "@/components/logoCloud/LogocloudOne";
import FeaturesOne from "@/components/features/FeaturesOne";
import CtaOne from "@/components/cta/CtaOne";
import FaqOne from "@/components/faq/FaqOne";
import Steps from "@/components/steps/Steps";
import TestimonialOne from "@/components/testimonials/testimonialOne";

export default function LandingPageOne() {

  //how to use shadcn/ui -> install the component first, the copy the code from the docs and integrate
  return (
   <section className="w-[100%] flex -center">
        <div className="w-[100%] self-center">
            <HeroOne />
            <LogocloudOne />
            <FeaturesOne />
            <Steps />
            <TestimonialOne />
            <FaqOne />
            <CtaOne />
        </div>
   </section>
  );
}
