import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {

  //how to use shadcn/ui -> install the component first, the copy the code from the docs and integrate
  return (
   <section className="">
      <Button>Click Me</Button>
      <ModeToggle />
   </section>
  );
}
