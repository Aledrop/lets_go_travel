"use client";

import { Stack } from "@mui/material";
import Image from "next/image";

export default function Copyright() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      className="w-full justify-center items-center px-6 py-4 border-t border-gray-200"
    >
      <p className="text-orange-500 mr-4 text-ms md:text-2xl text-center">
        COMPRA CON LA <br />
        <span className="font-bold">FORMA DE PAGO</span>
        <br />
        QUE PREFIERAS
      </p>
      <Image src="/images/medios-pago.png" width={800} height={100} alt="Formas de pago" />
    </Stack>
  );
}
