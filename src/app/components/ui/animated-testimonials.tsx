"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Alegreya } from 'next/font/google';
type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const alegreya = Alegreya({
  weight: ['400', '700'],
  subsets: ['latin'],
});


export const AnimatedTestimonials = ({
                                       testimonials,
                                       autoplay = true,
                                     }: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [randomRotations, setRandomRotations] = useState<number[]>([]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Use useEffect to set random rotations when component mounts
  useEffect(() => {
    const rotations = testimonials.map(() => Math.floor(Math.random() * 21) - 10);
    setRandomRotations(rotations);
  }, [testimonials]);

  return (
      <div className={`antialiased font-sans px-10 md:px-12 lg:px-20 py-20`} style={{ backgroundColor: "#EBCE89" }}>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center py-4">
            <motion.div
                key={active}
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -20, opacity: 0}}
                transition={{duration: 0.2, ease: "easeInOut"}}
            >
              <h3 className={`built-tilting text-7xl uppercase`} style={{letterSpacing: "1px"}}>
                <span style={{color: "#112B22"}}>{testimonials[active].name.split(" ")[0]}</span>{" "}
                <span style={{color: "#2E1413"}}>{testimonials[active].name.split(" ")[1]}</span>
              </h3>
              <p className={`text-sm`} style={{color: "#EBCE89"}}>
                {testimonials[active].designation}
              </p>
              <motion.p className={`text-xl font-bold ${alegreya.className}`} style={{color: "#582E18"}}>
                {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{filter: "blur(10px)", opacity: 0, y: 5}}
                        animate={{filter: "blur(0px)", opacity: 1, y: 0}}
                        transition={{duration: 0.2, ease: "easeInOut", delay: 0.02 * index}}
                        className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </div>

          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.src}
                        initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotations[index] ?? 0 }}
                        animate={{
                          opacity: isActive(index) ? 1 : 0.7,
                          scale: isActive(index) ? 1 : 0.95,
                          z: isActive(index) ? 0 : -100,
                          rotate: isActive(index) ? 0 : randomRotations[index] ?? 0,
                          zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                          y: isActive(index) ? [0, -80, 0] : 0,
                        }}
                        exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotations[index] ?? 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 origin-bottom"
                    >
                      <Image
                          src={testimonial.src}
                          alt={testimonial.name}
                          width={500}
                          height={500}
                          draggable={false}
                          className="h-full w-full rounded-3xl object-cover object-center"
                      />
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
  );
};