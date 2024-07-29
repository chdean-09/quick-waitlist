"use client";

import React from "react";

type Props = {};

import { motion } from "framer-motion";
import Image from "next/image";

export default function MapImage({}: Props) {
  return (
    <div className="relative w-[95%] sm:w-[85%]">
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        animate={{ opacity: 1 }}
      >
        <Image
          src={"/map.png"}
          alt="map"
          width={1000}
          height={1000}
          className="object-cover w-[82%] h-56 m-auto rounded-lg"
        />
        <Image
          src={"/lf-silid.png"}
          alt="lf-silid"
          width={200}
          height={200}
          className="absolute bottom-3 left-0"
        />
      </motion.div>
    </div>
  );
}
