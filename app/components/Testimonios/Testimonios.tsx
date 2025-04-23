"use client";

import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import Image from "next/image";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Container } from "postcss";

interface Testimonial {
  name: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ana",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    avatar: "/images/person1.png",
  },
  {
    name: "Carlos",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    avatar: "/images/person2.png",
  },
  {
    name: "Luis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    avatar: "/images/person1.png",
  },
  {
    name: "María",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    avatar: "/images/person2.png",
  },
  {
    name: "Pedro",
    text: "Otro testimonio más para completar cinco personas.",
    avatar: "/images/person1.png",
  },
  {
    name: "María",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    avatar: "/images/person2.png",
  },
  {
    name: "Pedro",
    text: "Otro testimonio más para completar cinco personas.",
    avatar: "/images/person1.png",
  },
];

function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="w-50 h-50 mb-4 overflow-y-hidden">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <p className="text-orange-500 h-50 text-xl">{testimonial.text}</p>
    </div>
  );
}

export default function TestimonialCarousel() {
  // Agrupar en slides de 3 elementos
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    slides.push(testimonials.slice(i, i + 3));
  }

  return (
    <section className="text-center p-4">
      <h2 className="title-section">Testimonios</h2>
      <Carousel indicators={false} navButtonsAlwaysInvisible animation="slide">
        {slides.map((group, i) => (
          <Box key={i} className="flex justify-center gap-6 py-8">
            {group.map((testimonial, j) => (
              <TestimonialItem key={j} testimonial={testimonial} />
            ))}
          </Box>
        ))}
      </Carousel>
    </section>
  );
}
