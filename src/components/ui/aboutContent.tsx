"use client";
import { Link } from "@heroui/react";
import ResumeModal from "./resumeModal";
import ContactModal from "./contactModal";
import AboutBanners from "./aboutBanners";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="w-full h-fit flex flex-col py-8">
      <div className="flex items-center gap-4">
        <Image
          src="/pink-bean.gif"
          alt="Pink Bean avatar"
          width={64}
          height={64}
          unoptimized
          className="w-16 h-16 rounded-xl object-cover border border-default-200 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-normal tracking-tight text-foreground leading-tight">
            Neil Louise A. Castillon
          </h1>
          <p className="text-sm text-default-500 mt-1.5">
            Software Developer
          </p>
        </div>
      </div>

      <div className="mt-6">
        <AboutBanners />
      </div>

      <div className="mt-12 flex flex-col w-[90%] text-sm leading-relaxed text-foreground">
        <p>
          Hi! I&apos;m Louise
          <motion.span
            className="text-xl inline-block mx-1"
            animate={{ rotate: [0, 20, 0] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            👋
          </motion.span>
          , a fifth-year Computer Engineering student at{" "}
          <Link
            underline="always"
            href="https://www.mun.ca"
            size="sm"
            isExternal
          >
            Memorial University
          </Link>{" "}
          with a passion for technology that improves everyday life. I ocassionally work on personal projects that has clean and pleasing visuals.
        </p>
        <p>
          I&apos;m interested in robotics, automation, and AI for electrical
          systems. Outside of tech, I enjoy playing guitar, photography, hiking,
          traveling, and I&apos;m a huge <em>One Piece</em> fan.
        </p>
      </div>

      <div className="mt-10 flex items-center gap-2">
        <ContactModal />
        <ResumeModal />
      </div>
    </div>
  );
}
