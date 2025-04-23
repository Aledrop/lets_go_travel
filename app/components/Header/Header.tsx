import Image from "next/image";
import HeaderNav from "./HeaderNav";
import HeaderTopBar from "./HeaderTopBar";
import { Stack } from "@mui/material";

export default function Header() {
  return (
    <header className="w-full">
      <Stack direction={{ md: "row", xs: "column" }} spacing={3} className="items-center">
        {/* Logo */}
        <div className="px-6 flex-items-center">
          <Image src="/images/logo.png" alt="Logo Let's Go Vacation" width={300} height={100} />
        </div>

        {/* Bloque derecho */}
        <div className="flex-1">
          <HeaderTopBar />
          <HeaderNav />
        </div>
      </Stack>
    </header>
  );
}
