"use client";

import { useEffect, useRef, useState, memo } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

function LazyVideo({
  src,
  poster,
  className = "",
  loop = true,
  muted = true,
  playsInline = true,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Intersection Observer to play/pause based on visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);

          if (entry.isIntersecting) {
            // Load and play video when visible
            if (!hasLoaded) {
              setHasLoaded(true);
            }
            videoElement.play().catch((err) => {
              // Auto-play was prevented, which is fine
              console.debug("Video autoplay prevented:", err);
            });
          } else {
            // Pause video when not visible to save resources
            videoElement.pause();
          }
        });
      },
      {
        // Start loading when video is 20% visible
        threshold: 0.2,
        // Start observing 100px before the video enters viewport
        rootMargin: "100px",
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, [hasLoaded]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      className={className}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="metadata"
    >
      {/* Only load source when component has been visible */}
      {hasLoaded && <source src={src} type="video/mp4" />}
    </video>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(LazyVideo);
