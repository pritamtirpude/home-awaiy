import Link from "next/link";
import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <LuTent className="size-6" />
      </Link>
    </Button>
  );
}

export default Logo;
