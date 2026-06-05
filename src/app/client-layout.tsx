"use client";

import { Providers } from "./providers";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useEffect, useRef, useState } from "react";
import scrollIntoView from "scroll-into-view-if-needed";

type SectionKey = "about" | "work" | "education" | "projects";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState<SectionKey>("about");

  const sectionsRef = useRef<Record<SectionKey, HTMLElement | null>>({
    about: null,
    work: null,
    education: null,
    projects: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionKey = entry.target.getAttribute("data-section") as SectionKey;
            if (sectionKey) {
              setCurrentPage(sectionKey);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleBreadcrumbClick = (key: string | number) => {
    const sectionKey = key as SectionKey;
    if (sectionsRef.current[sectionKey]) {
      scrollIntoView(sectionsRef.current[sectionKey], {
        scrollMode: "if-needed",
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Providers>
      <div className=" flex flex-col w-screen">
        <NavBar currentPage={currentPage} onBreadcrumbClick={handleBreadcrumbClick} />
        <main
          className="h-fit w-screen flex flex-col justify-center items-center"
          ref={(el) => {
            if (el) {
              sectionsRef.current.about = el.querySelector("[data-section='about']") || null;
              sectionsRef.current.work = el.querySelector("[data-section='work']") || null;
              sectionsRef.current.education = el.querySelector("[data-section='education']") || null;
              sectionsRef.current.projects = el.querySelector("[data-section='projects']") || null;
            }
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
