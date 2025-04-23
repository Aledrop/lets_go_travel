"use client";

import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography, Stack } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";

interface Item {
  name: string;
  description: string;
  image: string;
}

const items: Item[] = [
  {
    name: "Primera imagen",
    description: "Descripción de la primera imagen",
    image: "/images/foto1.png",
  },
  {
    name: "Segunda imagen",
    description: "Descripción de la segunda imagen",
    image: "/images/foto2.png",
  },
];

function CarouselItem({ item }: { item: Item }) {
  return (
    <Paper elevation={3}>
      <Box
        sx={{
          height: 500,
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* <Typography variant="h6" mt={2}>
        {item.name}
      </Typography> */}
      {/* <Typography variant="body2">{item.description}</Typography> */}
      {/* <Button variant="contained" size="small" sx={{ mt: 1 }}>
        Ver más
      </Button> */}
    </Paper>
  );
}

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  return (
    <section className="relative">
      <p className="big-title absolute top-8 left-14 z-10">
        planea tu <br />
        próximo viaje
      </p>
      <Carousel
        index={index}
        // onChange={(now) => setIndex(now)}
        navButtonsAlwaysInvisible
        indicators={false}
        animation="fade"
        className="rounded-[4.5rem]"
      >
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>

      {/* Flecha Izquierda */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-4 z-20 text-orange-500 text-3xl"
      >
        <ArrowBackIos fontSize="inherit" />
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-20 text-orange-500 text-3xl"
      >
        <ArrowForwardIos fontSize="inherit" />
      </button>

      <p className="md:text-8xl text-4xl font-semibold text-orange-500 absolute md:bottom-[-2rem] bottom-[-1rem]  md:right-10 right-4 z-10">
        Destinos
      </p>
    </section>
  );
}
