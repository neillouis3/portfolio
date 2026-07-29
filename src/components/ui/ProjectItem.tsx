import { Image, Button } from "@heroui/react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, Globe02Icon } from "@hugeicons/core-free-icons";

interface ProjectItemProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  liveLink: string;
  githubLink: string;
  videoSrc?: string;
  className?: string;
}

export default function ProjectItem({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  description,
  liveLink,
  githubLink,
  videoSrc,
  className = ""
}: ProjectItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      
      const distanceFromCenter = elementCenter - windowCenter;
      
      const maxDistance = windowHeight / 2;
      const normalizedDistance = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));
      const rotate = -normalizedDistance * 3;
      
      setRotation(rotate);
    };
    
    let scrollableParent: HTMLElement | null = null;
    let parent = ref.current?.parentElement;
    while (parent) {
      const style = window.getComputedStyle(parent);
      if (style.overflow === 'scroll' || style.overflow === 'auto' || style.overflowY === 'scroll' || style.overflowY === 'auto') {
        scrollableParent = parent;
        break;
      }
      parent = parent.parentElement;
    }
    
    const target = scrollableParent || window;
    target.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [videoSrc]);
  
  return (
    <div 
      ref={ref}
      className={`h-[60vh] lg:w-[50vw] lg:pr-56 ${className}`}
    >
      <h1 className="text-3xl font-normal tracking-tight">{title}</h1>
      <h2 className="text-sm text-default-500 mb-4">{subtitle}</h2>
      <div className="ml-0.5">  
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] },
          }}
        >
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={imageSrc}
              className="object-cover max-lg:h-[25vh] h-full w-full shadow-sm"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={imageAlt}
            />
          ) : (
            <Image
              alt={imageAlt}
              className="object-cover rounded-xl max-lg:h-[25vh] h-full"
              src={imageSrc}
              shadow="sm"
            />
          )}
        </motion.div>
        {(liveLink || githubLink) && (
          <div className="flex items-center gap-2 mt-4">
            {liveLink && (
              <Button
                as="a"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                isIconOnly
                size="sm"
                variant="flat"
                color="primary"
              >
                <HugeiconsIcon icon={Globe02Icon} size={16} strokeWidth={1.75} />
              </Button>
            )}
            {githubLink && (
              <Button
                as="a"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Repo"
                isIconOnly
                size="sm"
                variant="flat"
                color="default"
              >
                <HugeiconsIcon icon={Github01Icon} size={16} strokeWidth={1.75} />
              </Button>
            )}
          </div>
        )}
        <div className="w-full text-sm lg:hidden mt-4">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
