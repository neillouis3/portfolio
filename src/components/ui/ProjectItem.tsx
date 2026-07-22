import { Image, Link } from "@heroui/react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProjectItemProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  liveLink: string;
  githubLink: string;
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
  className = ""
}: ProjectItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      
      // Distance from center: negative = above center, positive = below center
      const distanceFromCenter = elementCenter - windowCenter;
      
      // Convert to rotation (-3 to 3 degrees)
      const maxDistance = windowHeight / 2;
      const normalizedDistance = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));
      const rotate = -normalizedDistance * 3; // Invert so top = positive tilt
      
      setRotation(rotate);
    };
    
    // Find scrollable parent
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
  
  return (
    <div 
      ref={ref}
      className={`h-[60vh] lg:w-[50vw] lg:pr-56 ${className}`}
    >
      <h1 className="text-3xl">{title}</h1>
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
          <Image
            alt={imageAlt}
            className="object-cover rounded-xl max-lg:h-[25vh] h-full"
            src={imageSrc}
            shadow="sm"
          />
        </motion.div>
        {(liveLink || githubLink) && (
          <div className="flex flex-col mt-4">
            {liveLink && (
              <Link isExternal showAnchorIcon size="sm" underline="hover" href={liveLink}>
                Live Demo
              </Link>
            )}
            {githubLink && (
              <Link isExternal showAnchorIcon size="sm" underline="hover" href={githubLink}>
                Github Repo
              </Link>
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
