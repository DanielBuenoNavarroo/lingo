import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src={"/HR.svg"}
            height={32}
            width={40}
            alt="flag"
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src={"/ES.svg"}
            height={32}
            width={40}
            alt="flag"
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src={"/FR.svg"}
            height={32}
            width={40}
            alt="flag"
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src={"/IT.svg"}
            height={32}
            width={40}
            alt="flag"
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src={"/JP.svg"}
            height={32}
            width={40}
            alt="flag"
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
